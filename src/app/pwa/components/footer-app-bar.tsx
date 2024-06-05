"use client";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import BarChartIcon from "@mui/icons-material/BarChart";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

type Nav = "Home" | "Tests" | "Stats" | "More";

const BottomNav = [
  {
    label: "Home",
    icon: <HomeIcon />,
    path: "/pwa/home",
  },
  {
    label: "Tests",
    icon: <ArticleIcon />,
    path: "/pwa/tests",
  },
  {
    label: "Stats",
    icon: <BarChartIcon />,
    path: "/pwa/stats",
  },
  {
    label: "More",
    icon: <MoreVertIcon />,
    path: "/pwa/settings",
  },
];

export default function FooterAppBar() {
  const [value, setValue] = useState<Nav | null>(null);
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    switch (pathName) {
      case BottomNav[0].path:
        setValue("Home");
        break;
      case BottomNav[1].path:
        setValue("Tests");
        break;
      case BottomNav[2].path:
        setValue("Stats");
        break;
      case BottomNav[3].path:
        setValue("More");
        break;
    }
  }, [pathName]);

  useEffect(() => {
    switch (value) {
      case "Home":
        router.push(BottomNav[0].path);
        break;
      case "Tests":
        router.push(BottomNav[1].path);
        break;
      case "Stats":
        router.push(BottomNav[2].path);
        break;
      case "More":
        router.push(BottomNav[3].path);
        break;
    }
  }, [value, pathName, router]);

  return (
    <>
      <BottomNavigation />
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={6}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {BottomNav.map((item, index) => (
            <BottomNavigationAction
              key={item.label + index}
              label={item.label}
              value={item.label}
              icon={item.icon}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </>
  );
}
