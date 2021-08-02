import PropTypes from 'prop-types';
import {Input} from './Filter.styled';

export const Filter = ({value, onChangeFilterInput}) => (
    <label htmlFor="">
        Find contacts by name<br /> 
        <Input
            type="text"
            name="filter"
            value={value}
            onChange={onChangeFilterInput}
        />
    </label>
)

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilterInput: PropTypes.func.isRequired,
};