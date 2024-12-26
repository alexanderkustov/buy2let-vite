import React from 'react';
import { Button } from './Button';
import { LogoHeader } from './LogoHeader';

export function Header() {
  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <LogoHeader className="w-32 h-auto" />
          <div className="flex gap-4">
            <Button 
              variant="secondary" 
              size="sm" 
              href="https://eu.jotform.com/form/240544432511042"
            >
              Log in
            </Button>
            <Button 
              size="sm"
              href="https://eu.jotform.com/form/240544432511042"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}