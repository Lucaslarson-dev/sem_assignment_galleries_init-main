import Link from "next/link";
import styles from "./navigation.module.css";
import Image from "next/image";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src={"/square_logo.png"}
              width={40}
              height={40}
              alt={"logo"}
            ></Image>
          </Link>
        </div>
        <div>NAVIGATION</div>
        <div>{/* BURGER ICON */}</div>
      </div>
    </div>
  );
};

export default Navigation;
