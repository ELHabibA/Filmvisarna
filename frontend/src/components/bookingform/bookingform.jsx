
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFormHelper } from '../../hooks/useFormHelper';


export default function BookingForm() {

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

  return <>
    <>


      <form onSubmit={event => sendForm({
        event,
        route: 'users',
        body: formState,
        callback: doAfterSend
      })}>
        <div className='bg-secondary rounded p-3 '>
          <h3 className='mb-3'>Fyll i dina uppgifter</h3>
          <Row>{[

            ['input', 'firstName', 'Förnamn'],

            ['input', 'lastName', 'Efternamn'],

            ['input', 'phone', 'Telefonnummer',
              {
                type: 'tel',
                minLength: 8,
                error: x => /^\d*$/.test(x) ? '' :
                  'Ange telefonnumret med endast siffror!'
              }
            ],

            ['input', 'email', 'E-post', { type: 'email' }],


          ].map(elData => createInputElement(...elData))

          }</Row>
        </div>


        <Row>
          <Col className='mt-3'>{[

            ['button', '_submit', '', {
              type: 'submit',
              className: !formIsValid ? 'can-not-submit' : '',
              nolabel: true
            }, 'Boka'],

            ['button', '_reset', '', {
              type: 'reset',
              onClick: () => setFormState({}),
              className: 'btn-secondary mx-3',
              nolabel: true
            }, 'Töm fälten']

          ].map(elData => createInputElement(...elData))
          }</Col>
        </Row>

      </form>
    </>
  </>;
}




