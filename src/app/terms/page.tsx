export const metadata = {
  title: "Terms of Service | STUDRY.",
  description: "Read STUDRY's terms of service governing website design, SaaS development, payment schedules, and project delivery frameworks.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-[800px] mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          Last updated: June 20, 2026
        </p>

        <div className="prose prose-zinc max-w-none space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">1. Acceptance of Terms</h2>
            <p>
              By accessing our website or engaging STUDRY. ("we," "our," or "us") for website design, development, or consulting services, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">2. Scope of Services</h2>
            <p>
              STUDRY. specializes in custom web design, React and Next.js digital engineering, SEO optimization, and brand assets. The specific deliverables, milestones, payment schedules, and revision rounds for any individual engagement will be outlined in a separate, legally binding Project Proposal or Master Services Agreement (MSA) signed by both parties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">3. Client Obligations</h2>
            <p>
              To ensure timely project execution, clients agree to provide necessary assets (logos, images, copy, logins) within the timelines agreed upon in the project kickoff. Delay in assets may cause project schedule shifts.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">4. Intellectual Property</h2>
            <p>
              Unless otherwise specified in a custom agreement:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Before Payment:</strong> All mockups, draft designs, and source code generated during development remain the intellectual property of STUDRY.</li>
              <li><strong>Upon Final Payment:</strong> Full ownership and copyrights of the final visual branding, custom layout designs, and custom codebase will transfer completely to the client.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">5. Warranties & Limitation of Liability</h2>
            <p>
              Our custom code and architectures are built using modern web development standards. However, we do not warrant that third-party hosting, APIs, or browsers will run 100% bug-free indefinitely. STUDRY. is not liable for any indirect or consequential damages, lost profits, or data loss resulting from server downtime or browser updates post-handover.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">6. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">7. Contact</h2>
            <p>
              If you have any questions or require clarification on these Terms, please reach out to us:
              <br />
              <a href="mailto:varunavhad8@gmail.com" className="text-blue-500 font-bold hover:underline">
                varunavhad8@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
