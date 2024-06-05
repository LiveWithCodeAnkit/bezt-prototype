"use client";

import { Box, IconButton, Typography } from "@mui/material";
import { KeyboardBackspace as KeyboardBackspaceIcon } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function Client() {
  const router = useRouter();
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h4">Admin</Typography>
      <Typography variant="body1">Coming Soon</Typography>
      <IconButton onClick={() => router.back()}>
        <KeyboardBackspaceIcon />
      </IconButton>
    </Box>
  );
}
