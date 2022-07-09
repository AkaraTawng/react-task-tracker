import Button from './Button.js';
const Header = ({title}) => {
    return (
        <header className='header'> 
            <h1>{title}</h1>
            <Button color='green' text='Add'/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
};

export default Header;