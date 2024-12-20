export const REACT_CONCEPTS = [
  {
    id: "jsx",
    text: "JSX",
    title:
      "Définition : JSX est une syntaxe qui permet d'écrire du HTML directement dans JavaScript. Elle facilite la création d'éléments React et les rend plus lisibles. Les balises HTML et JavaScript peuvent être combinées dans un seul fichier pour un développement rapide et efficace.",
    exemple:
      "// Exemple basique avec JSX\n" +
      "const App = () => (\n" +
      "  <div>\n" +
      "    <h1>Hello, JSX!</h1>\n" +
      "  </div>\n" +
      ");",
  },
  {
    id: "vdom",
    text: "Virtual DOM",
    title:
      "Définition : Le Virtual DOM est une copie légère du DOM réel utilisée par React. Lorsqu'un changement est effectué, React compare le Virtual DOM au DOM réel et applique uniquement les modifications nécessaires. Cela améliore les performances en réduisant les manipulations directes du DOM.",
    exemple:
      "// React met à jour uniquement les parties modifiées\n" +
      "const element = <h1>Hello, Virtual DOM!</h1>;\n" +
      "ReactDOM.render(element, document.getElementById('root'));",
  },
  {
    id: "components",
    text: "Composants",
    title:
      "Définition : Les composants sont des blocs réutilisables de code React qui encapsulent des éléments d'interface utilisateur. Ils peuvent être des fonctions ou des classes. Les composants permettent une meilleure modularité et la réutilisation de code.",
    exemple:
      "// Composant fonctionnel\n" +
      "const Button = () => <button>Click me</button>;\n" +
      "// Utilisation du composant\n" +
      "const App = () => (\n" +
      "  <div>\n" +
      "    <Button />\n" +
      "  </div>\n" +
      ");",
  },
  {
    id: "props",
    text: "Propriétés",
    title:
      "Définition : Les props (propriétés) sont utilisées pour transmettre des données d'un composant parent à un composant enfant. Elles sont immuables, ce qui signifie qu'un composant enfant ne peut pas modifier les props qu'il reçoit.",
    exemple:
      "// Transmission de props\n" +
      "const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;\n" +
      "// Utilisation\n" +
      "const App = () => <Greeting name='React' />;",
  },
  {
    id: "state",
    text: "État",
    title:
      "Définition : L'état (state) est un objet local à chaque composant, utilisé pour gérer des données dynamiques. Il permet aux composants de répondre à des interactions utilisateur ou à des changements dans les données.",
    exemple:
      "// Gestion de l'état avec useState\n" +
      "import { useState } from 'react';\n" +
      "const Counter = () => {\n" +
      "  const [count, setCount] = useState(0);\n" +
      "  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;\n" +
      "};",
  },
  {
    id: "context",
    text: "Contexte",
    title:
      "Définition : Le contexte est une méthode de React pour partager des données (comme un thème ou une langue) à travers l'arbre des composants sans avoir besoin de passer des props manuellement à chaque niveau.",
    exemple:
      "// Exemple avec le contexte\n" +
      "import { createContext, useContext } from 'react';\n" +
      "const ThemeContext = createContext('light');\n" +
      "const App = () => (\n" +
      "  <ThemeContext.Provider value='dark'>\n" +
      "    <Child />\n" +
      "  </ThemeContext.Provider>\n" +
      ");\n" +
      "const Child = () => {\n" +
      "  const theme = useContext(ThemeContext);\n" +
      "  return <p>Theme: {theme}</p>;\n" +
      "};",
  },
  {
    id: "hooks",
    text: "Hooks",
    title:
      "Définition : Les hooks sont des fonctions qui permettent d'utiliser des fonctionnalités React (comme l'état ou le cycle de vie) dans des composants fonctionnels. Les hooks les plus courants sont useState et useEffect.",
    exemple:
      "// Exemple avec useState et useEffect\n" +
      "import { useState, useEffect } from 'react';\n" +
      "const Counter = () => {\n" +
      "  const [count, setCount] = useState(0);\n" +
      "  useEffect(() => {\n" +
      "    console.log(`Count is: ${count}`);\n" +
      "  }, [count]);\n" +
      "  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;\n" +
      "};",
  },
  {
    id: "portal",
    text: "Portail",
    title:
      "Définition : Les portails permettent de rendre un composant dans un élément DOM différent de celui de son parent. Cela est utile pour les modales ou les tooltips qui doivent apparaître en dehors de l'arbre principal.",
    exemple:
      "// Exemple de portail\n" +
      "import ReactDOM from 'react-dom';\n" +
      "const Modal = () => ReactDOM.createPortal(\n" +
      "  <div>Modal Content</div>,\n" +
      "  document.getElementById('modal-root')\n" +
      ");",
  },
  {
    id: "ref",
    text: "Ref",
    title:
      "Définition : Une ref est un objet spécial fourni par React pour accéder directement à un élément DOM ou à une instance de composant. Cela est utile pour gérer des focus, des animations, ou mesurer la taille d'un élément.",
    exemple:
      "// Exemple avec useRef pour un champ de saisie\n" +
      "import { useRef } from 'react';\n" +
      "const InputFocus = () => {\n" +
      "  const inputRef = useRef();\n" +
      "  return (\n" +
      "    <div>\n" +
      "      <input ref={inputRef} placeholder='Tapez ici...' />\n" +
      "      <button onClick={() => inputRef.current.focus()}>Focus</button>\n" +
      "    </div>\n" +
      "  );\n" +
      "};",
  },
  {
    id: "render-props",
    text: "Render Props",
    title:
      "Définition : Un pattern où une fonction est passée en prop pour définir ce qu’un composant doit rendre. Cela permet de partager des comportements entre plusieurs composants.",
    exemple:
      "// Exemple avec le pattern Render Props\n" +
      "const MouseTracker = ({ render }) => {\n" +
      "  const [position, setPosition] = useState({ x: 0, y: 0 });\n" +
      "  const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });\n" +
      "  return <div onMouseMove={handleMouseMove}>{render(position)}</div>;\n" +
      "};\n" +
      "const App = () => (\n" +
      "  <MouseTracker render={({ x, y }) => <p>Position : {x}, {y}</p>} />\n" +
      ");",
  },
  {
    id: "hoc",
    text: "Higher-Order Components",
    title:
      "Définition : Un Higher-Order Component (HOC) est une fonction qui prend un composant en entrée et retourne un nouveau composant enrichi. Cela permet de réutiliser des fonctionnalités entre plusieurs composants.",
    exemple:
      "// Exemple avec un HOC pour ajouter un message d'accueil\n" +
      "const withGreeting = (Component) => (props) => (\n" +
      "  <div>\n" +
      "    <p>Bienvenue !</p>\n" +
      "    <Component {...props} />\n" +
      "  </div>\n" +
      ");\n" +
      "const Hello = () => <p>Hello React!</p>;\n" +
      "const EnhancedHello = withGreeting(Hello);",
  },
  {
    id: "lazy",
    text: "Lazy Loading",
    title:
      "Définition : Le Lazy Loading permet de charger des composants ou des ressources uniquement lorsqu'elles sont nécessaires. Cela améliore les performances en réduisant la taille initiale du bundle.",
    exemple:
      "// Exemple de Lazy Loading avec React\n" +
      "import React, { lazy, Suspense } from 'react';\n" +
      "const LazyComponent = lazy(() => import('./MyComponent'));\n" +
      "const App = () => (\n" +
      "  <Suspense fallback={<p>Chargement...</p>}>\n" +
      "    <LazyComponent />\n" +
      "  </Suspense>\n" +
      ");",
  },
  {
    id: "suspense",
    text: "Suspense",
    title:
      "Définition : Suspense est un composant React utilisé pour gérer les états de chargement lors du rendu asynchrone. Il est souvent utilisé avec le Lazy Loading pour afficher un indicateur de chargement.",
    exemple:
      "// Exemple de Suspense pour le Lazy Loading\n" +
      "import React, { lazy, Suspense } from 'react';\n" +
      "const LazyComponent = lazy(() => import('./MyComponent'));\n" +
      "const App = () => (\n" +
      "  <Suspense fallback={<p>Chargement en cours...</p>}>\n" +
      "    <LazyComponent />\n" +
      "  </Suspense>\n" +
      ");",
  },
  {
    id: "router",
    text: "React Router",
    title:
      "Définition : React Router est une bibliothèque pour gérer les routes dans une application React. Elle permet de naviguer entre différentes pages ou vues sans recharger l'application.",
    exemple:
      "// Exemple avec React Router\n" +
      "import { BrowserRouter, Routes, Route } from 'react-router-dom';\n" +
      "const Home = () => <h1>Accueil</h1>;\n" +
      "const About = () => <h1>À propos</h1>;\n" +
      "const App = () => (\n" +
      "  <BrowserRouter>\n" +
      "    <Routes>\n" +
      "      <Route path='/' element={<Home />} />\n" +
      "      <Route path='/about' element={<About />} />\n" +
      "    </Routes>\n" +
      "  </BrowserRouter>\n" +
      ");",
  },
];
