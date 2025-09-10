// src/components/FeatureSection.tsx
import { FileText, Users, Brain, Search } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: "Bill Tracking & AI Explanations",
    description: "Follow bills at all levels of government. Our AI explains complex legal language in simple terms and provides a summary of pros, cons, and impacts."
  },
  {
    icon: Users,
    title: "Connect with Your Community",
    description: "Each state has a dedicated Reddit-style community where you can discuss legislation and local issues with fellow citizens."
  },
  {
    icon: Brain,
    title: "Insightful AI Analysis",
    description: "Get a clear breakdown of a bill's impact on different groups and an unbiased list of arguments for and against it, all powered by AI."
  },
  {
    icon: Search,
    title: "Powerful Search & Filters",
    description: "Find exactly what you're looking for with advanced search, and filter bills and posts by status, topic, or date."
  },
];

const FeatureSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;