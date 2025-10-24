import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Upload, BarChart, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <Navigation />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-6">
          <Sparkles className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
          CivicClean
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          AI-Powered Civic Issue Detection Platform
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
          Report civic problems like potholes, broken infrastructure, and more. 
          Our AI automatically extracts issue types and locations from text or images.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/report">
            <Button size="lg" className="gap-2">
              <Upload className="w-5 h-5" />
              Get Started
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card p-8 rounded-lg border shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Upload className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold text-xl mb-3">Multi-Input Support</h3>
            <p className="text-muted-foreground">
              Upload images or describe issues in text. Our AI processes both formats seamlessly.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg border shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold text-xl mb-3">AI-Powered Analysis</h3>
            <p className="text-muted-foreground">
              Advanced machine learning extracts issue types and locations automatically.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg border shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <BarChart className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold text-xl mb-3">Track Progress</h3>
            <p className="text-muted-foreground">
              Monitor all your reported issues and their status in your personal dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-card border rounded-lg p-12 text-center max-w-3xl mx-auto">
          <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Make Your City Better</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of citizens reporting and tracking civic issues to improve their communities.
          </p>
          <Link to="/auth">
            <Button size="lg">Start Reporting Issues</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
