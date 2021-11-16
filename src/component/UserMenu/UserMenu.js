import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../redux/auth';
import defaultAvatar from '../img/avatar.jpg';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  email: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const email = useSelector(authSelectors.getUseremail);

  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="42" style={styles.avatar} />
      <span style={styles.name}>
        Привет, {name} <br />
        {email}
      </span>

      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  );
}
