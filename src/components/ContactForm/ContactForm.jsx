import React,{ Component }from "react";
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Button from "../Button/Button";
import {Input} from './ContactForm.styled'

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

     handleChange = e => {
        const {name,value}=e.currentTarget
        // console.log(e.currentTarget);
        // console.log(e.currentTarget.name);
        // console.log(e.currentTarget.value);
        this.setState({[name]:value})
    }

    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state)

        this.props.onSubmit(this.state);

        this.reset();
    };

    reset = () => {
        this.setState({name: '', number: ''})
    }

    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameInputId}>
                    Name<br />  <Input
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        onChange={this.handleChange}
                        id = {this.nameInputId}
                        placeholder="Enter LastName FirstName Patronymic"
                        required
                    />
                </label>
                       <br />     
                <label htmlFor={this.numberInputId}>
                    Number<br />  <Input
                        type="tel"
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        id={this.numberInputId}
                        placeholder="Enter Phone"
                        required
                    />
                </label>
                <br />
                <Button text={"Add Contact"} type="submit"/>
            </form>
        );
    }
}

ContactForm.PropsType = {
  onSubmit: PropTypes.func.isRequired,
};
    // handleNameChange = event => {
    //     console.log(event.currentTarget.value)
    //     this.setState({ name: event.currentTarget.value });
    // };
    
    // handleNumberChange = event => {
    //     this.setState({ number: event.currentTarget.value })
    // }