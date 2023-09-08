import styles from "./responsive.module.css";

function Responsive() {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.menu}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Responsive;
