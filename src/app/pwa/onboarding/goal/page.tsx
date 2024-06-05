"use client";
import { Paper, Box, Button, LinearProgress, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import HeaderAppBar from "../../components/header-app-bar";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Item = styled(Paper)`
  &:hover {
    background-color: #dcffe4;
    border: 1px solid #7bce8e !important;
  }
  &.active {
    background-color: #c7ffd4;
    border: 1px solid #7bce8e !important;
  }
`;

export default function Onboarding() {
  const router = useRouter();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleItemClick = (label: string) => {
    if (selectedItems.includes(label)) {
      setSelectedItems(selectedItems.filter((item) => item !== label));
    } else {
      setSelectedItems([...selectedItems, label]);
    }
  };

  const goals = [
    {
      label: "Self Assessment",
      selectionPercentage: 40,
    },
    {
      label: "Job Opportunities",
      selectionPercentage: 80,
    },
    {
      label: "Paid Internships",
      selectionPercentage: 30,
    },
    {
      label: "Career Specialization",
      selectionPercentage: 50,
    },
  ];

  return (
    <Box>
      <HeaderAppBar nav="goBack" heading="What is your goal?" />
      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexWrap: "wrap",
          gap: "20px 18px",
        }}
      >
        {goals.map((goal) => (
          <Item
            key={goal.label}
            sx={{
              py: 2,
              px: 4,
              borderRadius: 2,
              border: "1px solid #bbb",
              cursor: "pointer",
              width: "calc(50% - 9px)",
            }}
            elevation={0}
            className={selectedItems.includes(goal.label) ? "active" : ""}
            onClick={() => handleItemClick(goal.label)}
          >
            <Typography variant="body1" sx={{ mb: 1, fontWeight: "bold" }}>
              {goal.label}
            </Typography>
            <Box>
              <LinearProgress
                variant="determinate"
                value={goal.selectionPercentage}
                color="success"
                sx={{ p: 0.3, borderRadius: 2, width: "100%", opacity: 0.3 }}
              />
              <Typography
                sx={{
                  mt: 0.5,
                  color: "#999",
                  fontSize: 14,
                  textAlign: "right",
                }}
              >
                {goal.selectionPercentage}% of users selected
              </Typography>
            </Box>
          </Item>
        ))}
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          fullWidth
          onClick={() => {
            router.push("/pwa/onboarding/user-info");
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
}
