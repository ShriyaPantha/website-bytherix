import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-form-heading"
      className="scroll-mt-20 bg-[var(--bg-primary)]"
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          py-3
          sm:px-8
          sm:py-4
          lg:px-10
          lg:py-5
        "
      >
        <div
          className="
            grid
            overflow-hidden
            border
            border-[var(--border-primary)]
            bg-[var(--surface-primary)]
            shadow-[var(--shadow-card)]
            lg:grid-cols-[1.25fr_0.75fr]
          "
        >
          {/* Contact Form */}
          <div
            className="
              min-w-0
              p-4
              sm:p-5
              lg:p-6
            "
          >
            <ContactForm />
          </div>

          {/* Contact Information */}
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;