import React from 'react';

import styles from './page.module.css';
import FormComponent from "@/app/components/form-container/FormComponent";

const HomePage = () => {
    return (
        <div className={styles.welcome_page}>
            <FormComponent/>
        </div>
    );
};

export default HomePage;
