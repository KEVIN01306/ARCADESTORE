
import { PiGameControllerFill, PiUserCheckDuotone } from "react-icons/pi";

const MenuItems = [
    {
        name: "Games",
        link: "/games",
        icon: PiGameControllerFill,
        roles: ['admin','user']
    },
    {
        name: "Users",
        link: "/users",
        icon: PiUserCheckDuotone,
        roles: ['admin']
    }
]

export default MenuItems