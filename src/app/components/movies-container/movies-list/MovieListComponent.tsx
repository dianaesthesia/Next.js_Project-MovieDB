import React, {FC} from 'react';

import {IMovieListModel} from "@/app/models/IMovieListModel";
import {imageBaseUrl} from "@/app/constants/urls";
import styles from './MovieListComponent.module.css'

interface IProps {
    movie: IMovieListModel
}

const MovieListComponent: FC<IProps> = ({movie: {original_title, poster_path, release_date, vote_average}}) => {
    return (
        <div>
            <img src={imageBaseUrl + poster_path} alt={original_title} width={200} height={300}/>
            <h4 className={styles.Title}>{original_title}</h4>
            <div className={styles.Release_date_and_rating}>
                <div className={styles.RatingStar}>
                    <img src={'https://img.icons8.com/?size=100&id=XBMnwwJYQvfN&format=png&color=000000'}
                         alt={'rating-star'} width={20} height={20}/>
                    <p>{vote_average}</p>
                </div>
                <div className={styles.Release_date}>
                    <p className={styles.Release_date_line}>|</p>
                    <p>{release_date}</p>
                </div>
            </div>

        </div>
    );
};

export default MovieListComponent;