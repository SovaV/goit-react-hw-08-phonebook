import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Navigation.module.css';
import { authSelectors } from '../redux/auth';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink exact to="/" className={styles.link} activeClassName={styles.activeLink}>
        Главная
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className={styles.link} activeClassName={styles.activeLink}>
          Контакты
        </NavLink>
      )}
    </nav>
  );
}
