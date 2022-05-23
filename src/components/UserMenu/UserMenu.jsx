import React from "react";
import { Avatar } from "@mui/material";
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { getUserName } from "../../redux/authurization/auth-selectors";
import { logoutProfile } from "../../redux/authurization/auth-operations";

import styles from './UserMenu.module.css';

const UserMenu = ({name, img, onDelete}) => {
    console.log(name)
    return(
        <div className={styles.content}>
        <div className={styles.wrapperProfile}>
            <Avatar alt={name} src={img}/>
            <h2 className={styles.title}>{name}</h2>
            </div>
            <Button onClick={onDelete} color="inherit" variant="contained"><span className={styles.btnText}>Logout</span></Button>
        </div>
    );
};

UserMenu.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string,
};

const mapStateToProps = state => ({
    name: getUserName(state)
});

const mapDispatchToProps = dispatch => ({
    onDelete: () => dispatch(logoutProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);