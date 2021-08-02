import React,{ Component }from "react";
import { Container } from "./Wrapper.styled";
import { Section } from '../Section/Section'
import { ContactForm } from '../ContactForm/ContactForm'
import { Filter } from "../Filter/Filter";
import ContactList from '../ContactList/ContactList'
import { v4 as uuidv4 } from 'uuid';
import contacts from '../../contacts.json'

class Wrapper extends Component {
    state = {
        contacts: contacts,
        filter: ''
    };

    formSubmitHandler = ({ name, number }) => {
        console.log({ name, number })
        
        const addContact = {
            id: uuidv4(),
            name,
            number,
        };

        this.state.contacts.find(
            contact => contact.name.toLowerCase() === addContact.name.toLowerCase(),
        )
            ? alert(`${name} is already in contacts`)
            : this.setState(({ contacts }) => ({
                contacts: [addContact, ...contacts],
            }));
    };

    deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

    changeFilterInput = e => {
    this.setState({ filter: e.target.value });
    };

    getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
    
    render() {
        const visibleContacts = this.getVisibleContacts();
        const { filter } = this.state;
        
        return (
        <Container>
            <Section title={"Phonebook"}>
                    <ContactForm
                    onSubmit={this.formSubmitHandler} />
            </Section>
            
            <Section title={"Contacts"}>
                    <Filter
                        value={filter}
                        onChangeFilterInput={this.changeFilterInput}
                    />
                    <ContactList contacts={visibleContacts}
        //   contacts={this.onFilteredContacts()}
            onDelete={this.deleteContact}
        />  
            </Section>
        </Container>
        )
    }
 }
export default Wrapper;