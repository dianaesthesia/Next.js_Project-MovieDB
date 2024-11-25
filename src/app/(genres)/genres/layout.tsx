import React from 'react';
import {Metadata} from "next";

import styles from './layout.module.css';

export const metadata: Metadata = {
    'title': 'GenresListLayout',
    'description': 'GenresListLayout'
};

type Props = { children: React.ReactNode };

const GenresListLayout = ({children}: Props) => {
    return (
        <div className={styles.GenresListLayout}>
            {children}
        </div>
    );
};

export default GenresListLayout;