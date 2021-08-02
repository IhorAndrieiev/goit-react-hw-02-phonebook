import React from 'react';
import PropTypes from 'prop-types';
 //import contacts from '../../contacts.json';
 import Button from '../Button/Button'
 import{MdContactPhone, MdPhone} from 'react-icons/md'
import {Container, Menu, MenuItem, Text } from './ContactList.styled'
// const ContactList = ({contacts}) => (
// <ul>
//     {contacts.map(({ id, name, number }) => (
        
//         <li key={id}>
//           {/* <MdContactPhone/> */}
//           <p>
//             {name}:{number}
//           </p>
//           {/* <MdPhone/> */}
//         </li>
//       ))}
// </ul>
// );

function ContactList({contacts, onDelete}) {
    
    return (
        <Container>
        <Menu>
            {contacts.map(({id,name,number}) => (
                    <MenuItem key={id}>
                    <MdContactPhone />
                    <Text>{name} :</Text>
                    <MdPhone />
                    <Text>{number}</Text>
                    <Button text={"Delete"} type="button" onClick={() =>onDelete(id)}/>
                </MenuItem>
                
            ))}
                
        </Menu>
        </Container>
        
    )
}

ContactList.propTypes = {
  contacts: PropTypes.array,
   onDelete: PropTypes.func.isRequired,
};

export default ContactList;
    
