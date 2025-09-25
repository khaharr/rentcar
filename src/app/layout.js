// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "CarRental",
  description: "Location de voitures avec animations 3D interactives",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head />
      <body className="bg-gray-900 text-white antialiased">
        <main >{children}</main>
      </body>
    </html>
  );
}

