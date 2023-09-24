import React from "react";
import "./style.css";
import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import { socialprofils, translate } from "../../language/content_option";

export const Footer = () => {
  return (
    <div className="stick_follow_footer">
      <ul>
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p>{translate.follow}</p>
    </div>
  );
};
