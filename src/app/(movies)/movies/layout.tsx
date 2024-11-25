import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    'title': 'MoviesListLayout',
    'description': 'MoviesListLayout'
};

type Props = { children: React.ReactNode };

const MoviesListLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MoviesListLayout;