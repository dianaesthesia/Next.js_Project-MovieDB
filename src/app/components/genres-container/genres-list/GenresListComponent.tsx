import React, {FC} from 'react';

import {genreApiService} from "@/app/services/genre.api.service";
import Link from "next/link";
import GenreComponent from "@/app/components/genres-container/genres-list/GenreComponent";
import styles from './GenresListComponent.module.css';

const GenresListComponent: FC = async () => {
    const genres = await genreApiService.getAll();

    return (
        <div className={styles.genres_list}>
            {genres.genres.map(genre => <div key={genre.id} className={styles.genre}>
                <Link href={`/genres/${genre.id}`}><GenreComponent genre={genre}/></Link>
            </div>)}
        </div>
    );
};

export default GenresListComponent;