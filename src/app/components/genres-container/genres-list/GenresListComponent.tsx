import React, {FC} from 'react';

import {genreApiService} from "@/app/services/genre.api.service";
import Link from "next/link";
import GenreComponent from "@/app/components/genres-container/genres-list/GenreComponent";
// import styles from './GenresListComponent.module.css';

const GenresListComponent: FC = async () => {
    const genres = await genreApiService.getAll();

    return (
        <div>
            {genres.genres.map(genre => <Link href={`/genres/${genre.id}`} key={genre.id}>
                <GenreComponent genre={genre}/>
            </Link>)}
        </div>
    );
};

export default GenresListComponent;