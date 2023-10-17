import { Container, Row, Col } from 'react-bootstrap';
import { useFormHelper } from "./hooks/useFormHelper";
import { sendForm } from './hooks/rest';

export default function BecomeMember() {

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
         <h1>Bli medlem</h1>

         <form onSubmit={event => sendForm({
            event,
            route: 'users',
            body: formState,
            callback: doAfterSend
         })}>

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

            <Row>{[

               ['input', 'password', 'Välj lösenord',
                  {
                     type: 'password', minLength: 8,
                     error: x => [/[A-ZÅÄÖ]/, /[a-zåäö]/, /\d/]
                        .every(reg => reg.test(x)) ? '' :
                        'Lösenordet måste innehålla ' +
                        'stor & liten bokstav, samt en siffra!'
                  }
               ],

               ['input', '_confirmPassword', 'Upprepa lösenord',
                  {
                     type: 'password',
                     error: x => x !== formState.password
                        && 'Matcha lösenordet!'
                  }
               ]

            ].map(elData => createInputElement(...elData))
            }</Row>

            <Row>
               <Col>{[

                  ['button', '_submit', '', {
                     type: 'submit',
                     className: !formIsValid ? 'can-not-submit' : '',
                     nolabel: true
                  }, 'Bli medlem'],

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