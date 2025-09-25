// src/app/page.js
import HeroVideo from "../components/HeroVideo";
import FeatureSection from "../components/FeatureSection";
import SampleCube from "../components/SampleCube";

export const metadata = {
  title: "CarRental - Accueil",
  description: "Location de voitures avec animations 3D interactivess",
};

export default function Home() {
  const cars = [
    { name: "Mercedes A45s AMG", modelPath: "/mercedes-benz_a45_amg_2018.glb" },
    { name: "BMW M4", modelPath: "/mercedes-benz_a45_amg_2018.glb" },
    { name: "Audi RS6", modelPath: "/mercedes-benz_a45_amg_2018.glb" },
  ];

  return (
    <>
      <HeroVideo />
      <FeatureSection
        title="Découvrez nos voitures en 3D"
        description="Visualisez les modèles avec rotation et zoom interactifs."
        img="/111072.jpg"
      >
        <SampleCube />
      </FeatureSection>
      <FeatureSection
        title="Performance et style"
        description="Chaque modèle est présenté avec animations et détails visuels."
        img="111072.jpg"
        reverse
      >
        <SampleCube />
      </FeatureSection>
    </>
  );
}
