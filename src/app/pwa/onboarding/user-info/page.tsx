"use client";
import { TextField, Button, Box } from "@mui/material";
import HeaderAppBar from "../../components/header-app-bar";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function UserInfo() {
  const router = useRouter();

  return (
    <>
      <HeaderAppBar nav="goBack" heading="User Info" />
      <form>
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="First Name" variant="outlined" required fullWidth />
          <TextField label="Last Name" variant="outlined" required fullWidth />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            required
            fullWidth
          />

          <Button
            variant="contained"
            onClick={() => {
              router.push("/pwa/home");
            }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
}
