import React from 'react';
import {
  BarChart3,
  ArrowLeftRight,
  Building2,
  Calculator,
  PiggyBank,
  Home,
  Users,
  Percent,
  Building,
} from 'lucide-react';
import { Button } from './components/Button';
import { Feature } from './components/Feature';
import { Step } from './components/Step';
import { Testimonial } from './components/Testimonial';
import { Header } from './components/Header';
import { Logo } from './components/Logo';

function App() {
  const formUrl = "https://eu.jotform.com/form/240544432511042";

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
          <div className="mb-12 flex justify-center">
              <Logo />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Maximize Your Buy-to-Let Investment Potential
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Identify the Best Properties, Evaluate Different Mortgage Options, Project long-term profits and Make Data Driven Decisions Effortlessly with Our Powerful Investment Tool.
            </p>
            <Button size="lg" className="shadow-lg" href={formUrl}>
              Get Started Now For Free
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Feature 
              icon={Calculator}
              title="Evaluate Your Profits in Minutes"
              description="Get an instant 5-year profitability forecast based on rental income, costs, and taxes."
            />
            <Feature 
              icon={ArrowLeftRight} // Changed from CompareArrows
              title="Compare Different Mortgage Options"
              description="Easily assess and compare mortgage types and rates to find the best financing for your investment."
            />
            <Feature 
              icon={Building2}
              title="Private vs. Limited Company"
              description="Quickly analyze the tax implications and benefits of investing as a private individual or through a limited company."
            />
            <Feature 
              icon={Home}
              title="Compare Properties"
              description="Compare various properties side-by-side based on rental yield, capital growth, and other key factors."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 mb-8">Invest Smarter, Not Harder.</p>
            <p className="text-gray-600 leading-relaxed">
              Investing in buy-to-let properties can be rewarding, but market analysis is essential. Our platform simplifies property assessment, making it easy to compare different options and tax implications so you can maximize returns. Whether you're new to investing or an experienced buyer, we provide the tools to make smart, data-backed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Feature 
              icon={BarChart3}
              title="Assess Long-Term Profitability"
              description="Get a clear picture of your investment's profitability over the next 5 years with our comprehensive forecasting tools."
            />
            <Feature 
              icon={ArrowLeftRight} // Changed from CompareArrows
              title="Compare Investments"
              description="Compare multiple property options side-by-side to find the one that best fits your investment goals."
            />
            <Feature 
              icon={Percent}
              title="Explore Mortgage Options"
              description="Assess different mortgage types and compare rates from multiple lenders to find the most cost-effective option."
            />
            <Feature 
              icon={Building}
              title="Individual vs Company"
              description="Understand the pros and cons of investing as a private individual or through a limited company."
            />
            <Feature 
              icon={PiggyBank}
              title="Assess Tax Implications"
              description="Plan your taxes effectively and understand all implications of your investment decisions."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <Step 
              number={1}
              title="Choose Your Investment Property"
              description="Select your investment property and input its details to assess its potential profitability over the next 5 years."
            />
            <Step 
              number={2}
              title="Assess Financing Options"
              description="Input your financing details and explore mortgage rates to determine the most profitable way to fund your investment."
            />
            <Step 
              number={3}
              title="Compare Tax and Ownership Structures"
              description="Understand the tax implications of buying as an individual or through a limited company."
            />
            <Step 
              number={4}
              title="Make Data-Driven Decisions"
              description="Use our comprehensive visual tools to see a clear picture of your potential return on investment."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Are Saying
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial 
              quote="This platform helped me choose a high-yield property and saved me hours on mortgage comparison. Highly recommended!"
              author="Alex K."
              role="Property Developer"
            />
            <Testimonial 
              quote="I almost invested in the wrong property, but the profitability forecast showed me a better option I'd overlooked."
              author="Charlotte S."
              role="Property Investor"
            />
            <Testimonial 
              quote="The tax insights alone saved me so much money. Now I feel confident in my investment decisions."
              author="James W."
              role="New Investor"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Start Maximizing Your Buy-to-Let Potential Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Ready to make smarter property investment decisions? Sign up now and start exploring the tools that will help you achieve your investment goals.
          </p>
          <Button variant="secondary" size="lg" href={formUrl}>
            Get Started Now For Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </footer>
    </div>
  );

}

export default App;
