import React, { useState } from 'react';
import { Form, Col, InputGroup, Button  } from 'react-bootstrap';

function SignUpForm(props) {
    const [validated, setValidated] = useState(false);
    // const [ data, setData ] = useState({});
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity() === false) {
        // event.preventDefault();
        console.log("handlesubmit");
        event.stopPropagation();
      }
      setValidated(true);

      if (validated) {
          props.onClick()
      }

    };

    return (
        
        <div  className="container">
            <div className="row">
                <div id="SignUpForm" className="col-6 offset-3">
                    <Form noValidate validated={validated} onSubmit={handleSubmit} >
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Nombre"
                                onChange={props.onChange}
                                name="firstName"
                                value= {props.formValues.firstName}
                                // defaultValue="Mark"
                            />
                            <Form.Control.Feedback type="invalid">Ingresa tu nombre</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Apellido"
                                onChange={props.onChange}
                                name="lastName"
                                value= {props.formValues.lastName}
                                // defaultValue="Otto"
                            />
                            <Form.Control.Feedback type="invalid">Ingresa tu apellido</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Usuario</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                required
                                onChange={props.onChange}
                                name="userName"
                                value= {props.formValues.userName}
                                />
                                <Form.Control.Feedback type="invalid">
                                Por favor escoge un nombre de usuario.
                                </Form.Control.Feedback>
                                <Form.Control.Feedback >
                                !Perfecto, esta disponible!
                            </Form.Control.Feedback>
                            </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="@gmail.com" 
                                // defaultValue="@gmail.com" 
                                required 
                                onChange={props.onChange}
                                name="email"
                                value= {props.formValues.email}/>
                            <Form.Control.Feedback type="invalid">
                                Por favor Ingresa tu Correo Electrónico.
                            </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label>Pais</Form.Label>
                            <Form.Control type="text" placeholder="Pais" required onChange={props.onChange} name="country" value= {props.formValues.country} />
                            <Form.Control.Feedback type="invalid">
                                Por favor ingresa un Pais valido.
                            </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control type="text" placeholder="Ciudad" required onChange={props.onChange} name="city" value= {props.formValues.city}/>
                            <Form.Control.Feedback type="invalid">
                                Por favor ingresa una ciudad valida.
                            </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Check
                            required
                            label="Acepto los Terminos y Condiciones"
                            feedback="Tienes que aceptar para poder seguir."
                            />
                        </Form.Group>
                        <Button id="btnSignUp" type="submit"  >Crear</Button>
                        </Form>
                </div>
            </div>
        </div>
    );
}

export default SignUpForm
  
//   render(<SignUpForm />);