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
      subtitle: "Klassiske danske frikadeller",
      description: "Danish meatballs, otherwise known as frikadeller, is a beloved national dish.",
      category: "Hovedretter",
      categoryIcon: "🍖",
      time: "35 min",
      servings: 4,
      difficulty: "Nem",
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
        "Bland det hakkede kød med det finthakkede løg",
        "Tilsæt æg, mel og mælk",
        "Krydre med salt og peber",
        "Form til små, aflange kødboller",
        "Steg i smør til de er gyldne på alle sider",
        "Server med rugbrød og syltede agurker",
      ],
    },
    "braendende-kaerlighed": {
      title: "Brændende Kærlighed",
      subtitle: "Kartoffelmos med bacon og løg",
      description: "En gammel og meget traditionel dansk ret. Kartoffelmos toppet med bacon og løg.",
      category: "Hovedretter",
      categoryIcon: "🍖",
      time: "45 min",
      servings: 4,
      difficulty: "Nem",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1200&h=800&fit=crop",
      ingredients: [
        "600g kartofler",
        "1 dl mælk",
        "25g smør",
        "200g bacon i tern",
        "2 løg",
        "Salt",
        "Persille",
        "Syltede rødbeder til servering",
      ],
      instructions: [
        "Skræl kartofler og kog dem møre i ca. 20 minutter",
        "Steg bacon sprødt og tilsæt løg til de er gyldne",
        "Hæld vandet fra kartofler og mos dem",
        "Tilsæt mælk og smør og krydre med salt",
        "Server med bacon/løg topping og drys med persille",
        "Server med syltede rødbeder",
      ],
    },
    tarteletter: {
      title: "Tarteletter",
      subtitle: "Høns i asparges",
      description: "Traditionelle danske tarteletter med høns, asparges og hvid sovs.",
      category: "Hovedretter",
      categoryIcon: "🍖",
      time: "60 min",
      servings: 6,
      difficulty: "Medium",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1200&h=800&fit=crop",
      ingredients: [
        "1.5 l vand",
        "Hønsebouillon",
        "350g kyllingebryst",
        "150g hvide asparges",
        "40g smør",
        "5 spsk mel",
        "2 dl mælk",
        "2 dl kogevand fra kyllingen",
        "Salt og peber",
      ],
      instructions: [
        "Bring vand i kog og opløs hønsebouillon",
        "Kog kyllingebryst i ca. 20 minutter",
        "Skær kylling i små tern og gem kogevandet",
        "Lav hvid sovs: smelt smør, rør mel i, tilsæt mælk og kogevand",
        "Tilsæt kylling og asparges",
        "Varm tarteletter i ovnen og fyld med sovsen",
      ],
    },
    rugbrod: {
      title: "Rugbrød",
      subtitle: "Klassisk dansk rugbrød",
      description: "Det mest berømte brød i Danmark. Proppet med forskellige kerner og korn.",
      category: "Brød & bagning",
      categoryIcon: "🍞",
      time: "90 min",
      servings: 10,
      difficulty: "Medium",
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
        "Sæt rugkerner, hvedekerner, frø, vand og maltsirup i blød i minimum 8 timer",
        "Tilsæt mel og lad hæve i ca. 1.5 time",
        "Del i to portioner og hæld i brødforme",
        "Lad hæve i 1-2 timer til formen er fuld",
        "Bag ved 180°C i ca. 1 time",
      ],
    },
    risalamande: {
      title: "Risalamande",
      subtitle: "Traditionel dansk risdessert",
      description: "Den mest berømte og traditionelle danske jule dessert.",
      category: "Desserter",
      categoryIcon: "🍰",
      time: "45 min",
      servings: 8,
      difficulty: "Nem",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1200&h=800&fit=crop",
      ingredients: [
        "2.25 dl kortkornet ris",
        "1 l mælk",
        "2 vaniljestænger",
        "150g mandler",
        "2 spsk sukker",
        "5 dl piskefløde",
        "Kirsebærsovs",
      ],
      instructions: [
        "Kog ris og vand i 2 minutter",
        "Tilsæt mælk og bring i kog",
        "Tilsæt vaniljekerner og smør ved lav varme i 35 minutter",
        "Afkøl i køleskab (kan laves dagen før)",
        "Skold mandler, pil og hak groft",
        "Bland mandler i den kolde risengrød",
        "Pisk fløde og fold forsigtigt i",
        "Server med varm kirsebærsovs",
      ],
    },
    aeblekage: {
      title: "Æblekage",
      subtitle: "Dansk æblekage",
      description: "En klassisk dansk dessert med æbler og fløde.",
      category: "Desserter",
      categoryIcon: "🍰",
      time: "45 min",
      servings: 6,
      difficulty: "Nem",
      image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=1200&h=800&fit=crop",
      ingredients: [
        "4 store æbler",
        "2 dl sukker",
        "2.5 dl vand",
        "1 tsk kanel",
        "3 dl piskefløde",
        "Flodeskum",
      ],
      instructions: [
        "Skræl og skær æbler i både",
        "Kog sukker og vand til karamel",
        "Tilsæt æbler og kanel og kog møre",
        "Afkøl æblerne",
        "Pisk fløde og server oven på æblerne",
      ],
    },
    drommekage: {
      title: "Drømmekage",
      subtitle: "Klassisk drømmekage",
      description: "En af Danmarks mest elskede kager med kokos og chokolade.",
      category: "Desserter",
      categoryIcon: "🍰",
      time: "60 min",
      servings: 8,
      difficulty: "Medium",
      image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=1200&h=800&fit=crop",
      ingredients: [
        "150g smør",
        "200g sukker",
        "4 æg",
        "200g mel",
        "2 tsk bagepulver",
        "100g kokosmel",
        "3 spsk kakao",
        "1 dl mælk",
      ],
      instructions: [
        "Pisk smør og sukker luftigt",
        "Tilsæt æg ét ad gangen",
        "Bland mel, bagepulver og kokos",
        "Tilsæt melblandingen og mælk",
        "Hæld halvdelen i en form",
        "Bland kakao med lidt vand og hæld over",
        "Bag ved 175°C i ca. 35 minutter",
      ],
    },
    leverpostej: {
      title: "Leverpostej",
      subtitle: "Leverpostej med tilbehør",
      description: "En klassisk dansk leverpostej serveret på rugbrød.",
      category: "Smørrebrød",
      categoryIcon: "🥪",
      time: "20 min",
      servings: 6,
      difficulty: "Nem",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=800&fit=crop",
      ingredients: [
        "500g griselever",
        "200g bacon",
        "2 løg",
        "2 æg",
        "2 dl mælk",
        "1 dl mel",
        "Salt og peber",
      ],
      instructions: [
        "Hak lever, bacon og løg fint",
        "Bland med æg, mælk og mel",
        "Krydre med salt og peber",
        "Hæld i smurt form",
        "Bag ved 180°C i ca. 45 minutter",
        "Servér på rugbrød med agurker og rugbrød",
      ],
    },
    kartoffel: {
      title: "Kartoffel",
      subtitle: "Kartoffel på rugbrød",
      description: "En simpel og klassisk dansk smørrebrød.",
      category: "Smørrebrød",
      categoryIcon: "🥪",
      time: "15 min",
      servings: 2,
      difficulty: "Nem",
      image: "https://images.unsplash.com/photo-1512054502232-120ea5a0b5f5?w=1200&h=800&fit=crop",
      ingredients: [
        "2 skiver rugbrød",
        "Kogte kartofler",
        "1 rødløg",
        "Syltede agurker",
        "Radiser",
        "Frisk purløg",
      ],
      instructions: [
        "Skær kartofler i skiver",
        "Læg på rugbrød",
        "Top med tynde rødløgsringe",
        "Pynt med syltede agurker og radiser",
        "Drys med purløg",
      ],
    },
    roedbede: {
      title: "Rødbede",
      subtitle: "Rødbede og æg",
      description: "Frisk og farverig dansk smørrebrød med rødbede og æg.",
      category: "Smørrebrød",
      categoryIcon: "🥪",
      time: "15 min",
      servings: 2,
      difficulty: "Nem",
      image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=1200&h=800&fit=crop",
      ingredients: [
        "2 skiver rugbrød",
        "2 kogte æg",
        "1 rødbede (revnet)",
        "Creme fraishe",
        "Dild",
        "Salt og peber",
      ],
      instructions: [
        "Smør creme fraishe på rugbrød",
        "Skær æg i skiver og læg på",
        "Riv rødbede groft og læg oven på",
        "Krydre med salt og peber",
        "Pynt med frisk dild",
      ],
    },
    hveder: {
      title: "Hveder",
      subtitle: "Bløde danske hveder",
      description: "Klassiske danske hveder, typisk spist på hvedegrødspandserensdag.",
      category: "Brød & bagning",
      categoryIcon: "🍞",
      time: "120 min",
      servings: 8,
      difficulty: "Medium",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=800&fit=crop",
      ingredients: [
        "50g gær",
        "5 dl lunken mælk",
        "150g smør",
        "100g sukker",
        "2 æg",
        "1 kg hvedemel",
        "1 tsk salt",
      ],
      instructions: [
        "Opløs gær i lunken mælk",
        "Tilsæt smør, sukker og æg",
        "Tilsæt mel og salt og ælt til en glat dej",
        "Lad dejen hæve i 1 time",
        "Form til 8 runde hveder",
        "Lad hæve yderligere 30 min",
        "Bag ved 220°C i 12-15 minutter",
      ],
    },
  };
  return recipes[id] || recipes.frikadeller;
}

export default function RecipeDetailPage({ params }) {
  const recipe = getRecipe(params.id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Image */}
      <div className="relative h-64 sm:h-80 lg:h-96">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <Link
            href="/opskrifter"
            className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm text-white hover:bg-white/30"
          >
            ← Tilbage til opskrifter
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-emerald-600 mb-2">
            <span>{recipe.categoryIcon}</span>
            <span>{recipe.category}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            {recipe.title}
          </h1>
          <p className="mt-2 text-lg text-slate-600">{recipe.subtitle}</p>

          {/* Meta */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {recipe.time}
            </span>
            <span className="inline-flex items-center gap-1">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {recipe.servings} personer
            </span>
            <span className="inline-flex items-center gap-1">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {recipe.difficulty}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-slate-600">{recipe.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ingredients */}
          <div className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200/50">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Ingredienser</h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" />
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200/50">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Fremgangsmåde</h2>
            <ol className="space-y-4">
              {recipe.instructions.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Add to Plan CTA */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Kan du lide opskriften?</h3>
              <p className="text-emerald-100">Tilføj den til din madplan og lav automatisk indkøbsliste</p>
            </div>
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-600 hover:bg-emerald-50">
              Tilføj til madplan
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
