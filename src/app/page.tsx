import styles from "./page.module.css";
import HeroSection from "./components/Hero/HeroSection";
import AboutSection from "./components/About/AboutSection";
import ProjectSection from "./components/Project/ProjectSection";
import CardSortingGame from "./components/CardSorting/CardSortGame";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <CardSortingGame />
      </main>
    </div>
  );
}
