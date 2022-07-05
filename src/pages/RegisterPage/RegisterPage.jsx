import React, {useState} from "react";
import { connect } from "react-redux";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { registerProfile } from "../../redux/authurization/auth-operations";

import styles from './RegisterPage.module.css';
import { getError } from "../../redux/authurization/auth-selectors";
import HomePageStyles from '../HomePage/HomePage.module.css';

const RegisterPage = ({registerUser, error}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const onChangeInput = (fnc, event) => {
    //     return fnc(event);
    // };
    const onSubmitForm = (event) => {
        event.preventDefault();
        const userForm = {
            name,
            email,
            password
        }
        registerUser(userForm);
        setName('');
        setEmail('');
        setPassword('');
    };
    return(
        <section className={styles.RegisterPage}>
        <form onSubmit={onSubmitForm} className={styles.formRegister}>
        <TextField margin="normal" value={name} onChange={(event) => setName(event.target.value)} fullWidth id="name" label="name" variant="outlined" type='text'/>
        <TextField margin="normal" value={email} onChange={(event) => setEmail(event.target.value)} fullWidth id="email" label="email" variant="outlined" type='email'/>
        <TextField margin="normal" value={password} onChange={(event) => setPassword(event.target.value)} fullWidth id="password" label="password" variant="outlined" type='password'/>
        <Button type="submit" color="inherit" variant="contained"><span className={styles.btnText}>Register</span></Button>
        </form>
        {error && <h2 className={HomePageStyles.subtitle}>Oops something went wrong :(, please try again</h2>}
        </section>
    );
};

const mapDispatchToProps = dispatch => ({
    registerUser: (credentials) => dispatch(registerProfile(credentials)) ,
});

const mapStateToProps = state => ({
    error: getError(state),
  });

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);