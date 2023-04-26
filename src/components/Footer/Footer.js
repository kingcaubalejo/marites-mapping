import Container from "@components/Container";

import styles from "./Footer.module.scss";

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <Container className={`${styles.footerContainer} ${styles.footerLegal}`}>
        <p>
          &copy;{" "}
          <a href="https://spacejelly.dev">
            Marites Locator - You quick navigation to keep away from marites
          </a>
          , {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
