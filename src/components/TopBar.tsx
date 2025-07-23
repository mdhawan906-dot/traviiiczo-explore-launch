import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plane, User, Globe, ChevronDown } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
        {/* Left side - Services */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="p-1 bg-primary-foreground/20 rounded">
              <Plane className="h-4 w-4" />
            </div>
            <span className="font-bold text-lg">Traviiczo</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-primary-light transition-colors">List Your Property</a>
            <a href="#" className="hover:text-primary-light transition-colors">Introducing TraviiBiz</a>
            <a href="#" className="hover:text-primary-light transition-colors">My Trips</a>
          </div>
        </div>

        {/* Right side - User & Settings */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/20">
            <User className="h-4 w-4 mr-2" />
            Login or Create Account
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
          
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4" />
            <span>INR | English</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;