import { Avatar } from "@material-ui/core";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";
import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{user}] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" alt={user?.displayName} src={user?.photoURL} />
        <AccessTime />
      </div>

      <div className="header__search">
        <Search />
        <input placeholder="Search Rca Group" />
      </div>

      <div className="header__right">
        <HelpOutline />
      </div>
    </div>
  );
}

export default Header;
