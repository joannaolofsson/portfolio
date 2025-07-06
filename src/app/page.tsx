import styles from "./page.module.css";
import HeroSection from "./components/Hero/HeroSection";
import { AboutSection } from "./components/About/AboutSection";
import ProjectSection from "./components/Project/ProjectSection";
import CardSorting from "./components/CardSorting/CardSorting";
import PostCard from "./components/PostCard/PostCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <HeroSection />
      <PostCard />
      <AboutSection />
      <ProjectSection />
      <CardSorting />
      </main>
    </div>
  );
}
