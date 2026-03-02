export const metadata = {
  title: "Abonnement - Feisty",
  description: "Vælg dit Feisty abonnement",
};

export default function AbonnementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Vælg dit abonnement</h1>
          <p className="mt-4 text-lg text-slate-600">Start med Feisty og spare tid og penge</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
            <h2 className="text-xl font-bold text-slate-900">Standard</h2>
            <p className="mt-2 text-3xl font-bold text-emerald-600">74 kr<span className="text-sm font-normal text-slate-500">/md</span></p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>✓ 7-dages madplan</li>
              <li>✓ Indkøbsliste</li>
              <li>✓ Tilbud fra supermarkeder</li>
            </ul>
            <button className="mt-6 w-full rounded-full bg-slate-900 py-3 text-white font-semibold hover:bg-slate-800">
              Vælg Standard
            </button>
          </div>

          <div className="relative rounded-2xl border-2 border-emerald-500 bg-emerald-50 p-6 shadow-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 text-xs font-semibold text-white">
              Anbefalet
            </div>
            <h2 className="text-xl font-bold text-slate-900">Pro</h2>
            <p className="mt-2 text-3xl font-bold text-emerald-600">99 kr<span className="text-sm font-normal text-slate-500">/md</span></p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>✓ Alt i Standard</li>
              <li>✓ Kostbegrænsninger</li>
              <li>✓ Allergen-filtrering</li>
            </ul>
            <button className="mt-6 w-full rounded-full bg-emerald-500 py-3 text-white font-semibold hover:bg-emerald-600">
              Vælg Pro
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
