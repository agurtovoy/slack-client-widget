import React from 'react';
import styles from './presence-icon.css';

export default ( { status } ) => <div className={styles[status]} />;
