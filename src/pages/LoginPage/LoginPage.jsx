import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import styles from "./LoginPage.module.css";
import { connect } from "react-redux";
import { loginProfile } from "../../redux/authurization/auth-operations";

const LoginPage = ({loginUser}) => {
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
      <section className={styles.loginPage}>
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
            <span className={styles.btnText}>Register</span>
          </Button>
        </form>
      </section>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  loginUser: (credentials) => dispatch(loginProfile(credentials))
});

export default connect(null, mapDispatchToProps)(LoginPage);
