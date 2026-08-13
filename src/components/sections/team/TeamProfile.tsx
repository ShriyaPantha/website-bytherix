import { ArrowLeft } from "lucide-react";
import { teamMembers } from "../../../data/team";

interface TeamProfileProps {
  slug: string;
}

export default function TeamProfile({
  slug,
}: TeamProfileProps) {
  const member = teamMembers.find(
    (item) => item.slug === slug
  );

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
            onClick={() => window.close()}
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#132A57]
              px-6
              py-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.12em]
              text-white
              transition-all
              duration-300
              hover:bg-[#3157D5]
            "
          >
            <ArrowLeft size={14} />
            Back
          </button>
        </div>
      </main>
    );
  }

  return (
    <main
      className="
        min-h-screen
        bg-[var(--bg-primary)]
        text-[var(--text-primary)]
      "
    >
      {/* =========================
          HEADER
      ========================== */}
      <header className="border-b border-black/5">
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-5
            py-5
            sm:px-8
            lg:px-10
          "
        >
          <button
            type="button"
            onClick={() => window.close()}
            className="
              group
              flex
              items-center
              gap-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#132A57]
              transition-opacity
              duration-300
              hover:opacity-60
            "
          >
            <ArrowLeft
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />

            Back to Team
          </button>

          <span
            className="
              font-display
              text-sm
              font-bold
              tracking-[0.18em]
              text-[#3157D5]
            "
          >
            BYTHERIX
          </span>
        </div>
      </header>

      {/* =========================
          HERO
      ========================== */}
      <section
        className="
          mx-auto
          max-w-7xl
          px-5
          pb-20
          pt-12
          sm:px-8
          sm:pb-24
          sm:pt-16
          lg:px-10
          lg:pb-32
          lg:pt-24
        "
      >
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-20
          "
        >
          {/* Image */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              bg-[#F3F5F8]
              sm:rounded-[28px]
            "
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/10 to-transparent" />

            <img
              src={member.image}
              alt={member.name}
              className="
                h-[420px]
                w-full
                object-cover
                object-center
                sm:h-[540px]
                lg:h-[620px]
              "
            />
          </div>

          {/* Introduction */}
          <div>
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-cyan-500
                sm:text-[10px]
              "
            >
              {member.role}
            </p>

            <h1
              className="
                mt-4
                max-w-3xl
                font-display
                text-5xl
                font-bold
                leading-[0.92]
                tracking-[-0.045em]
                text-[var(--text-primary)]
                sm:text-6xl
                lg:text-7xl
              "
            >
              {member.name}
            </h1>

            {member.description && (
              <p
                className="
                  mt-7
                  max-w-xl
                  text-sm
                  leading-7
                  text-[var(--text-secondary)]
                  sm:text-base
                  sm:leading-8
                "
              >
                {member.description}
              </p>
            )}

            <div
              className="
                mt-8
                h-px
                w-16
                bg-[#3157D5]
              "
            />
          </div>
        </div>
      </section>

      {/* =========================
          JOURNEY
      ========================== */}
      <section className="border-t border-black/5">
        <div
          className="
            mx-auto
            max-w-5xl
            px-5
            py-20
            sm:px-8
            lg:py-28
          "
        >
          <div
            className="
              grid
              gap-10
              lg:grid-cols-[200px_1fr]
              lg:gap-20
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-cyan-500
                "
              >
                01
              </p>

              <h2
                className="
                  mt-3
                  font-display
                  text-2xl
                  font-bold
                  tracking-tight
                "
              >
                The Journey
              </h2>
            </div>

            <div>
              <p
                className="
                  text-base
                  leading-8
                  text-[var(--text-secondary)]
                  sm:text-lg
                  sm:leading-9
                "
              >
                {member.journey ||
                  "More details about this journey will be shared soon."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          WHY BYTHERIX
      ========================== */}
      <section className="bg-[#132A57] text-white">
        <div
          className="
            mx-auto
            max-w-5xl
            px-5
            py-20
            sm:px-8
            lg:py-28
          "
        >
          <div
            className="
              grid
              gap-10
              lg:grid-cols-[200px_1fr]
              lg:gap-20
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-cyan-300
                "
              >
                02
              </p>

              <h2
                className="
                  mt-3
                  font-display
                  text-2xl
                  font-bold
                  tracking-tight
                "
              >
                Why Bytherix?
              </h2>
            </div>

            <p
              className="
                text-base
                leading-8
                text-white/70
                sm:text-lg
                sm:leading-9
              "
            >
              {member.whyBytherix ||
                "More details about this team member's contribution to Bytherix will be shared soon."}
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          VISION
      ========================== */}
      <section>
        <div
          className="
            mx-auto
            max-w-5xl
            px-5
            py-20
            sm:px-8
            lg:py-28
          "
        >
          <div
            className="
              grid
              gap-10
              lg:grid-cols-[200px_1fr]
              lg:gap-20
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-cyan-500
                "
              >
                03
              </p>

              <h2
                className="
                  mt-3
                  font-display
                  text-2xl
                  font-bold
                  tracking-tight
                "
              >
                Vision
              </h2>
            </div>

            <p
              className="
                text-base
                leading-8
                text-[var(--text-secondary)]
                sm:text-lg
                sm:leading-9
              "
            >
              {member.vision ||
                "More details about this team member's vision will be shared soon."}
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER CTA
      ========================== */}
      <section className="border-t border-black/5">
        <div
          className="
            mx-auto
            max-w-5xl
            px-5
            py-16
            text-center
            sm:px-8
            lg:py-20
          "
        >
          <p
            className="
              text-sm
              text-[var(--text-secondary)]
            "
          >
            Discover more about the people building Bytherix.
          </p>

          <button
            type="button"
            onClick={() => window.close()}
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#3157D5]
              px-7
              py-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#132A57]
            "
          >
            <ArrowLeft size={14} />
            Back to Team
          </button>
        </div>
      </section>
    </main>
  );
}