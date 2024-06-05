"use client";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import HeaderAppBar from "../components/header-app-bar";
import { useRouter } from "next/navigation";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import FooterAppBar from "../components/footer-app-bar";

export default function DailQuizCompleted() {
  const router = useRouter();
  const totalQuestions = 5;
  const correctQuestions = 4;
  const score = 15;
  const timeTaken = "2:10";

  const percentage = (correctQuestions / totalQuestions) * 100;
  const scoreAndTime = [
    {
      heading: "Score",
      value: score,
      icon: <StarIcon />,
    },
    {
      heading: "Time Taken",
      value: timeTaken,
      icon: <AccessTimeIcon />,
    },
  ];

  const messages = [
    "Good Effort!",
    "Great Work!",
    "Well Done!",
    "Almost Perfect!",
    "Perfect!",
  ];

  let messageIndex = Math.floor((percentage / 100) * messages.length) - 1;
  messageIndex = messageIndex < 0 ? 0 : messageIndex;
  const message = messages[messageIndex];

  return (
    <>
      <HeaderAppBar nav="/pwa/home" />
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          textAlign: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ mt: 1 }}>
          Daily Test Completed
        </Typography>

        <Box sx={{ position: "relative", display: "inline-flex", mt: 3 }}>
          <CircularProgress
            variant="determinate"
            value={percentage}
            size={80}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
              fontSize={18}
            >
              {correctQuestions}/{totalQuestions}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            mt: 4,
          }}
        >
          {scoreAndTime.map((item, index) => (
            <Box
              key={index}
              sx={{
                px: 3,
                py: 1,
                borderRadius: 2,
                border: "2px solid #ccc",
              }}
            >
              <Typography variant="h6">{item.heading}</Typography>
              <Typography
                variant="body1"
                component={"div"}
                sx={{ display: "inline-flex", alignItems: "center" }}
              >
                {item.icon} <Box sx={{ mt: 0.5, ml: 0.5 }}>{item.value}</Box>
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography variant="h4" sx={{ my: 4 }}>
          {message}
        </Typography>
        <Button variant="contained" onClick={() => router.push("/pwa/home")}>
          Continue
        </Button>
      </Box>
      <FooterAppBar />
    </>
  );
}
