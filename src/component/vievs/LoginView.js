import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Button, Form } from 'react-bootstrap';

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

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страница логина</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="on">
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            type="email"
            placeholder="name@example.com"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <label htmlFor="floatingInputCustom">Почта</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingPasswordCustom"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <label htmlFor="floatingPasswordCustom">Пароль</label>
        </Form.Floating>
        {/* <label style={styles.label}>
          Почта
          <input type="email" name="email" value={email} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Пароль
          <input type="password" name="password" value={password} onChange={handleChange} />
        </label> */}

        <Button variant="outline-primary" type="submit">
          Войти
        </Button>
      </form>
    </div>
  );
}
