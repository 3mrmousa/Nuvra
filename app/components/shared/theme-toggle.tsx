/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import sun from "../../../public/theme-icons/icons8-summer-50.svg";
import moon from "../../../public/theme-icons/icons8-moon-and-stars-50.svg";

export default function ThemeToggle() {
  const { theme,  setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }


  return (
    <div className="flex">
      <button
        onClick={() => setTheme("light")}
        className="p-3 bg-zinc-300 dark:bg-zinc-600 rounded-l-4xl cursor-pointer hidden md:block"
      >
        <Image src={sun} alt="Light mode" width={24} height={24} />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className="p-3 bg-zinc-600 dark:bg-zinc-300 rounded-r-4xl cursor-pointer hidden md:block"
      >
        <Image src={moon} alt="Dark mode" width={24} height={24} />
      </button>

      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-1 bg-zinc-300 rounded-xl cursor-pointer md:hidden"
      >
        <Image
          src={theme === "light" ? moon : sun}
          alt="Toggle theme"
          width={40}
          height={50}
        />
      </button>
    </div>
  );
}
