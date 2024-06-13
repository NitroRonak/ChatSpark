import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense } from "react";
import {
  Add as AddIcon,
  Group as GroupIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Logout as LogoutIcon,
  Notifications,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const SearchDialog = React.lazy(() => import("../specific/Search"));
const NotificationsDialog = React.lazy(() => import("../specific/Notifications"));
const NewGroupDialog = React.lazy(() => import("../specific/NewGroup"));
const Header = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = React.useState(false);
  const [isSearch, setIsSearch] = React.useState(false);
  const [isNewGroup, setIsNewGroup] = React.useState(false);
  const [isNotification, setIsNotification] = React.useState(false);
  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };
  const openSearchDialog = () => {
    setIsSearch((prev) => !prev);
  };
  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };
  const logoutHandler = () => {};
  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };
  const navigateToGroups = () => {
    navigate("/groups");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, height: "4rem" }}>
        <AppBar
          position="static"
          sx={{ bgcolor: "rgb(5,1,20)", color: "white" }}
        >
          <Toolbar>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", display: { xs: "none", sm: "block" } }}
            >
              Chat<span style={{ color: "yellow" }}>Spark</span>
            </Typography>

            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconBtn
                title="Search"
                icon={<SearchIcon />}
                onClick={openSearchDialog}
              />

              <IconBtn
                title="New Group"
                icon={<AddIcon />}
                onClick={openNewGroup}
              />

              <IconBtn
                title="My Groups"
                icon={<GroupIcon />}
                onClick={navigateToGroups}
              />

              <IconBtn
                title="Notifications"
                icon={<Notifications />}
                onClick={openNotification}
              />
              
              <IconBtn 
                title="Logout" 
                icon={<LogoutIcon />} 
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<div>Loading...</div>}> <SearchDialog /> </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<div>Loading...</div>}> <NotificationsDialog /> </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<div>Loading...</div>}> <NewGroupDialog /> </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};
export default Header;
