import ProjectsShowcase from "./_components/ProjectsShowcase";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="flex flex-wrap items-center justify-center gap-2 text-center text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <span>Next.js 14 + Server </span>
          <span className="text-cyan-500">Actions</span>+{" "}
          <span className="text-purple-500">Clerk</span>+{" "}
          <span className="text-orange-500">Tanstack</span> Query
        </h1>

        <ProjectsShowcase />
      </div>
    </main>
  );
}
