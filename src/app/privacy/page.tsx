export const metadata = {
  title: "Privacy Policy | STUDRY.",
  description: "Learn how STUDRY. collects, uses, protects, and handles your personal information when using our website design and digital engineering services.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-[800px] mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          Last updated: June 20, 2026
        </p>

        <div className="prose prose-zinc max-w-none space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">1. Introduction</h2>
            <p>
              Welcome to STUDRY. ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our design and development services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">2. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when you fill out our contact and consultation form, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Your name, email address, phone number, and company name.</li>
              <li><strong>Project Details:</strong> Any comments, messages, preferred booking dates/times, or project specifications you share.</li>
              <li><strong>Usage Data:</strong> Anonymized analytical metadata collected via cookies (e.g., browser type, pages viewed, time spent).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">3. How We Use Your Information</h2>
            <p>
              We use the collected information strictly for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Scheduling and delivering your technical web consultations.</li>
              <li>Responding to customer support requests or inquiries.</li>
              <li>Improving our website performance, layout, and service offerings.</li>
              <li>Fulfilling legal and security obligations.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">4. Data Security</h2>
            <p>
              We prioritize data security. We implement standard encryption protocols (SSL/HTTPS) and leverage premium cloud infrastructure to ensure that any data submitted via our contact forms is safe from unauthorized access, loss, or alteration. We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">5. Cookies and Tracking</h2>
            <p>
              Our website uses basic cookies to enhance user experience and gather anonymous traffic analytics. You can choose to disable cookies in your browser settings, though doing so might affect some interactive features on our pages.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">6. Your Rights</h2>
            <p>
              Depending on your location, you have the right to request access to, correction of, or deletion of the personal data we hold about you. To exercise these rights, please contact us using the details below.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">7. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, please email us at:
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
