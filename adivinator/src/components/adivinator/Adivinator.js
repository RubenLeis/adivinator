import React from 'react';
import './adivinator.css';

class Adivinator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userValue: '',
            successText:''
        }
        //Recordemos que es necesario hacer el binding de los eventos
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    /* 
    Reseteamos el valor del mensaje y obtenemos el valor del usuario del input del formulario cuando se
    produce un cambio en dicho tag
    */
    onChange(e) {
        
        this.setState({ userValue: e.target.value,
                        successText:'' })
        
    }

    handleSubmit(e) {
        //Prevenimos la recarga automatica al realizar submit del formulario
        e.preventDefault();
        if (this.state.userValue.length === 0) {
            return;
        }
        //Generamos el valor random y lo comparamos con el establecido por el usuario
        let randomValue = this.randomNumber(0,5);
        let message = ''
        //console.log('userValue:'+this.state.userValue);
        //console.log('randomValue:'+randomValue)
        if (parseInt(this.state.userValue) === randomValue) {
            message="Enhorabuena! Has acertado"
        } else {
            message="Sigue intentándolo. El valor generado ha sido: " + randomValue;
        }
        //Gurdamos el mensaje generado en el state
        this.setState({ successText: message})

    }

    /**
     * inputAdivinator asociamos el evento onChange para guardar la informacion en el state
     * outputAdivinator asociamos el valor this.state.success para refrescarlo despues de realizar el envio
     * 
     * @returns 
     */
    render() {
        return (
            <div className='mainLayout'>
                <form onSubmit={this.handleSubmit}>
                    <img id="imagenAdivino" alt="imagen adivino"  className='adivinoImage' src={require('./rappel.jpg')} />
                    <div>
                    <input id="inputAdivinator" className='inputAdivinator' placeholder='¿Que número estoy pensando? [1-5]' onChange={this.onChange} value={this.state.userValue}></input>
                    <button>Enviar</button>
                    </div>
                    
                    <div>
                        <textarea id="outputAdivinator" className="outputAdivinator" name="output" onChange={this.onChange} value={this.state.successText}></textarea>
                    </div>
                </form>
            </div>
        );

    }

    randomNumber(min, max) { 
        return Math.floor(Math.random() * (max - min) + min);
    }
}



export default Adivinator; // Para poder usarlo desde otro fichero
