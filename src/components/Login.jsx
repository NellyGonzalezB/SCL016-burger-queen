import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebaseconfig';
import logo from '../img/logo.png';

const Login = () => {
  const historial = useHistory('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [msgerror, setMsgError] = useState(null);
  const style = { color: 'red' };

  const LoginWaiter = (e) => {
    auth.signInWithEmailAndPassword(email, pass)
      .then(() => {
        // eslint-disable-next-line no-unused-expressions
        e.target.innerText === 'Mesero' ? historial.push('/lunch') : historial.push('/kitchen');
      })
      .catch((err) => {
        const { code } = err;
        switch (code) {
          case 'auth/invalid-email':
            setMsgError('Formato de correo invalido');
            break;
          case 'auth/user-not-found':
            setMsgError('Usuario no encontrado');
            break;
          default: setMsgError('');
        }
      });
  };

  return (
    <div className="login-container">
      <div>
        <img src={logo} className="logo" alt="" />
      </div>
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label />
            <Form.Control
              onChange={(e) => { setEmail(e.target.value); }}
              type="email"
              placeholder="Usuario"
            />
            <Form.Text className="text-muted" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label />
            <Form.Control
              onChange={(e) => { setPass(e.target.value); }}
              type="password"
              placeholder="Contraseña"
            />
          </Form.Group>
        </Form>
        <div>
          <Button
            onClick={(e) => LoginWaiter(e)}
            variant="primary"
            type="submit"
          >
            Mesero
          </Button>
          <Button
            onClick={(e) => LoginWaiter(e)}
            variant="primary"
            type="submit"
          >
            Cocina
          </Button>
        </div>
        { msgerror && (
        <div style={style}>
          {' '}
          {msgerror}
          {' '}
        </div>
        ) }
      </div>
    </div>
  );
};

export default Login;
