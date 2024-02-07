import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Provider } from "jotai";

const inter = Inter({ subsets: ["latin"] });

function Providers({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>;
}

export const metadata: Metadata = {
  title: "Elite - Matelas, boxsprings, lits, têtes de lits et accessoires",
  description:
    "Découvrez notre large choix de matelas, boxsprings, lits, têtes de lits et accessoires. Produits suisses fabriqués à la main dans nos ateliers à Aubonne.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
