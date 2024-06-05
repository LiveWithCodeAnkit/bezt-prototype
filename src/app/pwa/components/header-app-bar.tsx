"use client";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import { KeyboardBackspace as KeyboardBackspaceIcon } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface HeaderAppBarProps {
  nav?: string | "goBack";
  heading?: string;
  auth?: boolean;
}

export default function HeaderAppBar({
  nav,
  heading,
  auth,
}: HeaderAppBarProps) {
  const router = useRouter();

  function handleBackNav() {
    if (nav === "goBack") {
      router.back();
    } else {
      router.push(nav || "/");
    }
  }

  return (
    <>
      <AppBar
        position="fixed"
        color={auth ? "primary" : "inherit"}
        sx={{ mb: 1 }}
      >
        <Toolbar>
          <Container
            maxWidth="sm"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {!auth && nav && (
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleBackNav}
                sx={{ mr: 1 }}
              >
                <KeyboardBackspaceIcon />
              </IconButton>
            )}
            <Typography variant="h6">{heading}</Typography>
            {auth && (
              <Grid container alignItems={"center"} gap={3}>
                <Grid item sx={{ mt: 0.6 }}>
                  <Image
                    src="/logo-small.png"
                    alt="logo"
                    width={40}
                    height={40}
                  />
                </Grid>
                <Grid
                  item
                  sx={{
                    fontSize: 12,
                    fontWeight: "500",
                    textTransform: "uppercase",
                    lineHeight: 1.2,
                  }}
                >
                  <Box>Score/League</Box>
                  <Box>
                    <span style={{ fontSize: 20 }}>20</span>/Hydrogen
                  </Box>
                </Grid>
                <Grid
                  item
                  sx={{
                    fontSize: 12,
                    fontWeight: "500",
                    textTransform: "uppercase",
                    lineHeight: 1.2,
                  }}
                >
                  <Box>Streak</Box>
                  <Box>
                    <span style={{ fontSize: 20 }}>1</span> Day
                  </Box>
                </Grid>
              </Grid>
            )}
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
