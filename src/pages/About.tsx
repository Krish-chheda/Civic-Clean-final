import { Sparkles, Target, Users, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About CivicClean</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering citizens to report and track civic issues with the power of AI
          </p>
        </div>

        {/* Mission Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="bg-card border rounded-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  CivicClean aims to bridge the gap between citizens and civic authorities by providing
                  an intelligent platform for reporting infrastructure issues. We leverage cutting-edge
                  AI technology to automatically identify and categorize problems, making it easier for
                  communities to maintain and improve their neighborhoods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl font-bold text-primary mb-3">1</div>
              <h3 className="text-xl font-semibold mb-2">Report</h3>
              <p className="text-muted-foreground">
                Upload an image or describe the civic issue in text format
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl font-bold text-primary mb-3">2</div>
              <h3 className="text-xl font-semibold mb-2">Analyze</h3>
              <p className="text-muted-foreground">
                Our AI extracts the issue type and location automatically
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl font-bold text-primary mb-3">3</div>
              <h3 className="text-xl font-semibold mb-2">Track</h3>
              <p className="text-muted-foreground">
                Monitor the status and progress of your reported issues
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <Users className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">Community First</h3>
              <p className="text-muted-foreground">
                We believe in empowering communities to take charge of their local infrastructure
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <Zap className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Leveraging the latest AI technology to make civic reporting effortless and accurate
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
