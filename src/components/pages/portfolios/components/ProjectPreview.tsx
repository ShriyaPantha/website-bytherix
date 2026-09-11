import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectPreviewProps {
  image: string;
  title: string;
  liveUrl: string;
  reverse?: boolean;
}

const ProjectPreview = ({
  image,
  title,
  liveUrl,
  reverse = false,
}: ProjectPreviewProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 60 : -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative"
    >
      <div className="absolute -inset-4 rounded-[2rem] bg-blue-600/10 opacity-0 blur-2xl transition duration-700 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1025] shadow-2xl">
        <div className="flex h-10 items-center justify-between border-b border-white/10 bg-[#10162d] px-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>

          <span className="max-w-[55%] truncate text-xs text-slate-500">
            {title}
          </span>

          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 transition-colors hover:text-white"
          >
            <ExternalLink size={15} />
          </a>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden bg-black">
          <img
            src={image}
            alt={`${title} project preview`}
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.025]"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition duration-500 group-hover:opacity-100">
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-transform duration-300 hover:scale-105"
            >
              View Live Project
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPreview;