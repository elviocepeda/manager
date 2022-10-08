import { globalColors } from "../../common";
import { Home, Boxes,Employee, ShoppingBag, Wallet, Help } from "../../icons";

const BAR_ICONS_STYLE = {
  margin: ".5rem",
  color: `${globalColors.color_01}`,
};
const { margin, color } = BAR_ICONS_STYLE;

export const NAVBAR = [
  {
    id: 1,
    text: "inicio",
    path: "/home",
    icon: <Home margin={margin} color={color} />,
  },
  {
    id: 2,
    text: "productos",
    path: "/products",
    icon: <Boxes margin={margin} color={color} />,
  },
  {
    id: 3,
    text: "personal",
    path: "/employees",
    icon: <Employee margin={margin} color={color} />,
  },
  {
    id: 4,
    text: "comprar",
    path: "/buys",
    icon: <ShoppingBag margin={margin} color={color} />,
  },
  {
    id: 5,
    text: "vender",
    path: "/selling",
    icon: <Wallet margin={margin} color={color} />,
  },
  {
    id: 6,
    text: "ayuda",
    path: "/help",
    icon: <Help margin={margin} color={color} />,
  },
];
