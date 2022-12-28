import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

interface IconsType {
  [key: string]: JSX.Element;
}

const Icons: IconsType = { delete: <AiOutlineDelete />, edit: <FiEdit /> };

export default Icons;
