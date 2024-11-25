import React from 'react';

import GenresListComponent from "@/app/components/genres-container/genres-list/GenresListComponent";
import styles from './page.module.css';

const GenresListPage = () => {
    return (
        <div className={styles.GenresListPage}>
            <GenresListComponent/>
        </div>
    );
};

export default GenresListPage;