export const metadata = {
  title: "Madplan - Feisty",
  description: "Planlæg dine måltider for ugen",
};

export default function MadplanPage() {
  const days = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
  const meals = ['Morgenmad', 'Frokost', 'Aftensmad'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Madplan</h1>
          <p className="mt-4 text-lg text-slate-600">Planlæg ugens måltider</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {days.map((day) => (
            <div key={day} className="rounded-xl bg-white p-4 shadow-md">
              <h3 className="font-semibold text-slate-900 mb-3">{day}</h3>
              <div className="space-y-2">
                {meals.map((meal) => (
                  <div key={meal} className="text-xs text-slate-500 p-2 bg-slate-50 rounded">
                    <span className="block font-medium">{meal}</span>
                    <span className="text-emerald-600">+ Tilføj</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="rounded-full bg-emerald-500 px-6 py-3 text-white font-semibold hover:bg-emerald-600">
            Generér indkøbsliste
          </button>
        </div>
      </main>
    </div>
  );
}
