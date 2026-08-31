import {
  ArrowLeft,
  Brain,
  Cpu,
  Bot,
  Code2,
  ShieldCheck,
  Terminal,
  Wrench,
  Microscope,
  Users,
  ClipboardList,
  CalendarCheck2,
  Target,
  Crown,
  Briefcase,
  UserPlus,
  HeartHandshake,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { teamMembers } from "../../../data/team";

interface TeamProfileProps {
  slug: string;
  onBack?: () => void;
}

// =====================================================
// SKILL ICON MAPPING
// =====================================================

const SKILL_ICON_RULES: Array<{
  keywords: string[];
  icon: LucideIcon;
}> = [
  {
    keywords: ["ai", "machine learning", "ml"],
    icon: Brain,
  },
  {
    keywords: ["iot"],
    icon: Cpu,
  },
  {
    keywords: ["robot"],
    icon: Bot,
  },
  {
    keywords: ["cyber", "security"],
    icon: ShieldCheck,
  },
  {
    keywords: ["hack", "penetration"],
    icon: Terminal,
  },
  {
    keywords: ["software", "development", "app", "web"],
    icon: Code2,
  },
  {
    keywords: ["engineer"],
    icon: Wrench,
  },
  {
    keywords: ["research"],
    icon: Microscope,
  },
  {
    keywords: ["recruitment"],
    icon: UserPlus,
  },
  {
    keywords: ["human resources", "employee", "relations"],
    icon: HeartHandshake,
  },
  {
    keywords: ["team"],
    icon: Users,
  },
  {
    keywords: ["project"],
    icon: ClipboardList,
  },
  {
    keywords: ["planning"],
    icon: CalendarCheck2,
  },
  {
    keywords: ["strategy"],
    icon: Target,
  },
  {
    keywords: ["leadership"],
    icon: Crown,
  },
  {
    keywords: ["management", "business"],
    icon: Briefcase,
  },
];

function getSkillIcon(skill: string): LucideIcon {
  const normalized = skill.toLowerCase();

  const match = SKILL_ICON_RULES.find(({ keywords }) =>
    keywords.some((keyword) => normalized.includes(keyword)),
  );

  return match ? match.icon : Sparkles;
}

export default function TeamProfile({
  slug,
  onBack,
}: TeamProfileProps) {
  const member = teamMembers.find((item) => item.slug === slug);

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }

    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.history.pushState({}, "", "/our-team");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  // =====================================================
  // MEMBER NOT FOUND
  // =====================================================

  if (!member) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--bg-primary)] px-6">
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-500">
            Bytherix Team
          </p>

          <h1 className="mt-3 font-display text-3xl font-bold text-[var(--text-primary)]">
            Team member not found
          </h1>

          <button
            type="button"
            onClick={handleBack}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#132A57] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#3157D5]"
          >
            <ArrowLeft size={14} />
            Back to Team
          </button>
        </div>
      </main>
    );
  }

  // =====================================================
  // JOURNEY CONTENT
  // =====================================================

  const journeyParagraphs = member.journeying
    ? member.journeying.split("\n\n")
    : ["More details about this journey will be shared soon."];

  // =====================================================
  // PROFILE
  // =====================================================

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* =====================================================
          PROFILE HEADER
      ====================================================== */}

      <header className="border-b border-black/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <button
            type="button"
            onClick={handleBack}
            className="group flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#3157D5] transition-opacity duration-300 hover:opacity-60"
          >
            <ArrowLeft
              size={15}
              className="text-[#3157D5] transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Team
          </button>

          <span className="font-display text-sm font-bold tracking-[0.18em] text-[#3157D5]">
            BYTHERIX
          </span>
        </div>
      </header>

      {/* =====================================================
          PROFILE HERO
      ====================================================== */}

      <motion.section
        initial={{
          opacity: 0,
          y: 18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-7xl px-5 pb-8 pt-12 sm:px-8 sm:pb-10 sm:pt-16 lg:px-10 lg:pb-12 lg:pt-24"
      >
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* =================================================
              IMAGE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.05,
            }}
            className="relative overflow-hidden rounded-[24px] bg-[#F3F5F8] sm:rounded-[28px]"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/10 to-transparent" />

            <img
              src={member.image}
              alt={member.name}
              className="h-[420px] w-full object-cover object-center sm:h-[540px] lg:h-[620px]"
            />
          </motion.div>

          {/* =================================================
              INTRODUCTION
          ================================================== */}

          <div>
            <p className="text-[19px] font-semibold uppercase tracking-[0.2em] text-[#3157D5] sm:text-[25px]">
              {member.role}
            </p>

            <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold leading-[0.92] tracking-[-0.045em] text-[var(--text-primary)] sm:text-6xl lg:text-7xl">
              {member.name}
            </h1>

            {member.description && (
              <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base sm:leading-8">
                {member.description}
              </p>
            )}

            <div className="mt-7 h-px w-16 bg-[#3157D5]" />

            {/* =================================================
                SOCIAL LINKS
            ================================================== */}

            {(member.linkedin || member.github) && (
              <div className="mt-6 flex items-center gap-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCE3F2] text-[#3157D5] transition-all duration-300 hover:border-[#3157D5] hover:bg-[#3157D5] hover:text-white"
                  >
                    <FaLinkedinIn size={16} />
                  </a>
                )}

                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} GitHub`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCE3F2] text-[#3157D5] transition-all duration-300 hover:border-[#3157D5] hover:bg-[#3157D5] hover:text-white"
                  >
                    <FaGithub size={16} />
                  </a>
                )}
              </div>
            )}

            {/* =================================================
                SKILLS
            ================================================== */}

            {member.skills && member.skills.length > 0 && (
              <div className="mt-8">
                <p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#3157D5]">
                  <span className="h-px w-4 bg-[#3157D5]" />
                  Skills
                </p>

                <div className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
                  {member.skills.map((skill, index) => {
                    const Icon = getSkillIcon(skill);

                    return (
                      <motion.div
                        key={`${skill}-${index}`}
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.45,
                          delay: 0.05 * index,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00AEEF]/40 hover:bg-[#00AEEF]/[0.06] hover:shadow-[0_8px_30px_-8px_rgba(0,174,239,0.45)]"
                      >
                        {/* Soft ambient glow */}

                        <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#00AEEF]/0 blur-2xl transition-all duration-500 group-hover:bg-[#00AEEF]/25" />

                        <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#00AEEF]/25 bg-[#00AEEF]/10 text-[#00AEEF] transition-all duration-300 group-hover:border-[#00AEEF]/60 group-hover:bg-[#00AEEF]/20 group-hover:shadow-[0_0_16px_rgba(0,174,239,0.55)]">
                          <Icon size={17} strokeWidth={2} />
                        </span>

                        <span className="relative text-[13px] font-medium leading-tight text-[var(--text-primary)] sm:text-sm">
                          {skill}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.section>

      {/* =====================================================
          BIO / JOURNEY
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-8 sm:pb-24 sm:pt-8 lg:px-10 lg:pb-32 lg:pt-10">
        <div className="space-y-6">
          {journeyParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-justify text-base leading-8 text-[var(--text-secondary)] sm:text-lg sm:leading-9"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* =====================================================
          FOOTER CTA
      ====================================================== */}

      <section className="border-t border-black/5">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 lg:py-20">
          <p className="text-sm text-[var(--text-secondary)]">
            Discover more about the people building Bytherix.
          </p>

          <button
            type="button"
            onClick={handleBack}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#3157D5] px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#132A57]"
          >
            <ArrowLeft size={14} />
            Back to Team
          </button>
        </div>
      </section>
    </main>
  );
}