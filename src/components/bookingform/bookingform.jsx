import { Row, Col } from "react-bootstrap";
import { useFormHelper } from '../../hooks/useFormHelper';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';


export default function BookingForm({ handleClose, email, setEmail, book }) {
  const [onSubmitMessage, setOnSubmitAnswer] = useState('');
  const [bookingCompleted, setBookingCompleted] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
    const response = await book(event);
    if (response.status === 'success' && response.bookingNumber) {
      setOnSubmitAnswer('Tack för din bokning!');
      setBookingCompleted(true);
    } else {
      setOnSubmitAnswer('Det funkade ej. Försök igen snart.');
    }
  } catch (error) {
    console.error('Något gick fel:', error);
    setOnSubmitAnswer('Det funkade ej. Försök igen snart.');
  }
  };

  return <>
    <>


      <form onSubmit={handleSubmit}>
        <Row>
          <Col sm={12}>
            <div className='bg-secondary rounded p-3 mt-3'>
              <h4>Dina uppgifter</h4>
              {[

                ['input', 'email', 'E-post', { type: 'email', disabled: !!user }],

              ].map(elData => createInputElement(...elData))

              }</div>
          </Col>
        </Row>

        <Row>
          <Col sm={12} className='mt-3 mb-3'>{[

            ['button', '_submit', '', {
              type: 'submit',
              className: !formIsValid || bookingCompleted ? 'can-not-submit' : '',
              disabled: !formIsValid || bookingCompleted,
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
        {onSubmitMessage && <p>{onSubmitMessage}</p>}
      </form>
    </>
  </>;
}




