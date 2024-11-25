import React from 'react';

import MovieCardComponent from "@/app/components/movies-container/movie-card/MovieCardComponent";
import styles from './page.module.css';

interface IProps {
    params: Promise<{ id: string }>
}

const MovieCardPage = async ({params}: IProps) => {
    const {id} = await params;

    return (
        <div className={styles.MovieCardPage}>
            <MovieCardComponent id={id}/>
        </div>
    );
};

export default MovieCardPage;