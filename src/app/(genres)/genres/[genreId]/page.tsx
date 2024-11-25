import React from 'react';

import GenreMoviesComponent from "@/app/components/genres-container/genre-movies/GenreMoviesComponent";

interface IProps {
    params: Promise<{ genreId: string }>
    searchParams?: Promise<{ page?: string }>
}

const GenreMoviesPage = async (props: IProps) => {
    const {genreId} = await props.params;

    const searchParams = await props.searchParams;
    const currentPage = searchParams?.page || '1';

    return (
        <div>
            <GenreMoviesComponent genreId={genreId} currentPage={currentPage}/>
        </div>
    );
};

export default GenreMoviesPage;