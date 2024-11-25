import React from 'react';
import {Metadata} from "next";

import styles from './layout.module.css';

export const metadata: Metadata = {
    'title': 'MovieCardLayout',
    'description': 'MovieCardLayout'
};

type Props = { children: React.ReactNode };

const MovieCardLayout = ({children}: Props) => {
    return (
        <div className={styles.MovieCardLayout}>
            {children}
        </div>
    );
};

export default MovieCardLayout;