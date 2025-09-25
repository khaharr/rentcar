# 🚗 Location de Voitures – Site Vitrine 3D

Un site moderne, immersif et optimisé pour présenter une flotte de voitures de location avec des **animations 3D interactives**.  
Construit avec **Next.js (App Router)**, **React Three Fiber**, et **TailwindCSS**.  

##  palette couleur

Noir profond #111111	Fond principal, sections 3D, textes secondaires
Gris clair #E5E5E5	Texte, descriptions
Orange vif #FF6600	Boutons, icônes, accents, hover
Blanc #FFFFFF	Titres, contrastes forts

---

## 🛠️ Stack technique

### **Framework**
- [Next.js](https://nextjs.org/) → Framework React avec **App Router**, rendu côté serveur (SSR/SSG) et optimisation SEO.  
- [Turbopack](https://turbo.build/pack) → Nouveau bundler ultra-rapide de Vercel (dev mode ⚡).  

### **UI & Styles**
- [TailwindCSS](https://tailwindcss.com/) → Framework CSS utilitaire pour un design moderne, responsive et rapide à mettre en place.  
- [Framer Motion](https://www.framer.com/motion/) → Animations fluides pour les transitions et interactions.  

### **3D & Animations**
- [Three.js](https://threejs.org/) → Moteur 3D WebGL.  
- [React Three Fiber (R3F)](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) → Wrapper React pour Three.js (scènes 3D en JSX).  
- [drei](https://github.com/pmndrs/drei) → Collection de helpers pour R3F (OrbitControls, loaders, sky, etc.).  

### **Qualité du code**
- [ESLint](https://eslint.org/) → Linter pour garder un code propre.  
- [Prettier](https://prettier.io/) → Formatage automatique du code.  

---

## 📂 Structure du projet
my-car-rental/
├─ app/ # Pages et layouts (App Router Next.js)
│ ├─ layout.js # Layout global (header/footer)
│ └─ page.js # Page d’accueil
├─ components/ # Composants React réutilisables
│ └─ CarScene.jsx # Scène 3D avec React Three Fiber
├─ public/ # Assets publics (images, modèles 3D .glb)
│ └─ car.glb # Exemple de modèle 3D
├─ styles/ # Fichiers CSS
│ └─ globals.css
├─ .eslintrc.json # Config ESLint
├─ tailwind.config.js # Config TailwindCSS
└─ package.json

yaml
Copier le code

---

## 🚀 Lancer le projet

### 1. Cloner le repo
```bash
git clone https://github.com/toncompte/my-car-rental.git
cd my-car-rental
2. Installer les dépendances
bash
Copier le code
npm install
3. Lancer le serveur de dev
bash
Copier le code
npm run dev
👉 Le site sera dispo sur http://localhost:3000

🎨 Personnalisation
Remplacer le cube 3D par une voiture GLTF/GLB dans components/CarScene.jsx :

jsx
Copier le code
import { useGLTF } from "@react-three/drei";

function CarModel() {
  const { scene } = useGLTF("/car.glb");
  return <primitive object={scene} scale={1.5} />;
}
Modifier les couleurs et styles via TailwindCSS.

Ajouter des animations Framer Motion pour les transitions de pages.

📦 Déploiement
Hébergement recommandé : Vercel (support natif de Next.js).

Alternative : Netlify.

✨ Roadmap
 Ajouter un catalogue de voitures (JSON statique).

 Intégrer un formulaire de contact (via EmailJS ou Formspree).

 Optimiser les modèles 3D (compression GLTF, textures KTX2).

 SEO avancé (balises meta, Open Graph).

