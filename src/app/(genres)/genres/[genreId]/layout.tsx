import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "GenreMoviesLayout",
    description: "GenreMoviesLayout",
};

type Props = { children: React.ReactNode };

const GenreMoviesLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default GenreMoviesLayout;