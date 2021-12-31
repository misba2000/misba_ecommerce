import { Link } from 'react-router-dom';

import styles from "./styles.module.css";

function Header() {
  return (
    <div className={styles.header1}>
      <ul className={styles.header2}>
        <Link to="/"><li className={styles.header3}>access_</li></Link>
        <Link to="/cart"><li className={styles.header3}>cart</li></Link>
        <Link to="/authentication"><li className={styles.header3}>login/signup</li></Link>
       
      </ul>
      </div>
  );
}

export default Header;
