import { Plane, Building, Shield, Phone, Award, Globe, Clock, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Plane,
      title: 'Verified Flight Deals',
      description: 'Access to exclusive flight deals from verified airlines worldwide with best price guarantee.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Building,
      title: 'Trusted Hotel Partners',
      description: 'Partner with 500,000+ hotels globally, ensuring comfortable stays at competitive prices.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Shield,
      title: 'Visa & Insurance Assistance',
      description: 'Complete visa processing and travel insurance support for 80+ countries worldwide.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Phone,
      title: '24x7 Concierge Support',
      description: 'Round-the-clock customer support to assist you before, during, and after your journey.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Award,
      title: 'Award-Winning Service',
      description: 'Recognized as the leading travel platform with multiple industry awards and certifications.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extensive network covering 180+ countries with local expertise and support.',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: Clock,
      title: 'Instant Booking',
      description: 'Quick and secure booking process with instant confirmation and e-tickets.',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: Heart,
      title: 'Customer Satisfaction',
      description: '98% customer satisfaction rate with thousands of happy travelers worldwide.',
      color: 'bg-red-100 text-red-600'
    }
  ];

  return (
    <section className="py-16 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Travel with Traviiczo?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover what makes us the preferred choice for millions of travelers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group text-center hover-lift cursor-pointer"
            >
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-primary rounded-2xl p-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-primary-foreground">
              <div className="text-3xl md:text-4xl font-bold mb-2">10M+</div>
              <div className="text-primary-light text-sm">Happy Travelers</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-3xl md:text-4xl font-bold mb-2">180+</div>
              <div className="text-primary-light text-sm">Countries Covered</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-3xl md:text-4xl font-bold mb-2">500K+</div>
              <div className="text-primary-light text-sm">Hotel Partners</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-light text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;