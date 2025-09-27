import HeroSection from "@/components/HeroSection";
import { useTheme } from "@/components/ThemeProvider";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <HeroSection 
      isDarkMode={isDarkMode} 
      toggleTheme={toggleTheme}
    />
  );
}