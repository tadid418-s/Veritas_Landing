"use client";
import { Button } from "@heroui/react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  const icon = mounted && resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />;

  return (
    <Button isIconOnly variant="light" onPress={handleClick}>
      {icon}
    </Button>
  );
}
