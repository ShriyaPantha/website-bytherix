import type {
  ChangeEvent,
  InputHTMLAttributes,
} from "react";

interface FormInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "onChange"
  > {
  label?: string;
  error?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
}

const FormInput = ({
  label,
  name,
  error,
  onChange,
  className = "",
  required,
  ...props
}: FormInputProps) => {
  const errorId = name ? `${name}-error` : undefined;

  return (
    <div className="flex w-full flex-col gap-2">
      {label && name && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-[var(--text-primary)]"
        >
          {label}

          {required && (
            <span
              aria-hidden="true"
              className="ml-1 text-[var(--color-red)]"
            >
              *
            </span>
          )}
        </label>
      )}

      <input
        {...props}
        id={name}
        name={name}
        required={required}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`
          h-12
          w-full
          border
          border-[var(--border-primary)]
          bg-[var(--surface-secondary)]
          px-4
          text-sm
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
          ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
              : ""
          }
          ${className}
        `}
      />

      {error && (
        <p
          id={errorId}
          role="alert"
          className="text-xs text-red-500"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;