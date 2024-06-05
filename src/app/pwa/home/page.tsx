"use client";

import { Button, Typography, Box, AppBar } from "@mui/material";
import {
  QuizOutlined as QuizOutlinedIcon,
  RocketLaunchOutlined as RocketLaunchOutlinedIcon,
} from "@mui/icons-material";
import HeaderAppBar from "../components/header-app-bar";
import FooterAppBar from "../components/footer-app-bar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <HeaderAppBar auth />
      <Box sx={{ mx: 2 }}>
        <Typography variant="h6">Welcome, Raj</Typography>

        <Box
          sx={{
            my: 2,
            boxShadow: "0 0 5px #bbb",
            textAlign: "center",
            borderRadius: 2,
          }}
        >
          <Box sx={{ p: 1.5 }}>
            <Typography
              variant="subtitle2"
              sx={{ textTransform: "uppercase", fontWeight: "normal" }}
            >
              Today&apos;s Free Test
            </Typography>
            <Box
              sx={{
                my: 1,
                mx: "auto",
                p: 2,
                width: 98,
                borderRadius: 20,
                border: "1px solid #ccc",
              }}
            >
              <QuizOutlinedIcon sx={{ fontSize: 60 }} />
            </Box>
            <Typography variant="h6">Mixed Mode</Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: "normal" }}>
              Challenge a variety of topics with this daily test.
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
            onClick={() => router.push("/pwa/daily-test")}
          >
            Start Test
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            my: 2,
            p: 2,
            boxShadow: "0 0 5px #bbb",
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              p: 1,
              width: 59,
              borderRadius: 20,
              border: "1px solid #ccc",
              textAlign: "center",
            }}
          >
            <RocketLaunchOutlinedIcon fontSize="large" />
          </Box>
          <Box>
            <Typography variant="body1">Try Premium for Free</Typography>
            <Typography variant="subtitle2" fontWeight={"normal"} color="#666">
              Get unlimited access to bezt for 14 days
            </Typography>
          </Box>
        </Box>
        <FooterAppBar />
      </Box>
    </>
  );
}
