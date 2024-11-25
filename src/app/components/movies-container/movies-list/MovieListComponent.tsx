import React, {FC} from 'react';

import {IMovieListModel} from "@/app/models/IMovieListModel";
import {imageBaseUrl} from "@/app/constants/urls";
import styles from './MovieListComponent.module.css'
import BadgesComponent from "@/app/components/badge-component/BadgesComponent";

interface IProps {
    movie: IMovieListModel
}

const MovieListComponent: FC<IProps> = async ({movie: {id, original_title, poster_path, vote_average}}) => {
    return (
        <div className={styles.MovieCardGeneral}>
            <img src={imageBaseUrl + poster_path} alt={original_title} width={200} height={300}/>
            <h4 className={styles.Title}>{original_title}</h4>
            <div className={styles.Release_date_and_rating}>
                <div className={styles.RatingStar}>
                    <img src={'https://img.icons8.com/?size=100&id=XBMnwwJYQvfN&format=png&color=000000'}
                         alt={'rating-star'} width={20} height={20}/>
                    <p>{vote_average} </p>
                </div>
                <BadgesComponent id={id}/>
            </div>

        </div>
    );
};

export default MovieListComponent;