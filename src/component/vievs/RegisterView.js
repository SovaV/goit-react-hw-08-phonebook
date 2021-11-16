import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Button } from 'react-bootstrap';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (password.length < 7) {
      alert('Enter more than 7 characters');
    }
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страница регистрации</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="on">
        <label style={styles.label}>
          Имя
          <input type="text" name="name" value={name} onChange={handleChange} required />
        </label>

        <label style={styles.label}>
          Почта
          <input type="email" name="email" value={email} onChange={handleChange} required />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password "
            name="password"
            value={password}
            onChange={handleChange}
            // pattern="[0-9a-fA-F]{4,8}"
            // required
          />
        </label>

        {/* <button type="submit">Зарегистрироваться</button> */}
        <Button variant="outline-primary" size="lg" type="submit">
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
}
