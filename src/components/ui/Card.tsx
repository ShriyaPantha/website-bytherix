import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const Card = ({ icon, title, description, className = "" }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className={`rounded-2xl bg-bg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          {icon}
        </div>
      )}
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </motion.div>
  );
};

export default Card;