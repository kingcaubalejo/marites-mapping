import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import Container from "@components/Container";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <img src={"./images/logo.png"} className={styles.headerLogo} />
        <p className={styles.headerTitle}>
          <Link href="/">Marites Mapping</Link>
        </p>
        <ul className={styles.headerLinks}>
          <li>
            {/* <a
              href="https://github.com/colbyfayock/next-leaflet-starter"
              rel="noreferrer"
            > */}
            <FaGithub />
            {/* </a> */}
          </li>

          <li>
            <FaLinkedinIn />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
