import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { motion } from "framer-motion";

interface ContactFormData {
  companyName: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

type ContactFormErrors = Partial<
  Record<keyof ContactFormData, string>
>;

const initialFormData: ContactFormData = {
  companyName: "",
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const [errors, setErrors] =
    useState<ContactFormErrors>({});

  const [submitted, setSubmitted] =
    useState(false);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    const fieldName =
      name as keyof ContactFormData;

    if (errors[fieldName]) {
      setErrors((previous) => ({
        ...previous,
        [fieldName]: "",
      }));
    }

    if (submitted) {
      setSubmitted(false);
    }
  };

  const validate = (): ContactFormErrors => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Your name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    /*
     * Backend/API can be connected here later.
     * Currently this handles client-side validation.
     */

    setErrors({});
    setSubmitted(true);
  };

  // Compact input height
  const inputClass = (hasError = false) => `
    h-8
    w-full
    border
    ${
      hasError
        ? "border-red-500"
        : "border-[var(--border-primary)]"
    }
    bg-[var(--surface-secondary)]
    px-3
    text-xs
    text-[var(--text-primary)]
    outline-none
    placeholder:text-[var(--text-muted)]
    transition-all
    duration-300

    focus:border-[var(--color-green)]
    focus:bg-[var(--surface-primary)]
    focus:ring-2
    focus:ring-[var(--color-green)]/10

    disabled:cursor-not-allowed
    disabled:opacity-60

    sm:h-9
  `;

  const labelClass = `
    mb-0.5
    block
    text-[10px]
    font-medium
    text-[var(--text-primary)]
  `;

  const errorClass = `
    mt-0.5
    text-[9px]
    leading-3
    text-red-500
  `;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full"
    >
      {/* Header */}
      <div className="mb-3">
        <p
          className="
            mb-0.5
            text-[9px]
            font-semibold
            tracking-[0.18em]
            text-[var(--color-green)]
            uppercase
            sm:text-[10px]
          "
        >
          Get in touch
        </p>

        <h2
          id="contact-form-heading"
          className="
            font-['Chakra_Petch']
            text-xl
            font-bold
            leading-none
            tracking-tight
            text-[var(--text-primary)]
            sm:text-2xl
            lg:text-[1.75rem]
          "
        >
          Send Us A Message
        </h2>

        <p
          className="
            mt-1
            max-w-2xl
            text-[10px]
            leading-4
            text-[var(--text-muted)]
            sm:text-[11px]
          "
        >
          Tell us a little about your project, idea,
          or requirements. Our team will get back to
          you.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-2"
      >
        {/* Company + Name */}
        <div className="grid gap-2 sm:grid-cols-2">
          {/* Company */}
          <div>
            <label
              htmlFor="companyName"
              className={labelClass}
            >
              Company Name
            </label>

            <input
              id="companyName"
              name="companyName"
              type="text"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Your company"
              autoComplete="organization"
              className={inputClass()}
            />
          </div>

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className={labelClass}
            >
              Your Name
              <span className="ml-1 text-red-500">
                *
              </span>
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={
                errors.name
                  ? "name-error"
                  : undefined
              }
              className={inputClass(
                Boolean(errors.name)
              )}
            />

            {errors.name && (
              <p
                id="name-error"
                className={errorClass}
                role="alert"
              >
                {errors.name}
              </p>
            )}
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid gap-2 sm:grid-cols-2">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className={labelClass}
            >
              Email Address
              <span className="ml-1 text-red-500">
                *
              </span>
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email
                  ? "email-error"
                  : undefined
              }
              className={inputClass(
                Boolean(errors.email)
              )}
            />

            {errors.email && (
              <p
                id="email-error"
                className={errorClass}
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className={labelClass}
            >
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+977 ..."
              autoComplete="tel"
              className={inputClass()}
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className={labelClass}
          >
            Subject
            <span className="ml-1 text-red-500">
              *
            </span>
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="How can we help?"
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={
              errors.subject
                ? "subject-error"
                : undefined
            }
            className={inputClass(
              Boolean(errors.subject)
            )}
          />

          {errors.subject && (
            <p
              id="subject-error"
              className={errorClass}
              role="alert"
            >
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className={labelClass}
          >
            Message
            <span className="ml-1 text-red-500">
              *
            </span>
          </label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message
                ? "message-error"
                : undefined
            }
            rows={3}
            className={`
              min-h-[65px]
              w-full
              resize-y
              border
              ${
                errors.message
                  ? "border-red-500"
                  : "border-[var(--border-primary)]"
              }
              bg-[var(--surface-secondary)]
              px-3
              py-1.5
              text-xs
              leading-4
              text-[var(--text-primary)]
              outline-none
              placeholder:text-[var(--text-muted)]
              transition-all
              duration-300

              focus:border-[var(--color-green)]
              focus:bg-[var(--surface-primary)]
              focus:ring-2
              focus:ring-[var(--color-green)]/10
            `}
          />

          {errors.message && (
            <p
              id="message-error"
              className={errorClass}
              role="alert"
            >
              {errors.message}
            </p>
          )}
        </div>

        {/* I'm not a robot */}
        <div
          className="
            flex
            min-h-[36px]
            w-full
            max-w-[280px]
            items-center
            justify-between
            border
            border-[var(--border-primary)]
            bg-[var(--surface-secondary)]
            px-2
            py-1
          "
        >
          <label
            className="
              flex
              cursor-pointer
              items-center
              gap-1.5
            "
          >
            <input
              type="checkbox"
              className="
                h-3
                w-3
                cursor-pointer
                accent-[var(--color-green)]
              "
            />

            <span
              className="
                text-[9px]
                text-[var(--text-primary)]
              "
            >
              I'm not a robot
            </span>
          </label>

          <div
            className="
              text-right
              text-[7px]
              leading-3
              text-[var(--text-muted)]
            "
          >
            <span className="font-medium">
              reCAPTCHA
            </span>

            <br />

            <span className="text-[6px]">
              Privacy - Terms
            </span>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-0">
          <button
            type="submit"
            className="
              inline-flex
              h-8
              items-center
              justify-center
              bg-[var(--color-green)]
              px-4
              text-[11px]
              font-semibold
              text-white
              outline-none
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:opacity-90

              focus-visible:ring-2
              focus-visible:ring-[var(--color-green)]
              focus-visible:ring-offset-2
            "
          >
            Send Message
          </button>
        </div>

        {/* Success */}
        {submitted && (
          <p
            role="status"
            className="
              text-[9px]
              font-medium
              leading-3
              text-[var(--color-green)]
            "
          >
            Thank you. Your message has been
            validated successfully.
          </p>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;