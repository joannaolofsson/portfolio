import styles from "./page.module.css";
import HeroSection from "./components/Hero/HeroSection";
import AboutSection from "./components/About/AboutSection";
import ProjectSection from "./components/Project/ProjectSection";
import CardSortingSection from "./components/CardSorting/CardSortingSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <CardSortingSection />
      </main>
    </div>
  );
}
