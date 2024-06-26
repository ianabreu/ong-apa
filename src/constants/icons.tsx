import { FaPix } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { MdOutlinePix } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa6";
import { Menu } from "lucide-react";

export const IconMap = {
  pix: <FaPix size={25} />,
  money: <MdAttachMoney size={25} />,
  zap: <MdOutlinePix size={25} />,
  copy: <FaRegCopy size={20} />,
  menu: <Menu size={25} />,
};

export type IconProps = keyof typeof IconMap;

export function Icon(name: IconProps) {
  return IconMap[name];
}
