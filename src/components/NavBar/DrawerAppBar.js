import * as React from "react";
import { Menubar } from "primereact/menubar";

function DrawerAppBar() {
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => scrollToSection("home"),
    },
    {
      label: "About Me",
      icon: "pi pi-user",
      command: () => scrollToSection("about"),
    },
    {
      label: "Experience",
      icon: "pi pi-briefcase",
      command: () => scrollToSection("experience"),
    },
    {
      label: "Projects",
      icon: "pi pi-folder-open",
      command: () => scrollToSection("projects"),
    },
    {
      label: "Services",
      icon: "pi pi-cog",
      command: () => scrollToSection("services"),
    },
    {
      label: "Contact",
      icon: "pi pi-phone",
      command: () => scrollToSection("contact"),
    },
  ];

  const end = (
    <div className="flex items-center gap-2 mr-2">
      <i className="pi pi-code mx-2" style={{ color: "var(--primary-color)" }}></i>
      RG
    </div>
  );
  const scrollToSection = (section) => {
    const element = document.getElementsByName(section)[0];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <Menubar model={items} end={end} />
    </div>
  );
}

export default DrawerAppBar;
