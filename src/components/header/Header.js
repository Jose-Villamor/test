import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  skillsSection,
  techStack,
  educationInfo,
  blogSection,
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewSkills = skillsSection.display;
  const viewEducationInfo = educationInfo.display;
  const viewtechStack = techStack.display;

  const viewBlog = blogSection.display;
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="http://192.168.0.155:3000/personal-site" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewtechStack && (
            <li>
              <a href="#proficency">Proficiency</a>
            </li>
          )}
          {viewEducationInfo && (
            <li>
              <a href="#workExperience">Work Experience</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Certifications</a>
            </li>
          )}
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
