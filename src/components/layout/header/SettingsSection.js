import React from "react";
import { Paragraph } from "../../atoms";
import { Notifications, ShoppingCart } from "../../icons";
import { Avatar } from "../../molecules";

export const SettingsSection = () => {
  return (
    <div className="settings-section_container">
      <Paragraph content="Entrar" />
      <Paragraph content="Registrarse" />
      <Notifications classname="settings-section_icons" />
      <ShoppingCart classname="settings-section_icons" />
      <Avatar />
    </div>
  );
};
