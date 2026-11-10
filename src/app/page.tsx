import Image from "next/image";
import Link from "next/link";

// ── 노션 스타일 인라인 SVG 아이콘 ──
function NotionDocIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

function ArrowRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function ArrowUpRightIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function MailIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

// ── 데이터 명세 (스티커 팔레트는 장식으로만 사용) ──
const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: GithubIcon, label: "GitHub" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon, label: "LinkedIn" },
  { name: "Email", href: "mailto:yeonwoo@example.com", icon: MailIcon, label: "Email" },
];

const quickLinks = [
  {
    title: "Portfolio Website",
    description: "인터랙티브 웹 프로젝트 및 UI 디자인 아카이브",
    href: "https://github.com",
    tag: "Featured",
    // Notion decorative sticker tile color
    stickerBg: "bg-[#62aef0]", // Sticker Sky
    stickerIcon: "✦",
  },
  {
    title: "Design System Playground",
    description: "확장 가능한 디자인 토큰과 React 컴포넌트 라이브러리",
    href: "https://github.com",
    tag: "Open Source",
    stickerBg: "bg-[#d6b6f6]", // Sticker Purple
    stickerIcon: "❖",
  },
  {
    title: "Tech Articles & Insights",
    description: "UI/UX 설계와 프론트엔드 성능 최적화에 대한 기술 회고록",
    href: "https://github.com",
    tag: "Blog",
    stickerBg: "bg-[#dd5b00]", // Sticker Orange
    stickerIcon: "✎",
  },
  {
    title: "Schedule a Coffee Chat",
    description: "새로운 프로젝트 제안, 커피챗 및 캐주얼 멘토링 언제든 환영합니다.",
    href: "mailto:yeonwoo@example.com",
    tag: "Contact",
    stickerBg: "bg-[#2a9d99]", // Sticker Teal
    stickerIcon: "☕",
  },
];

const projects = [
  {
    title: "Lumina Design System",
    category: "Design System",
    description: "웹 접근성 가이드라인을 준수하며 토큰 기반으로 빌드된 엔터프라이즈 컴포넌트 키트.",
    stickerColor: "#62aef0", // Sky
    dotColor: "bg-[#62aef0]",
    tags: ["Next.js", "Tailwind CSS", "Figma"],
    link: "https://github.com",
  },
  {
    title: "FlowMind AI Canvas",
    category: "Product & Canvas",
    description: "지능형 워크플로우를 무한 캔버스 위에서 직관적으로 구성하고 자동화하는 웹 인터페이스.",
    stickerColor: "#d6b6f6", // Purple
    dotColor: "bg-[#d6b6f6]",
    tags: ["React 19", "TypeScript", "Canvas API"],
    link: "https://github.com",
  },
  {
    title: "HyperMetric Analytics",
    category: "SaaS Dashboard",
    description: "대규모 데이터와 비즈니스 핵심 지표를 한눈에 파악할 수 있는 고성능 실시간 대시보드.",
    stickerColor: "#ff64c8", // Pink
    dotColor: "bg-[#ff64c8]",
    tags: ["Data Viz", "Radix UI", "Tailwind"],
    link: "https://github.com",
  },
  {
    title: "Spatial Motion Web",
    category: "Interactive 3D",
    description: "3D 공간감과 부드러운 제스처 기반 마이크로 인터랙션을 탐구하는 웹 쇼케이스.",
    stickerColor: "#2a9d99", // Teal
    dotColor: "bg-[#2a9d99]",
    tags: ["Three.js", "GLSL", "UX Motion"],
    link: "https://github.com",
  },
];

const skills = [
  { name: "Next.js 16", dot: "bg-[#1aae39]" }, // Green
  { name: "React 19", dot: "bg-[#62aef0]" }, // Sky
  { name: "TypeScript", dot: "bg-[#0075de]" }, // Primary
  { name: "Tailwind CSS", dot: "bg-[#2a9d99]" }, // Teal
  { name: "UI/UX Design", dot: "bg-[#ff64c8]" }, // Pink
  { name: "Design Systems", dot: "bg-[#d6b6f6]" }, // Purple
  { name: "Figma", dot: "bg-[#dd5b00]" }, // Orange
  { name: "Micro-Interactions", dot: "bg-[#62aef0]" },
  { name: "Web Accessibility", dot: "bg-[#1aae39]" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f5f4] text-[#000000] font-sans antialiased selection:bg-[#0075de]/15 selection:text-[#0075de]">
      
      {/* ── 1. Top Navigation Bar (nav-bar) ── */}
      <header className="sticky top-0 z-40 w-full border-b border-[#e6e6e6] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:px-6">
          {/* Logo / Wordmark */}
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-[6px] border border-[#e6e6e6] bg-[#f6f5f4] text-xs font-bold text-[#31302e]">
              연
            </span>
            <span className="text-[15px] font-semibold tracking-[-0.2px] text-[#000000]">
              이연우
            </span>
            <span className="hidden text-xs text-[#a39e98] sm:inline">
              / Design Engineer
            </span>
          </div>

          {/* Nav Actions */}
          <div className="flex items-center gap-2">
            {/* Social Icons (Utility) */}
            <div className="hidden sm:flex items-center gap-1 mr-1">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-8 w-8 items-center justify-center rounded-[8px] text-[#615d59] hover:bg-[#f6f5f4] hover:text-[#000000] transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>

            {/* Notion Blue Primary CTA (Pill) */}
            <Link
              href="mailto:yeonwoo@example.com"
              className="inline-flex items-center justify-center rounded-full bg-[#0075de] px-4 py-1.5 text-[14px] font-medium text-white transition-all hover:bg-[#005bab] active:scale-[0.97]"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>

      {/* ── Page Content Container ── */}
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 space-y-10 sm:space-y-14">

        {/* ── 2. Signature Hero Band (The Dark "Night" Hero: hero-band) ── */}
        <section className="relative overflow-hidden rounded-[16px] bg-[#213183] p-7 sm:p-12 text-white shadow-[0_4px_24px_rgba(33,49,131,0.12)]">
          {/* Subtle Sticker Constellation Field */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "28px 28px",
            }}
          />
          {/* Decorative Sticker Dots in Night Sky */}
          <div className="pointer-events-none absolute top-8 right-12 h-2.5 w-2.5 rounded-full bg-[#62aef0] opacity-80" />
          <div className="pointer-events-none absolute top-24 right-28 h-2 w-2 rounded-full bg-[#ff64c8] opacity-70" />
          <div className="pointer-events-none absolute bottom-12 right-16 h-3 w-3 rounded-full bg-[#d6b6f6] opacity-75" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="space-y-5 max-w-xl">
              {/* Category Eyebrow Pill */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[12px] font-semibold tracking-[0.125px] text-white/90 backdrop-blur-sm border border-white/15">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1aae39]" />
                Available for Projects
              </div>

              {/* Display Headline */}
              <h1 className="text-3xl sm:text-5xl font-bold tracking-[-1.8px] leading-[1.05] text-white">
                디자인 감각과 기술적 깊이를 연결하는 디자인 엔지니어.
              </h1>

              {/* Body Copy */}
              <p className="text-[15px] sm:text-[16px] leading-[1.6] text-white/85 max-w-lg font-normal">
                직관적인 사용성과 정교한 마이크로 인터랙션, 안정적인 프로덕션 코드 품질에 집중합니다. 잘 정돈된 생각과 명료한 디테일로 가치 있는 인터페이스를 구현합니다.
              </p>

              {/* Hero CTA Pair */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {/* Primary Pill CTA */}
                <Link
                  href="mailto:yeonwoo@example.com"
                  className="inline-flex items-center justify-center rounded-full bg-[#0075de] px-5 py-2.5 text-[15px] font-medium text-white transition-all hover:bg-[#005bab] active:scale-[0.97]"
                >
                  프로젝트 문의하기
                </Link>

                {/* Secondary Pill CTA */}
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[15px] font-medium text-[#000000] transition-all hover:bg-[#f6f5f4] active:scale-[0.97]"
                >
                  GitHub 방문 <ArrowUpRightIcon className="ml-1 w-3.5 h-3.5 text-[#615d59]" />
                </Link>
              </div>
            </div>

            {/* Profile Avatar Frame (Floating in Night Island) */}
            <div className="relative shrink-0 self-start md:self-center">
              <div className="relative h-28 w-28 sm:h-36 sm:w-36 overflow-hidden rounded-full border-2 border-white/20 bg-white/10 shadow-lg">
                <Image
                  src="/profile-yeonwoo.jpg"
                  alt="이연우 프로필"
                  fill
                  sizes="(max-width: 640px) 112px, 144px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Quick Links Section (feature-card) ── */}
        <section className="space-y-4">
          <div className="flex items-baseline justify-between px-1">
            <h2 className="text-[20px] sm:text-[22px] font-bold tracking-[-0.25px] text-[#000000]">
              Quick Links
            </h2>
            <span className="text-[13px] text-[#615d59]">주요 바로가기</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-[12px] border border-[#e6e6e6] bg-white p-5 transition-all duration-150 hover:border-[#d0d0d0] hover:shadow-[0_2px_8px_rgba(0,0,0,0.03)] active:bg-[#f6f5f4]"
              >
                {/* Decorative Sticker Tile (Decoration Only) */}
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] ${link.stickerBg} text-white font-bold text-base shadow-sm`}
                >
                  {link.stickerIcon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-[16px] font-semibold tracking-[-0.2px] text-[#000000] group-hover:text-[#0075de] transition-colors">
                      {link.title}
                    </h3>
                    <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#a39e98] group-hover:text-[#0075de] transition-colors" />
                  </div>
                  <p className="mt-1 text-[13px] leading-[1.45] text-[#615d59] line-clamp-2">
                    {link.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── 4. Featured Works (feature-card-elevated) ── */}
        <section className="space-y-4">
          <div className="flex items-baseline justify-between px-1">
            <h2 className="text-[20px] sm:text-[22px] font-bold tracking-[-0.25px] text-[#000000]">
              Featured Works
            </h2>
            <span className="text-[13px] text-[#615d59]">대표 작업</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between overflow-hidden rounded-[12px] border border-[#e6e6e6] bg-white transition-all duration-150 hover:border-[#d0d0d0] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
              >
                {/* Sticker Color Top Accent Line */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: project.stickerColor }}
                />

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Category with Sticker Dot */}
                    <div className="flex items-center gap-1.5 text-[12px] font-semibold text-[#615d59]">
                      <span className={`h-2 w-2 rounded-full ${project.dotColor}`} />
                      {project.category}
                    </div>

                    <h3 className="text-[18px] font-bold tracking-[-0.3px] text-[#000000] group-hover:text-[#0075de] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-[14px] leading-[1.5] text-[#31302e]">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#f0f0f0]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[4px] bg-[#f6f5f4] px-2 py-0.5 text-[11px] font-medium text-[#615d59]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── 5. Skills & Expertise (badge-pill) ── */}
        <section className="rounded-[12px] border border-[#e6e6e6] bg-white p-6 sm:p-7 space-y-4">
          <div className="flex items-baseline justify-between">
            <h2 className="text-[17px] font-bold tracking-[-0.2px] text-[#000000]">
              Skills & Tools
            </h2>
            <span className="text-[12px] text-[#a39e98]">역량 및 도구</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="inline-flex items-center gap-2 rounded-full border border-[#e6e6e6] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#31302e] hover:border-[#d0d0d0] transition-colors"
              >
                <span className={`h-2 w-2 rounded-full ${skill.dot}`} />
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        {/* ── 6. Bottom Document Callout Box ── */}
        <section className="rounded-[12px] border border-[#e6e6e6] bg-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#0075de]">
              <NotionDocIcon className="w-3.5 h-3.5" />
              Get in touch
            </div>
            <h3 className="text-[19px] sm:text-[21px] font-bold tracking-[-0.3px] text-[#000000]">
              새로운 협업이나 프로젝트를 구상 중이신가요?
            </h3>
            <p className="text-[14px] text-[#615d59] max-w-md">
              아이디어를 정교하고 신뢰할 수 있는 사용자 경험으로 함께 발전시킬 수 있습니다.
            </p>
          </div>

          <Link
            href="mailto:yeonwoo@example.com"
            className="inline-flex items-center justify-center rounded-full bg-[#0075de] px-5 py-2.5 text-[14px] font-medium text-white transition-all hover:bg-[#005bab] active:scale-[0.97] shrink-0"
          >
            이메일 보내기
          </Link>
        </section>

      </main>

      {/* ── 7. Site Footer (footer) ── */}
      <footer className="mt-12 border-t border-[#e6e6e6] bg-[#f6f5f4] py-8 text-center text-[13px] text-[#615d59]">
        <div className="mx-auto max-w-4xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} 이연우. Set in NotionInter typography.</p>
          <div className="flex items-center gap-4 text-[12px] text-[#a39e98]">
            <span>Seoul, KR</span>
            <span>•</span>
            <Link href="mailto:yeonwoo@example.com" className="hover:text-[#0075de] transition-colors">
              yeonwoo@example.com
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}



