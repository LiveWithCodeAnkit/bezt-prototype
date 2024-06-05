"use client";

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  LinearProgress,
  Container,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";

export default function ProgressMeter({ value = 0 }) {
  const router = useRouter();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color={"inherit"} sx={{ mb: 1 }}>
        <Toolbar>
          <Container
            maxWidth="sm"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => router.back()}
              sx={{ mr: 1 }}
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{
                flexGrow: 1,
                border: "1px solid #ccc",
                p: 0.5,
                borderRadius: 5,
              }}
            >
              <LinearProgress
                color="success"
                value={value}
                variant="determinate"
                sx={{ p: 0.5, borderRadius: 2 }}
              />
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
