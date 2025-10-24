import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import UploadSection from "@/components/UploadSection";
import ResultCard from "@/components/ResultCard";
import Navigation from "@/components/Navigation";

interface AnalysisResult {
  issue_type: string;
  location: string;
  confidence: number;
}

const Report = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleAnalysisComplete = (analysisResult: AnalysisResult) => {
    setResult(analysisResult);
  };

  const handleSave = () => {
    setResult(null);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Report a Civic Issue</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Upload an image or describe the problem, and our AI will extract the details.
        </p>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 pb-12">
        {!result ? (
          <UploadSection onAnalysisComplete={handleAnalysisComplete} />
        ) : (
          <ResultCard 
            issueType={result.issue_type}
            location={result.location}
            confidence={result.confidence}
            onSave={handleSave}
          />
        )}
      </section>

    </div>
  );
};

export default Report;
