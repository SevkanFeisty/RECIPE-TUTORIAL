import Link from "next/link";

export async function generateStaticParams() {
  const recipes = [
    { id: "frikadeller" },
    { id: "braendende-kaerlighed" },
    { id: "tarteletter" },
    { id: "rugbrod" },
    { id: "hveder" },
    { id: "risalamande" },
    { id: "aeblekage" },
    { id: "drommekage" },
    { id: "leverpostej" },
    { id: "kartoffel" },
    { id: "roedbede" },
  ];
  return recipes.map((recipe) => ({ id: recipe.id }));
}

export async function generateMetadata({ params }) {
  const recipe = getRecipe(params.id);
  return {
    title: `${recipe.title} - Feisty Opskrifter`,
    description: recipe.description,
  };
}

function getRecipe(id) {
  const recipes = {
    frikadeller: {
      title: "Frikadeller",
      subtitle: "Klassiske danske frikadeller med rugbrød",
      description: "Frikadeller er en elsket nationalret i Danmark. Disse saftige kødboller serveres ofte med rugbrød og syltede agurker.",
      category: "Hovedretter",
      prepTime: "20 min",
      cookTime: "15 min",
      servings: 4,
      image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=1200&h=800&fit=crop",
      ingredients: [
        "500g hakket svinekød",
        "1 løg, finthakket",
        "2 æg",
        "3 spsk mel",
        "1 dl mælk",
        "Salt og peber",
        "Smør til stegning",
      ],
      instructions: [
        "Bland det hakkede kød med det finthakkede løg i en skål.",
        "Tilsæt æg, mel og mælk og rør grundigt.",
        "Krydre med salt og peber efter smag.",
        "Form dejen til små, aflange kødboller.",
        "Steg i rigeligt smør ved medium varme i ca. 3-4 minutter på hver side.",
        "Server varme med rugbrød, syltede agurker og remonce.",
      ],
    },
    "braendende-kaerlighed": {
      title: "Brændende Kærlighed",
      subtitle: "Kartoffelmos med bacon og karamelliserede løg",
      description: "En gammel og meget traditionel dansk ret. Den cremede kartoffelmos toppes med sprødt bacon og søde løg.",
      category: "Hovedretter",
      prepTime: "15 min",
      cookTime: "30 min",
      servings: 4,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1200&h=800&fit=crop",
      ingredients: [
        "600g kartofler",
        "1 dl mælk",
        "50g smør",
        "200g bacon i tern",
        "2 store løg",
        "Salt og peber",
        "Frisk persille",
        "Syltede rødbeder til servering",
      ],
      instructions: [
        "Skræl kartofler og kog dem møre i ca. 20 minutter.",
        "Steg bacon sprødt i en pande og læg til side.",
        "Sauter løg i baconfedtet til de er gyldne og karamelliserede.",
        "Hæld vandet fra kartofler og mos dem grundigt.",
        "Tilsæt mælk og smør og krydre med salt og peber.",
        "Anret mos på tallerkener og top med bacon og løg.",
        "Drys med frisk persille og server med syltede rødbeder.",
      ],
    },
    tarteletter: {
      title: "Tarteletter",
      subtitle: "Høns i asparges med brun sovs",
      description: "Tarteletter er en klassisk dansk ret, der ofte serveres ved festlige lejligheder.",
      category: "Hovedretter",
      prepTime: "30 min",
      cookTime: "30 min",
      servings: 6,
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1200&h=800&fit=crop",
      ingredients: [
        "1.5 l vand",
        "2 hønsebouillontern",
        "350g kyllingebryst",
        "1 dåse hvide asparges",
        "50g smør",
        "5 spsk mel",
        "2 dl mælk",
        "2 dl kogevand fra kyllingen",
        "Salt og peber",
      ],
      instructions: [
        "Bring vand i kog og opløs hønsebouillon.",
        "Kog kyllingebryst i ca. 20 minutter til de er møre.",
        "Skær kylling i små tern og gem kogevandet.",
        "Smelt smør i en gryde og rør mel i.",
        "Tilsæt mælk og kogevand under omrøring til sovs.",
        "Tilsæt kylling og asparges og varm igennem.",
        "Fyld tarteletter med blandingen og server straks.",
      ],
    },
    rugbrod: {
      title: "Rugbrød",
      subtitle: "Hjemmebagt rugbrød med kerner og frø",
      description: "Rugbrød er sandsynligvis det mest berømte brød i Danmark. Fyldt med forskellige kerner og korn.",
      category: "Brød & bagning",
      prepTime: "30 min",
      cookTime: "60 min",
      servings: 10,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=800&fit=crop",
      ingredients: [
        "2 dl knækkede rugkerner",
        "2 dl knækkede hvedekerner",
        "2 dl hørfrø",
        "2 dl solsikkekerner",
        "1 spsk maltsirup",
        "8 dl vand",
        "4 dl hvedemel",
        "4 dl rugmel",
        "1 spsk salt",
      ],
      instructions: [
        "Sæt rugkerner, hvedekerner, frø, vand og maltsirup i blød i minimum 8 timer.",
        "Tilsæt mel og lad hæve i ca. 1,5 time.",
        "Del i to portioner og hæld i brødforme.",
        "Lad hæve i 1-2 timer til formen er fuld.",
        "Bag ved 180°C i ca. 1 time.",
      ],
    },
  };

  // Fallback for recipes not fully defined
  const defaultRecipe = {
    title: "Opskrift",
    subtitle: "En lækker dansk ret",
    description: "En klassisk dansk opskrift.",
    category: "Hovedretter",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=800&fit=crop",
    ingredients: ["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"],
    instructions: ["Trin 1", "Trin 2", "Trin 3"],
  };

  return recipes[id] || defaultRecipe;
}

export default function RecipeDetailPage({ params }) {
  const recipe = getRecipe(params.id);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Image - Large and prominent like Jamie Oliver */}
      <div className="relative h-80 sm:h-96 lg:h-[500px]">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Back button */}
        <div className="absolute top-4 left-4">
          <Link
            href="/opskrifter"
            className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm text-white hover:bg-white/30 transition"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Alle opskrifter
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-4xl px-4 -mt-20 relative z-10">
        {/* Recipe Header Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-2 text-sm text-emerald-600 mb-3">
            <span className="px-3 py-1 bg-emerald-100 rounded-full font-medium">{recipe.category}</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            {recipe.title}
          </h1>
          <p className="mt-2 text-lg text-slate-600">{recipe.subtitle}</p>
          
          <p className="mt-4 text-slate-600 leading-relaxed">{recipe.description}</p>

          {/* Quick Info - Prominent like Jamie Oliver */}
          <div className="mt-6 flex flex-wrap gap-6 py-4 border-t border-b border-slate-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{recipe.prepTime}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Prep</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{recipe.cookTime}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Kogning</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{recipe.servings}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Portioner</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ingredients - Clean list */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </span>
              Ingredienser
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <span className="w-2 h-2 mt-2 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions - Numbered steps */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
              Fremgangsmåde
            </h2>
            <ol className="space-y-4">
              {recipe.instructions.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 bg-emerald-500 text-white rounded-full text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-slate-700 pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Add to Plan CTA */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Vil du lave denne opskrift?</h3>
              <p className="text-emerald-100 text-sm">Tilføj til din madplan og få en automatisk indkøbsliste</p>
            </div>
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-600 hover:bg-emerald-50 transition shadow-lg">
              Tilføj til madplan
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
