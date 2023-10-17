import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Icon,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import profile from "../../assets/images/avatarImg.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MediationIcon from "@mui/icons-material/Mediation";

const Navbar = () => {
  return (
    <Card
      sx={{
        width: "18%",
        background: "#040440",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#fff",
      }}
    >
      <List sx={{ width: "100%" }}>
        <Box
          sx={{
            marginTop: 5,
            marginBottom: 5,
            marginLeft:5,
            color: "white",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Icon sx={{ margin: "5px" }}>
            <GridViewIcon sx={{ color: "white" }} />
          </Icon>
          <Typography
            sx={{ color: "white", alignItems: "center", paddingLeft: "10px" }}
            variant="h5"
          >
            Dashboard
          </Typography>
        </Box>
        {NavbarButton.map((item) => {
          return (
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} sx={{ color: "white" }} />
              <NavigateNextIcon style={{ color: "white" }} />
            </ListItemButton>
          );
        })}
      </List>
      <CardHeader 
        avatar={<Avatar alt="profile" src={profile} />}
        action={
          <IconButton aria-label="settings">
            <KeyboardArrowDownIcon sx={{ color: "white" }} />
          </IconButton>
        }
        title={<Typography color={"white"}>Evano</Typography>}
        subheader={<Typography color={"white"}>Product Manager</Typography>}
        style={{background:"#bcd2d9d1"}}
      />
    </Card>
  );
};

export default Navbar;
