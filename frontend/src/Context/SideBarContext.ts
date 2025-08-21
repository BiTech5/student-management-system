import { createContext } from "react";
import type { SideBarProps } from "../model/SideBarProps";

export const SideBarContext = createContext<SideBarProps>({
    isOpen: true,
    toggleSidebar: () => {},
});
