//import "react-pro-sidebar/dist/css/styles.css";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import { Menu, MenuItem, ProSidebarProvider } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Item = ({ title, to, icon, selected, setSelected }: any) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const LeftSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected]: any = useState("Home");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebarProvider>
        <Menu>
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src="https://media.licdn.com/dms/image/C4E03AQEewBFVQk8JYw/profile-displayphoto-shrink_800_800/0/1631791044101?e=1680134400&v=beta&t=AH8F54slKfTJBsDRGwErgl8gLOZqJN5-1agcr8Pu6pM"
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                Alberto Grillo
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                Desenvolvedor Junior
              </Typography>
            </Box>
          </Box>

          <Item
            title="Home"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Cartões"
            to="/Cartoes"
            icon={<CreditCardOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Menu>
      </ProSidebarProvider>
    </Box>
  );
};

export default LeftSidebar;
