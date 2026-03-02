import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Feisty - Opskrifter",
  description: "Find danske opskrifter til morgenmad, frokost og aftensmad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={inter.className}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}

function TopNav() {
  const navItems = [
    { href: "/", label: "Hjem" },
    { href: "/opskrifter", label: "Opskrifter" },
    { href: "/madplan", label: "Madplan" },
    { href: "/abonnement", label: "Abonnement" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-emerald-600">
          <span>🍽️</span> Feisty
        </Link>
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-emerald-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
