import React, {FC} from 'react';

import {movieApiService} from "@/app/services/movie.api.service";
import {imageBaseUrl} from "@/app/constants/urls";
import StarsRatingComponent from "@/app/components/rating-container/StarsRatingComponent";
import styles from './MovieCardComponent.module.css';

interface IProps {
    id: string
}

const MovieCardComponent: FC<IProps> = async ({id}) => {
    const movie = await movieApiService.getById(id);
    const {original_title, overview, poster_path, release_date, runtime} = movie;

    return (
        <div className={styles.MovieCard}>
            <div className={styles.img_with_paragraph}>
                <img src={imageBaseUrl + poster_path} alt={original_title} width={308} height={462}/>
                <div className={styles.paragraph}>
                    <h1>{original_title}</h1>
                    <StarsRatingComponent/>
                    <h3>Released:</h3>
                    <p>{release_date}</p>
                    <h3>Runtime:</h3>
                    <p>{runtime}</p>
                </div>
            </div>
            <div className={styles.overview}>
                <h3>Overview:</h3>
                <p>{overview}</p>
            </div>
        </div>
    );
};

export default MovieCardComponent;