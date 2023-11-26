import { Select, SelectItem } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";

const getCurrentIconTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? (
    <MoonIcon />
  ) : (
    <SunIcon />
  );

const themes = {
  system: "Системна",
  light: "Світла",
  dark: "Темна",
};
const themesIcon = {
  dark: <MoonIcon />,
  light: <SunIcon />,
  system: getCurrentIconTheme(),
};

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    applyTheme();
  });

  const applyTheme = () => {
    const selectedTheme = localStorage.getItem("theme") || theme;
    if (selectedTheme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.className = isDark ? "dark" : "light";
      return;
    }
    document.documentElement.className = selectedTheme;
  };

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  };

  return (
    <Select
      className="w-36"
      size="xs"
      selectedKeys={[theme]}
      startContent={themesIcon[theme]}
      onChange={handleThemeChange}
    >
      {Object.entries(themes).map(([name, lable]) => (
        <SelectItem key={name}>{lable}</SelectItem>
      ))}
    </Select>
  );
};

export default ThemeSwitcher;
