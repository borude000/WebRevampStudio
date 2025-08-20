import { SEOHead } from '@/components/ui/seo-head';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
  return (
    <>
      <SEOHead 
        title="Terms of Service - WebRevamp Studio"
        description="Read the terms and conditions for using WebRevamp Studio's website redesign and development services."
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
                Terms of Service
              </h1>
              
              <div className="text-sm text-gray-text mb-8">
                Last updated: August 20, 2025
              </div>

              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-sora font-semibold text-dark mb-4">Agreement to Terms</h2>
                  <p className="text-gray-text mb-4">
                    By accessing and using WebRevamp Studio's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-sora font-semibold text-dark mb-4">Services Description</h2>
                  <p className="text-gray-text mb-4">
                    WebRevamp Studio provides website redesign, development, performance optimization, SEO services, and ongoing maintenance for small and medium businesses.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-sora font-semibold text-dark mb-4">Project Terms</h2>
                  
                  <h3 className="text-xl font-sora font-medium text-dark mb-3">Project Scope</h3>
                  <p className="text-gray-text mb-4">
                    All project work will be defined in a separate project agreement or statement of work that will include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-text mb-6">
                    <li>Detailed project scope and deliverables</li>
                    <li>Timeline and milestones</li>
                    <li>Payment terms and schedule</li>
                    <li>Client responsibilities</li>
                  </ul>

                  <h3 className="text-xl font-sora font-medium text-dark mb-3">Client Responsibilities</h3>
                  <p className="text-gray-text mb-4">Clients are responsible for:</p>
                  <ul className="list-disc pl-6 text-gray-text mb-6">
                    <li>Providing accurate and complete project information</li>
                    <li>Timely provision of content, assets, and feedback</li>
                    <li>Making payments according to agreed schedules</li>
                    <li>Final approval of designs and functionality</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-sora font-semibold text-dark mb-4">Payment Terms</h2>
                  <ul className="list-disc pl-6 text-gray-text mb-6">
                    <li>Project payments are typically structured as milestones</li>
                    <li>Maintenance plans are billed monthly in advance</li>
                    <li>Late payments may incur additional charges</li>
                    <li>Refunds are subject to project agreement terms</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-sora font-semibold text-dark mb-4">Intellectual Property</h2>
                  
                  <h3 className="text-xl font-sora font-medium text-dark mb-3">Client Content</h3>
                  <p className="text-gray-text mb-4">
                    Clients retain ownership of all content, text, images, and materials provided to us.
                  </p>

                  <h3 className="text-xl font-sora font-medium text-dark mb-3">Developed Work</h3>
                  <p className="text-gray-text mb-4">
                    Upon full payment, clients receive full ownership of custom code and designs created specifically for their project. We retain the right to use general techniques, methodologies, and non-client-specific code.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-sora font-semibold text-dark mb-4">Warranties and Disclaimers</h2>
                  <p className="text-gray-text mb-4">
                    We warrant that our services will be performed with professional skill and care. However, we cannot guarantee specific business results or website performance metrics beyond our direct control.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-sora font-semibold text-dark mb-4">Limitation of Liability</h2>
                  <p className="text-gray-text mb-4">
                    Our liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages, including lost profits or business interruption.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-sora font-semibold text-dark mb-4">Maintenance Services</h2>
                  <ul className="list-disc pl-6 text-gray-text mb-6">
                    <li>Maintenance plans are subject to separate terms</li>
                    <li>Services may be suspended for non-payment</li>
                    <li>Emergency support is available during business hours</li>
                    <li>Plans can be cancelled with 30 days notice</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-sora font-semibold text-dark mb-4">Termination</h2>
                  <p className="text-gray-text mb-4">
                    Either party may terminate ongoing services with appropriate notice. Project-based work will be completed according to the project agreement or terminated with compensation for work completed.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-sora font-semibold text-dark mb-4">Governing Law</h2>
                  <p className="text-gray-text mb-4">
                    These terms are governed by the laws of India. Any disputes will be resolved in the courts of Mumbai, India.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-sora font-semibold text-dark mb-4">Contact Information</h2>
                  <p className="text-gray-text mb-4">
                    For questions about these Terms of Service:
                  </p>
                  <div className="text-gray-text">
                    <p>Email: hello@webrevampstudio.com</p>
                    <p>Phone: +91 98765 43210</p>
                    <p>Address: Mumbai, India</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-sora font-semibold text-dark mb-4">Changes to Terms</h2>
                  <p className="text-gray-text">
                    We reserve the right to modify these terms at any time. Updated terms will be posted on our website with a revised date. Continued use of our services constitutes acceptance of modified terms.
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
