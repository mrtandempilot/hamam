import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main 
      className="min-h-screen flex items-center justify-center bg-background px-4"
      role="main"
      aria-label="Page not found"
    >
      <div className="text-center max-w-2xl">
        <h1 
          className="text-6xl md:text-8xl font-bold text-primary mb-4"
          aria-label="404 - Page Not Found"
        >
          404
        </h1>
        <h2 
          className="text-3xl md:text-4xl font-semibold text-foreground mb-6"
        >
          Page Not Found
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          We couldn't find the page you're looking for. Don't worry though, you can still experience our authentic Turkish hamam and spa services.
        </p>
        <div className="space-y-4">
          <Button 
            size="lg" 
            onClick={() => navigate("/")}
            className="text-lg px-8"
            aria-label="Return to home page"
          >
            Return Home
          </Button>
          <div className="text-muted-foreground">
            <p className="mb-2">Or visit our popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="link" 
                onClick={() => navigate("/#services")}
                className="text-lg"
                aria-label="View our services"
              >
                Services
              </Button>
              <Button 
                variant="link" 
                onClick={() => navigate("/#gallery")}
                className="text-lg"
                aria-label="View our gallery"
              >
                Gallery
              </Button>
              <Button 
                variant="link" 
                onClick={() => navigate("/#contact")}
                className="text-lg"
                aria-label="Contact us"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
