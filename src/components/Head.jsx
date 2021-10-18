import React,{ useState} from 'react';
import { Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

import classes from './Head.module.css'

const Head = (props) => {
    const [darkTheme, setDarkTheme] = useState(false);

    const changeThemeHandler = ()=> {
        setDarkTheme(!darkTheme);
        props.changeTheme(darkTheme);
    }

    return ( 
        
            <nav className={classes['main-head']}>
                <Container className="container d-flex justify-content-between align-items-center">
                    <h1 className={classes.title}>where in the world?</h1>
                    <p className={`mb-0 ${classes.themeBtn}`} onClick={changeThemeHandler}>
                        <FontAwesomeIcon icon={faMoon} />
                        <span className="font-weight-bold d-inline-block ml-2">Dark mode</span>
                    </p>
                </Container>
            </nav>
        
     );
}
 
export default Head;