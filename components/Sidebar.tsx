import { Drawer, List, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Links from "./Links";

function Sidebar({ open, toggleDrawer }: { open: boolean; toggleDrawer: () => void }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const links = [
    { title: "Home", img: "./assets/sidebar/home.svg" },
    { title: "Reading List", img: "./assets/sidebar/reading.svg" },
    { title: "Listings", img: "./assets/sidebar/listing.svg" },
    { title: "Podcasts", img: "./assets/sidebar/podcast.svg" },
    { title: "Videos", img: "./assets/sidebar/video.svg" },
    { title: "Tags", img: "./assets/sidebar/tag.svg" },
    { title: "More...", img: "" },
  ];

  const tags = ["Nextjs", "react", "javascript", "ruby", "ruby on rails", "beginners", "typescript"];

  return matches ? (
    <Drawer anchor="left" open={open} onClose={toggleDrawer}>
      <List onClick={toggleDrawer} sx={{ width: "280px", px: 2 }}>
        {links.map((item, i) => (
          <Links key={item.title} title={item.title} img={item.img} />
        ))}

        <Typography fontWeight="bold" mt={3} mb={1} px={1}>
          My Tags
        </Typography>
        {tags.map(item => (
          <Links key={item} title={`# ${item}`} />
        ))}
      </List>
    </Drawer>
  ) : (
    <Stack alignItems="flex-start">
      {links.map((item, i) => (
        <Links key={item.title} title={item.title} img={item.img} />
      ))}

      <Typography fontWeight="bold" mt={3} mb={1} px={1}>
        My Tags
      </Typography>
      {tags.map(item => (
        <Links key={item} title={`# ${item}`} />
      ))}
    </Stack>
  );
}

export default Sidebar;
