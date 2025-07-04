import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Amanda
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Sardella
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Hi, I’m Amanda, a passionate full stack developer and technology
            enthusiast based in Toronto. Driven by curiosity and continuous
            learning, I’m eager to collaborate on innovative projects that make
            an impact. I welcome new opportunities to grow and contribute
            meaningfully in the tech world. I’m excited about future
            opportunities where I can grow and make meaningful contributions. If
            you’d like to connect or share ideas, feel free to reach out!
          </p>

          <div className="opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
                View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-sm text-muted-foreground mb-2">Scroll</span>
      <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
