import { Link } from "react-router-dom";
import React from "react";

const NavLinks = ({ href, title }) => {
  return <Link href={href}>{title}</Link>;
};

export default NavLinks;
