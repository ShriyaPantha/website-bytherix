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
          px-3
          py-1
          sm:px-5
          sm:py-2
          lg:px-8
          lg:py-3
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
              p-2
              sm:p-3
              lg:p-4
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