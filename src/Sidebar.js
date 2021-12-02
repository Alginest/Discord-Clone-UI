import React from "react";
import "./Sidebar.css";
//icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import CallIcon from "@mui/icons-material/Call";
import MicIcon from "@mui/icons-material/Mic";
import HeadsetIcon from "@mui/icons-material/Headset";
import SettingsIcon from "@mui/icons-material/Settings";
// Material Ui
import { InfoOutlined } from "@mui/icons-material";
import { Avatar } from "@material-ui/core";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Anime Fan Club</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelsList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p> Stream </p>
        </div>
        <div className="sidebar__voiceIcons">
          <InfoOutlined />
          <CallIcon />
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg" />
        <div className="sidebar__profileInfo">
          <h3>@sensussama</h3>
          <p>#thisIsMyId</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
