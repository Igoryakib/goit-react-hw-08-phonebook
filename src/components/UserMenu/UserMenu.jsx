import React from "react";
import { Avatar } from "@mui/material";
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

import styles from './UserMenu.module.css';

const UserMenu = ({name, img}) => {
    return(
        <div className={styles.content}>
        <div className={styles.wrapperProfile}>
            <Avatar alt={name} src={img}/>
            <h2 className={styles.title}>{name}</h2>
            </div>
            <Button color="inherit" variant="contained"><span className={styles.btnText}>Logout</span></Button>
        </div>
    );
};

export default UserMenu;