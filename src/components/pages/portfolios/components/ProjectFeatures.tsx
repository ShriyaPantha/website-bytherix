import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ProjectFeaturesProps {
  features: string[];
}

const ProjectFeatures = ({ features }: ProjectFeaturesProps) => {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {features.map((feature, index) => (
        <motion.div key={feature} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06, duration: 0.4 }} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.025] p-4 transition-all duration-300 hover:border-blue-500/20 hover:bg-white/[0.05]">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
            <Check size={12} />
          </span>

          <span className="text-sm leading-6 text-slate-400">
            {feature}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectFeatures;