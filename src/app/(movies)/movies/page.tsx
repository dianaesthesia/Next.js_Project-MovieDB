import React from 'react';

import MoviesListComponent from "@/app/components/movies-container/movies-list/MoviesListComponent";
// import styles from './page.module.css';

interface IProps {
    searchParams?: Promise<{
        page?: string
        query?: string
    }>
}

const MoviesListPage = async (props: IProps) => {
    const searchParams = await props.searchParams;
    const currentPage = searchParams?.page || '1';
    const query = searchParams?.query

    return (
        <div>
            <MoviesListComponent currentPage={currentPage} query={query}/>
        </div>
    );
};

export default MoviesListPage;