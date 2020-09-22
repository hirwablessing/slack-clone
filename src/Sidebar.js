import {
  Add,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import db from "./firebase";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{user}] = useStateValue();
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    //Run this code when the sidebar component loads because of the empyt []
    db.collection("rooms").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Rca Group</h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </div>
        <Create />
      </div>
      
      <SidebarOption Icon={Inbox} title="Threads" />
      <SidebarOption Icon={InsertComment} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Draft" />
      <SidebarOption Icon={BookmarkBorder} title="Channel Browse" />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" />
      <SidebarOption Icon={FileCopy} title="File Browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Show less" />
      <hr />
      <SidebarOption Icon={Add} addChannelOption title="Add Channel" />

      {/* Connect to db and list all channels using <SidebarOption component */}
      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
