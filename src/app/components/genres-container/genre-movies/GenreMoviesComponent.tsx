import React, {FC} from 'react';
import Link from "next/link";

import {movieApiService} from "@/app/services/movie.api.service";
import MovieListComponent from "@/app/components/movies-container/movies-list/MovieListComponent";
import styles from "@/app/components/movies-container/movies-list/MoviesListComponent.module.css";
import PaginationComponent from "@/app/components/pagination-container/PaginationComponent";

interface IProps {
    genreId: string,
    currentPage: string
}

const GenreMoviesComponent: FC<IProps> = async ({genreId, currentPage}) => {
    const moviesWithGenreId = await movieApiService.getByGenreId(currentPage, genreId);

    return (
        <div>
            {moviesWithGenreId.results.map(movieWithGenreId =>
                <Link href={`/movies/${movieWithGenreId.id}`} key={movieWithGenreId.id}>
                    <MovieListComponent movie={movieWithGenreId}/>
                </Link>)}
            <div className={styles.Pagination}>
                <PaginationComponent currentPage={currentPage} totalPages={moviesWithGenreId.total_pages}/>
            </div>
        </div>
    );
};

export default GenreMoviesComponent;