
import { Row, Col } from "react-bootstrap";
import { useFormHelper } from '../../hooks/useFormHelper';
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';


export default function BookingForm({ handleClose, email, setEmail, book }) {

  const {
    formState,
    setFormState,
    createInputElement,
    formIsValid,
  } = useFormHelper();

  const { user } = useOutletContext();
  useEffect(() => {
    if (user) {
      setFormState({ ...formState, email: user.email });
    }
  }, []);

  // debug
  console.log(JSON.stringify(formState, '', '  '));

  // when formState changes setEmail from formState.email
  useEffect(() => {
    setEmail(formState.email)
  }, [formState]);

  function doAfterSend(serverResponse) {
    console.log('serverResponse', serverResponse);
    handleClose();
    setEmail = email;
  }

  return <>
    <>


      <form onSubmit={book}>
        <Row>
          <Col sm={12}>
            <div className='bg-secondary rounded p-3 mt-3'>
              <h4>Dina uppgifter</h4>
              {[


                ['input', 'email', 'E-post', { type: 'email', disabled: !!user }],


              ].map(elData => createInputElement(...elData))

              }</div></Col>
        </Row>



        <Row>
          <Col sm={12} className='mt-3 mb-3'>{[

            ['button', '_submit', '', {
              type: 'submit',
              className: !formIsValid ? 'can-not-submit' : '',
              nolabel: true
            }, 'Boka'],

            ['button', '_reset', '', {
              type: 'reset',
              onClick: () => { setFormState({}); handleClose() },
              className: 'btn-secondary mx-3',
              nolabel: true
            }, 'Avbryt']

          ].map(elData => createInputElement(...elData))
          }</Col>
        </Row>

      </form>
    </>
  </>;
}




