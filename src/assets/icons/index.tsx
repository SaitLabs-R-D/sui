import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

interface IconsType {
  [key: string]: JSX.Element;
}

const Icons: IconsType = {
  delete: <AiOutlineDelete />,
  edit: <FiEdit />,
  settings: <RiUserSettingsLine />,
};

export default Icons;
