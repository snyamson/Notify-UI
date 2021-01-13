import React from "react";
import AppText from "./AppText";

function HeaderTitle({ title }) {
  return <AppText numberOfLines={1}>{title}</AppText>;
}

export default HeaderTitle;
