import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LogInForm extends Component {
    render() {
        return( 
            <form id="form">
                    <p className="my-2" >Ingresa tu usuario</p>
                    <input type="text"/>
                    <p className="my-2" >Contraseña</p>
                    <input type="password"/>
                    <br/>
                    <button id="btnForm" type="submit" >Entrar</button>
                    <div id="links">
                        <a href="#" >Olvidaste tu contraseña</a>
                        <Link to="../pages/SignUp"> Registrate aquí</Link>
                    </div>
            </form>
        )
    }
}

export default LogInForm