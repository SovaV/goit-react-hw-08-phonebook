import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

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
      return toast.info('Enter more than 7 characters');
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
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingNameCustom"
            type="text"
            placeholder="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <label htmlFor="floatingNameCustom">Name</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            type="email"
            placeholder="name@example.com"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <label htmlFor="floatingInputCustom">Email address</label>
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
          <label htmlFor="floatingPasswordCustom">Password</label>
        </Form.Floating>
        {/* <label style={styles.label}>
          Имя
          <input type="text" name="name" value={name} onChange={handleChange} required />
        </label>

        <label style={styles.label} htmlFor="floatingInputCustom">
          Почта
          <input type="email" name="email" value={email} onChange={handleChange} required />
        </label>

        <label style={styles.label}>
          Пароль
          <input type="password" name="password" value={password} onChange={handleChange} />
        </label> */}

        <Button variant="outline-primary" type="submit">
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
}
