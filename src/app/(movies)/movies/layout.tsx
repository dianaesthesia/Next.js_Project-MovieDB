import React from 'react';
import {Metadata} from "next";

import styles from './layout.module.css';

export const metadata: Metadata = {
    'title': 'MoviesListLayout',
    'description': 'MoviesListLayout'
};

type Props = { children: React.ReactNode };

const MoviesListLayout = ({children}: Props) => {
    return (
        <div className={styles.MoviesListPage}>
            {children}
        </div>
    );
};

export default MoviesListLayout;