import React from 'react';

import MovieCardComponent from "@/app/components/movies-container/movie-card/MovieCardComponent";

interface IProps {
    params: Promise<{ id: string }>
}

const MovieCardPage = async ({params}: IProps) => {
    const {id} = await params;

    return (
        <div>
            <MovieCardComponent id={id}/>
        </div>
    );
};

export default MovieCardPage;