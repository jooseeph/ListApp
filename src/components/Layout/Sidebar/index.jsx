/* eslint-disable react/prop-types */
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsArchive,
  BsPeopleFill,
  BsPersonAdd,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/productform">
            <BsFillArchiveFill className="icon" /> Products
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/productform">
            <BsArchive className="icon" /> Add Products
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/usertable">
            <BsPeopleFill className="icon" /> User
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/">
            <BsPersonAdd className="icon" /> Add User
          </Link>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
