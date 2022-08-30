import { Link as Scroll } from 'react-scroll';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header_main}>
      <h2 className={styles.header_title}>
        <Scroll to="page-top" smooth={true} duration={400} offset={-100}>
          RESAS APP
        </Scroll>
      </h2>
    </header>
  );
};

export default Header;
