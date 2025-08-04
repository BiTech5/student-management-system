import { useState } from "react";
import type { ReactNode } from "react";
import { SideBarContext } from "../Context/SideBarContext";

export const SideBarProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setOpen] = useState(true);

    const toggleSidebar = () => setOpen(prev => !prev);

    return (
        <SideBarContext.Provider value={{ isOpen, toggleSidebar }}>
            {children}
        </SideBarContext.Provider>
    );
};