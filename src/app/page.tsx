// page.tsx
import ClientLayout from "./ClientLayout";
import style from "./page.module.css";

export default function Page() {
  return (
    <ClientLayout>
      <main className={style.main}>
        <h1>Bienvenue sur la page principale</h1>
        <p>Ceci est un exemple de contenu.</p>
      </main>
    </ClientLayout>
  );
}
