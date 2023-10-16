import { Container, Row, Col } from 'react-bootstrap';
import { useFormHelper } from "./hooks/useFormHelper";
import { sendForm } from './hooks/rest';
import { Link } from 'react-router-dom'; // Import the Link component from your router library

const LogIn = () => {
  const {
    formState,
    setFormState,
    createInputElement,
    formIsValid,
  } = useFormHelper();

  // debug
  console.log(JSON.stringify(formState, '', '  '));

  function doAfterSend(serverResponse) {
    console.log('serverResponse', serverResponse);
  }

  return (
    <>
      <h1>Logga in</h1>

      <form onSubmit={event => sendForm({
        event,
        route: 'login', // Adjust the route for login
        body: formState,
        callback: doAfterSend
      })}>

        <Row>
          {[
            ['input', 'E-post', 'E-post', { type: 'email' }],
            ['input', 'lösenord', 'lösenord', { type: 'password' }]
          ].map(elData => createInputElement(...elData))}
        </Row>

        <Row>
          <Col>
            {[

              ['button', '_submit', '', {
                type: 'submit',
                className: !formIsValid ? 'can-not-submit' : '',
                nolabel: true
              }, 'Logga in'],

              ['button', '_reset', '', {
                type: 'reset',
                onClick: () => setFormState({}),
                className: 'btn-secondary mx-3',
                nolabel: true
              }, 'Töm fälten']

            ].map(elData => createInputElement(...elData))}
          </Col>
        </Row>
      </form>

      <p>Inte medlem? <Link to="/blimedlem">Bli medlem</Link></p>
    </>
  );
};

export default LogIn;
