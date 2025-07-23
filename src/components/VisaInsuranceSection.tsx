import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Shield, CheckCircle, Clock, Globe, CreditCard } from 'lucide-react';

const VisaInsuranceSection = () => {
  const visaFeatures = [
    'Visa processing for 80+ countries',
    'Expert guidance and documentation',
    'Fast-track processing available',
    'Regular status updates'
  ];

  const insuranceFeatures = [
    'Comprehensive travel coverage',
    'Medical emergencies covered',
    'Trip cancellation protection',
    'Instant digital policy'
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Travel Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get your visa processed and travel insurance sorted in one place
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Visa Section */}
          <Card className="travel-card border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Need a Visa?</h3>
                  <p className="text-muted-foreground">Get visa assistance for 80+ countries</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {visaFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-primary/5 rounded-lg p-4 text-center">
                  <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">Processing Time</div>
                  <div className="text-xs text-muted-foreground">5-15 business days</div>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 text-center">
                  <Globe className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">Countries</div>
                  <div className="text-xs text-muted-foreground">80+ destinations</div>
                </div>
              </div>

              <Button className="btn-travel-primary w-full group">
                Apply for Visa
                <FileText className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
              </Button>
            </CardContent>
          </Card>

          {/* Insurance Section */}
          <Card className="travel-card border-2 border-green-200 hover:border-green-400 transition-colors duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Travel with Peace of Mind</h3>
                  <p className="text-muted-foreground">Buy insurance in minutes. Instant digital policy.</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {insuranceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <CreditCard className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">Starting From</div>
                  <div className="text-xs text-muted-foreground">₹99 per day</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <Clock className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">Coverage</div>
                  <div className="text-xs text-muted-foreground">Up to ₹10 lakhs</div>
                </div>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-white group">
                Get Insurance
                <Shield className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-primary/5 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-foreground mb-4">Complete Documentation Support</h4>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our expert team will guide you through the entire process, from document collection to final approval. 
              We handle all the paperwork so you can focus on planning your trip.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <span className="text-sm font-medium text-foreground">✓ Document Checklist</span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <span className="text-sm font-medium text-foreground">✓ Application Review</span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <span className="text-sm font-medium text-foreground">✓ Status Tracking</span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <span className="text-sm font-medium text-foreground">✓ Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaInsuranceSection;