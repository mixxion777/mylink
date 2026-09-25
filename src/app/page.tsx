import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-zinc-50 dark:bg-zinc-950">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm text-center dark:border-zinc-800 dark:bg-zinc-900">
        {/* 프로필 이미지 */}
        <div className="mx-auto mb-5 relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
          <Image
            src="/profile.jpg"
            alt="프로필 이미지"
            fill
            sizes="96px"
            className="object-cover"
            priority
          />
        </div>

        {/* 이름 */}
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          이연우
        </h1>

        {/* 뱃지 / 태그 */}
        <div className="mt-2 flex flex-wrap justify-center gap-1.5">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
            Design Engineer
          </span>
          <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            UI/UX & Frontend
          </span>
        </div>

        {/* 소개글 */}
        <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          디자인 감각과 기술적 깊이를 연결하는 디자인 엔지니어입니다. 직관적인 사용성과 정교한 디테일에 집중합니다.
        </p>
      </div>
    </main>
  );
}

