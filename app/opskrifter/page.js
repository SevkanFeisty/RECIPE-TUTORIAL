import Link from "next/link";

export const metadata = {
  title: "Opskrifter - Feisty",
  description: "Find danske opskrifter til morgenmad, frokost og aftensmad",
};

// Real food images from Unsplash
const recipes = [
  // Main Dishes
  {
    id: "frikadeller",
    title: "Frikadeller",
    subtitle: "Klassiske danske frikadeller",
    category: "Hovedretter",
    categoryIcon: "🍖",
    time: "35 min",
    difficulty: "Nem",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&h=600&fit=crop",
  },
  {
    id: "braendende-kaerlighed",
    title: "Brændende Kærlighed",
    subtitle: "Kartoffelmos med bacon og løg",
    category: "Hovedretter",
    categoryIcon: "🍖",
    time: "45 min",
    difficulty: "Nem",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop",
  },
  {
    id: "tarteletter",
    title: "Tarteletter",
    subtitle: "Høns i asparges",
    category: "Hovedretter",
    categoryIcon: "🍖",
    time: "60 min",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&h=600&fit=crop",
  },
  // Breads
  {
    id: "rugbrod",
    title: "Rugbrød",
    subtitle: "Klassisk dansk rugbrød",
    category: "Brød & bagning",
    categoryIcon: "🍞",
    time: "90 min",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop",
  },
  {
    id: "hveder",
    title: "Hveder",
    subtitle: "Bløde danske hveder",
    category: "Brød & bagning",
    categoryIcon: "🍞",
    time: "120 min",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop",
  },
  // Desserts
  {
    id: "risalamande",
    title: "Risalamande",
    subtitle: "Traditionel dansk risdessert",
    category: "Desserter",
    categoryIcon: "🍰",
    time: "45 min",
    difficulty: "Nem",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=600&fit=crop",
  },
  {
    id: "aeblekage",
    title: "Æblekage",
    subtitle: "Dansk æblekage",
    category: "Desserter",
    categoryIcon: "🍰",
    time: "45 min",
    difficulty: "Nem",
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=800&h=600&fit=crop",
  },
  {
    id: "drommekage",
    title: "Drømmekage",
    subtitle: "Klassisk drømmekage",
    category: "Desserter",
    categoryIcon: "🍰",
    time: "60 min",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=800&h=600&fit=crop",
  },
  // Smørrebrød
  {
    id: "leverpostej",
    title: "Leverpostej",
    subtitle: "Leverpostej med tilbehør",
    category: "Smørrebrød",
    categoryIcon: "🥪",
    time: "20 min",
    difficulty: "Nem",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop",
  },
  {
    id: "kartoffel",
    title: "Kartoffel",
    subtitle: "Kartoffel på rugbrød",
    category: "Smørrebrød",
    categoryIcon: "🥪",
    time: "15 min",
    difficulty: "Nem",
    image: "https://images.unsplash.com/photo-1512054502232-120ea5a0b5f5?w=800&h=600&fit=crop",
  },
  {
    id: "roedbede",
    title: "Rødbede",
    subtitle: "Rødbede og æg",
    category: "Smørrebrød",
    categoryIcon: "🥪",
    time: "15 min",
    difficulty: "Nem",
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800&h=600&fit=crop",
  },
];

const categories = [
  { name: "Alle", icon: "📋" },
  { name: "Hovedretter", icon: "🍖" },
  { name: "Brød & bagning", icon: "🍞" },
  { name: "Desserter", icon: "🍰" },
  { name: "Smørrebrød", icon: "🥪" },
];

export default function OpskrifterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Opskrifter
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Find inspiration til klassiske danske retter. Fra frikadeller til drømmekage.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                cat.name === "Alle"
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="Søg i opskrifter..."
            className="w-full px-5 py-3 rounded-full border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-sm"
          />
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              href={`/opskrifter/${recipe.id}`}
              className="recipe-card group block"
            >
              <div className="overflow-hidden rounded-2xl bg-white shadow-md shadow-slate-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-slate-300/50">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="recipe-image h-full w-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                      {recipe.categoryIcon} {recipe.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 line-clamp-1">
                    {recipe.subtitle}
                  </p>
                  
                  {/* Meta */}
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {recipe.time}
                    </span>
                    <span className={`inline-flex items-center gap-1 ${
                      recipe.difficulty === "Nem" ? "text-emerald-600" : "text-amber-600"
                    }`}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-6 text-white shadow-xl shadow-emerald-500/25">
            <div className="text-left">
              <h3 className="text-lg font-semibold">Mangler du en opskrift?</h3>
              <p className="mt-1 text-sm text-emerald-100">
                Vi tilføjer løbende nye klassiske danske retter.
              </p>
            </div>
            <button className="ml-6 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-600 hover:bg-emerald-50">
              Foreslå en opskrift
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
