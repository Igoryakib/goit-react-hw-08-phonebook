import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import styles from "./LoginPage.module.css";
import { connect } from "react-redux";
import { loginProfile } from "../../redux/authurization/auth-operations";
import { getError } from "../../redux/authurization/auth-selectors";
import HomePageStyles from '../HomePage/HomePage.module.css';


const LoginPage = ({loginUser, error}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitForm = (event) => {
    event.preventDefault();
    const userForm = {
      email,
      password,
    };
    loginUser(userForm);
    setEmail("");
    setPassword("");
  };
  return (
    <section>
      <div className={styles.loginPage}>
        <form onSubmit={onSubmitForm} className={styles.formLogin}>
          <TextField
            margin="normal"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            fullWidth
            id="email"
            label="email"
            variant="outlined"
            type="email"
          />
          <TextField
            margin="normal"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            fullWidth
            id="password"
            label="password"
            variant="outlined"
            type="password"
          />
          <Button type="submit" color="inherit" variant="contained">
            <span className={styles.btnText}>Login</span>
          </Button>
        </form>
      </div>
      {error && <h2 className={HomePageStyles.subtitle}>Invalid password or email :(, please try again</h2>}
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  loginUser: (credentials) => dispatch(loginProfile(credentials))
});

const mapStateToProps = state => ({
  error: getError(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
