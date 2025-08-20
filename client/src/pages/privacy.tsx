import { SEOHead } from '@/components/ui/seo-head';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <>
      <SEOHead 
        title="Privacy Policy - WebRevamp Studio"
        description="Learn how WebRevamp Studio collects, uses, and protects your personal information when you use our website redesign services."
      />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/" 
              className="inline-flex items-center text-primary hover:text-blue-700 mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Link>

            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-sora font-bold text-dark mb-6">
                Privacy Policy
              </h1>
              
              <div className="text-sm text-gray-text mb-8">
                Last updated: August 20, 2025
              </div>

              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-sora font-semibold text-dark mb-4">Introduction</h2>
                  <p className="text-gray-text mb-4">
                    WebRevamp Studio ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-sora font-semibold text-dark mb-4">Information We Collect</h2>
                  
                  <h3 className="text-xl font-sora font-medium text-dark mb-3">Personal Information</h3>
                  <p className="text-gray-text mb-4">
                    We may collect personal information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-text mb-6">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Company information</li>
                    <li>Website URLs and project details</li>
                    <li>Communication preferences</li>
                  </ul>

                  <h3 className="text-xl font-sora font-medium text-dark mb-3">Automatically Collected Information</h3>
                  <p className="text-gray-text mb-4">
                    When you visit our website, we may automatically collect certain information:
                  </p>
                  <ul className="list-disc pl-6 text-gray-text mb-6">
                    <li>IP address and browser information</li>
                    <li>Website usage data through Google Analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-sora font-semibold text-dark mb-4">How We Use Your Information</h2>
                  <p className="text-gray-text mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-text mb-6">
                    <li>Provide and maintain our services</li>
                    <li>Respond to your inquiries and requests</li>
                    <li>Send you project updates and communications</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-sora font-semibold text-dark mb-4">Information Sharing</h2>
                  <p className="text-gray-text mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties except:
                  </p>
                  <ul className="list-disc pl-6 text-gray-text mb-6">
                    <li>With your explicit consent</li>
                    <li>To trusted service providers who assist us in operating our website</li>
                    <li>When required by law or to protect our rights</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-sora font-semibold text-dark mb-4">Data Security</h2>
                  <p className="text-gray-text mb-4">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-sora font-semibold text-dark mb-4">Cookies</h2>
                  <p className="text-gray-text mb-4">
                    Our website uses cookies to enhance your experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of our website.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-sora font-semibold text-dark mb-4">Your Rights</h2>
                  <p className="text-gray-text mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-text mb-6">
                    <li>Access and review your personal information</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of marketing communications</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-sora font-semibold text-dark mb-4">Contact Us</h2>
                  <p className="text-gray-text mb-4">
                    If you have questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="text-gray-text">
                    <p>Email: hello@webrevampstudio.com</p>
                    <p>Phone: +91 98765 43210</p>
                    <p>Address: Mumbai, India</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-sora font-semibold text-dark mb-4">Changes to This Policy</h2>
                  <p className="text-gray-text">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
