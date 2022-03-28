import { Container, Grid } from "@mui/material";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { SWRConfig } from "swr";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

function Home({ fallback }: { fallback: any }) {
  const [active, setActive] = useState<string>("Feed");
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <SWRConfig value={{ fallback }}>
      <Header toggleDrawer={toggleDrawer} />
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Grid container spacing={1}>
          <Grid item md>
            <Sidebar open={open} toggleDrawer={toggleDrawer} />
          </Grid>
          <Grid item xs={12} md={6.5}>
            <Feed active={active} setActive={setActive} fallback={fallback} />
          </Grid>
          <Grid item md={3.5}>
            <Widgets see title="Listings" />
            <Widgets title="#news" />
          </Grid>
        </Grid>
      </Container>
    </SWRConfig>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const article = await fetch(`https://dev.to/stories/feed/feed?page=1`).then(res => res.json());
  const props = {
    fallback: {
      "https://dev.to/stories/feed/feed?page=1": article,
    },
  };

  return { props };
};
