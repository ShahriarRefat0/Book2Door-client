import { Link } from "react-router";

const CookiePolicy = () => {
  return (
    <section className="bg-base-100 dark:bg-[#020617] py-20">
      <div className="max-w-4xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Cookie Policy
          </h1>
          <p className="text-sm opacity-70">
            Last updated: January 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white dark:bg-[#0f172a] rounded-2xl shadow
                        border border-gray-200 dark:border-white/10
                        p-6 md:p-10 space-y-8 text-sm leading-relaxed">

          <PolicySection title="What Are Cookies?">
            Cookies are small text files stored on your device when you visit a
            website. They help websites remember your preferences and improve
            user experience.
          </PolicySection>

          <PolicySection title="How Book2Door Uses Cookies">
            We use cookies to ensure essential website functionality, enhance
            user experience, analyze traffic, and keep your account secure.
          </PolicySection>

          <PolicySection title="Types of Cookies We Use">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for login,
                navigation, and core features.
              </li>
              <li>
                <strong>Performance Cookies:</strong> Help us understand how
                users interact with our website.
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember preferences such
                as language and theme settings.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="Third-Party Cookies">
            We may use trusted third-party tools for analytics and performance
            monitoring. These services may set their own cookies according to
            their privacy policies.
          </PolicySection>

          <PolicySection title="Managing Cookies">
            You can manage or disable cookies through your browser settings.
            Please note that disabling cookies may affect some features of the
            Book2Door website.
          </PolicySection>

          <PolicySection title="Policy Updates">
            We may update this Cookie Policy occasionally to reflect changes in
            technology or legal requirements. Any updates will be posted on
            this page.
          </PolicySection>

          <PolicySection title="Contact Us">
            If you have questions about this Cookie Policy, please contact us
            at{" "}
            <span className="text-primary font-medium">
              support@book2door.com
            </span>.
          </PolicySection>

        </div>

        {/* Footer links */}
        <div className="text-center mt-10 text-sm opacity-70">
          <Link to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          {" · "}
          <Link to="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
        </div>

      </div>
    </section>
  );
};

/* Reusable section component */
const PolicySection = ({ title, children }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="opacity-80">{children}</div>
    </div>
  );
};

export default CookiePolicy;
