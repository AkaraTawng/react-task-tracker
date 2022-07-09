import PropTypes from 'prop-types';
import Button from './Button.js';

const Header = ({title}) => {

    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'> 
            <h1>{title}</h1>
            <Button 
            color='green'
            text='Add'
            OnClick={onClick}
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;