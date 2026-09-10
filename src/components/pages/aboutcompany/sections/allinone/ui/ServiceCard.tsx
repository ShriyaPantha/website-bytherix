import React from "react";
import { ArrowUpRight } from "lucide-react";
import type { ServiceCardProps } from '../types/types';

interface ServiceCardComponentProps {
  service: ServiceCardProps;
}


const DynamicHighlightText: React.FC<{
  text: string;
  highlights?: string[];
}> = ({ text, highlights = [] }) => {
  if (!text) return null;


  if (!highlights.length) {
    return (
      <span
        className="bg-gradient-to-r from-[#0b1c3e] via-[#725638] to-[#b58c38] bg-clip-text text-transparent dark:from-[#e2e8f0] dark:via-[#d4b878] dark:to-[#facc15] ">
        {text}
      </span>
    );
  } 
  const escapedHighlights = highlights.map((h) =>
    h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );

  const pattern = new RegExp(
    `(${escapedHighlights.join("|")})`,
    "gi"
  );

  const parts = text.split(pattern);

  
  return (
    <>
      {parts.map((part, index) => {
        const isHighlighted = highlights.some(
          (h) =>
            h.toLowerCase() === part.toLowerCase()
        );

        if (isHighlighted) {
          return (
            <span
              key={index}
              className="font-medium text-[#b58c38] dark:text-[#facc15]">
              {part}
            </span>
          );
        }

        return (
          <span
            key={index}
            className="bg-gradient-to-r from-[#0b1c3e] via-[#725638] to-[#b58c38] bg-clip-text text-transparent dark:from-[#e2e8f0] dark:via-[#d4b878] dark:to-[#facc15]">
            {part}
          </span>
        );
      })}
    </>
  );
};


const ServiceCard: React.FC<ServiceCardComponentProps> = ({
  service,
}) => {
  const IconComponent = service.icon;

  return (
    <article
      className="group relative flex h-full w-full flex-col rounded-[24px] border-[2.5px] border-[#f96302] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md min-h-[430px] sm:min-h-[440px] sm:rounded-[28px] sm:p-5 
        md:min-h-[460px] md:rounded-[32px] md:p-6 dark:border-[#f96302] dark:bg-[#0f172a] dark:shadow-slate-900/50 ">
      
      <div
        className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2563eb] sm:mb-5 sm:h-14 sm:w-14 sm:rounded-2xl dark:bg-[#1d4ed8] ">
        {IconComponent && (
          <IconComponent
            size={26}
            strokeWidth={2.5}
            className="text-[#091838] sm:h-[30px] sm:w-[30px] dark:text-[#0b132b]"/>
        )}
      </div>

      <h3
        className="text-[22px] font-extrabold leading-[1.15] tracking-tight text-[#0b1c3e] sm:text-[24px] md:text-[26px] dark:text-white">
        {service.title}
      </h3>

      
      <p
        className="mt-3 text-[13px] leading-[1.65] sm:text-[14px] sm:leading-relaxed ">
        <DynamicHighlightText
          text={service.description}
          highlights={service.highlightWords}
        />
      </p>

      
      <div
        className="mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-2.5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="flex min-h-[34px] items-center justify-center rounded-full border border-[#f96302]/60 bg-[#cfd5df] px-2 py-1 text-center text-[10px] font-leading-tight text-[#3B71CA] cursor-pointer transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:border-[#f96302] hover:bg-white hover:shadow-md sm:min-h-[38px] sm:px-3 sm:text-[12px] dark:border-[#f96302]/80 dark:bg-[#1e293b] dark:text-[#93c5fd] dark:hover:bg-[#334155] dark:hover:text-white ">
            {tag}
          </span>
        ))}
      </div>

  
      <div
        className="mt-auto pt-5 sm:pt-6">
        {/* Divider */}
        <div
          className="mb-3 h-[2px] w-full bg-[#e2e8f0] sm:mb-4 sm:h-[3px] dark:bg-slate-700 "/>

        <div
          className="flex items-center justify-between gap-3">
          {/* View Services */}
          <a
            href={service.linkUrl}
            className="text-[13px] font-bold text-[#0b1c3e] transition-hover:opacity-80 sm:text-[15px] dark:text-gray-200 dark:hover:text-white ">
            View services
          </a>

        <a
          href={service.linkUrl}
          aria-label={`View ${service.title} services`}
          className="group/btn flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#059669] via-[#10b981] to-[#34d399] p-[2.5px] shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#10b981]/50 sm:h-11 sm:w-11"
        >
          <div
            className="flex h-full w-full items-center justify-center rounded-full bg-[#1d4ed8] transition-all duration-200 group-hover/btn:bg-[#1e40af] group-active/btn:bg-[#1e40af] group-focus/btn:bg-[#1e40af] dark:bg-[#2563eb] dark:group-hover/btn:bg-[#1d4ed8] dark:group-active/btn:bg-[#1d4ed8] dark:group-focus/btn:bg-[#1d4ed8]"
          >
            <ArrowUpRight
              size={19}
              strokeWidth={3}
              className="text-white transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-active/btn:translate-x-0.5 group-active/btn:-translate-y-0.5 sm:h-[22px] sm:w-[22px]"
            />
          </div>
        </a>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;