/* eslint-disable @next/next/no-img-element */
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Container, IconButton, OutlinedInput, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

function Header({ toggleDrawer }: { toggleDrawer: () => void }) {
  return (
    <AppBar position="relative" elevation={1} sx={{ bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <IconButton
            sx={{ mr: 1, display: { sm: "block", md: "none" }, color: "black", "&:hover": { color: "#3e4adb" } }}
            onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <img src="./assets/logo.svg" alt="logo" height={40} />

          <OutlinedInput
            placeholder="Search..."
            size="small"
            sx={{
              ml: 2,
              maxWidth: "450px",
              width: "100%",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          />

          <Stack direction="row" alignItems="center" spacing={1} justifyContent="flex-end" width="100%">
            <Button variant="contained" size="medium" sx={{ fontWeight: "bold", fontSize: "15px" }}>
              Create a post
            </Button>
            <IconButton sx={{ display: { xs: "none", sm: "inline-flex" } }}>
              <img src="./assets/notification.svg" alt="icon button" height={21} />
            </IconButton>
            <IconButton>
              <img src="/assets/bell.svg" alt="icon button" height={21} />
            </IconButton>
            <IconButton size="small">
              <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" sx={{ width: 30, height: 30 }} />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
