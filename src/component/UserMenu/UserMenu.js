import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../redux/auth';
import { Button } from 'react-bootstrap';
import defaultAvatar from '../img/avatar.jpg';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 14,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    fontSize: 'larger',
    fontFamily: 'cursive',
  },
  email: {
    fontWeight: 700,
    marginRight: 12,
    fontSize: 'larger',
    fontFamily: 'cursive',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const email = useSelector(authSelectors.getUseremail);

  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="52" style={styles.avatar} />
      <span style={styles.name}>
        Привет, {name} <br />
        {email}
      </span>

      <Button
        variant="outline-primary"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        EXIT
      </Button>
    </div>
  );
}
