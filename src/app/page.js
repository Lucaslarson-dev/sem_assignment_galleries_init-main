import BoilerBox from "@/components/boilerplate/boilerbox";
import styles from "./page.module.css";
import { fetchGalleries } from "@/lib/data.service";

export default async function Page() {
  const galleries = await fetchGalleries();

  return (
    <main className={styles.page}>
      <BoilerBox galleries={galleries} />
    </main>
  );
}
