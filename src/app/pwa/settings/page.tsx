"use client";
import FooterAppBar from "../components/footer-app-bar";
import HeaderAppBar from "../components/header-app-bar";
import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import EmailIcon from "@mui/icons-material/Email";
import BugReportIcon from "@mui/icons-material/BugReport";
import GradeIcon from "@mui/icons-material/Grade";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GavelIcon from "@mui/icons-material/Gavel";
import PaymentIcon from "@mui/icons-material/Payment";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import { useRouter } from "next/navigation";

export default function Settings() {
  const router = useRouter();

  const linkList = [
    {
      heading: "Account",
      links: [
        {
          label: "Account settings",
          icon: <SettingsIcon />,
          onClick() {},
        },
        {
          label: "Log out",
          icon: <LogoutIcon />,
          onClick() {
            router.push("/pwa/login");
          },
        },
      ],
    },
    {
      heading: "Support",
      links: [
        {
          label: "Help center",
          icon: <LiveHelpIcon />,
          onClick() {},
        },
        {
          label: "Account/Billing problem",
          icon: <EmailIcon />,
          onClick() {},
        },
        {
          label: "Bug report/feedback",
          icon: <BugReportIcon />,
          onClick() {},
        },
      ],
    },
    {
      heading: "Social",
      links: [
        {
          label: "Rate Us",
          icon: <GradeIcon />,
          onClick() {},
        },
        {
          label: "Twitter",
          icon: <TwitterIcon />,
          onClick() {},
        },
        {
          label: "Facebook",
          icon: <FacebookIcon />,
          onClick() {},
        },
      ],
    },
    {
      heading: "Terms",
      links: [
        {
          label: "Terms of use",
          icon: <GavelIcon />,
          onClick() {},
        },
        {
          label: "Payment terms",
          icon: <PaymentIcon />,
          onClick() {},
        },
        {
          label: "Privacy policy",
          icon: <PrivacyTipIcon />,
          onClick() {},
        },
      ],
    },
  ];

  return (
    <>
      <HeaderAppBar heading="Settings" />
      {linkList.map((list, listIndex) => (
        <List
          key={list.heading + listIndex}
          component="nav"
          subheader={
            <ListSubheader component="div">{list.heading}</ListSubheader>
          }
        >
          {list.links.map((item, itemIndex) => (
            <ListItemButton key={item.label + itemIndex} onClick={item.onClick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      ))}
      <FooterAppBar />
    </>
  );
}
