import Link from "next/link";

export const metadata = {
  title: "Feisty - Smart Meal Planning",
  description: "Plan dine måltider. Spar penge. Mindre madspild.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Feisty 🍽️
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Smart madplanlægning for danske familier
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/opskrifter"
              className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-600 hover:shadow-xl"
            >
              Se opskrifter →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
