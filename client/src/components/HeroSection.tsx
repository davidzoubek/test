import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

interface HeroSectionProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function HeroSection({ isDarkMode, toggleTheme }: HeroSectionProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative">
      {/* Theme toggle button in top-right corner */}
      <Button
        size="icon"
        variant="ghost"
        onClick={toggleTheme}
        className="absolute top-6 right-6"
        data-testid="button-theme-toggle"
      >
        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>

      {/* Main content centered */}
      <div className="text-center max-w-2xl">
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-foreground"
          data-testid="text-main-headline"
        >
          Moje první stránka
        </h1>
        
        <p 
          className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
          data-testid="text-intro-message"
        >
          Ahoj, učím se vibe coding
        </p>
      </div>
    </div>
  );
}