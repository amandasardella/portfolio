import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
            {/* theme toggle */}
            <ThemeToggle />

            {/* background effects */}
            <StarBackground />

            {/* navbar */}
            <Navbar />

            {/* main content */}
            <main>
            <HeroSection />
            <AboutSection />
            </main>

            {/* footer */}
        </div>
    );
};