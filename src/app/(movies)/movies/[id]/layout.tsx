import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    'title': 'MovieCardLayout',
    'description': 'MovieCardLayout'
};

type Props = { children: React.ReactNode };

const MovieCardLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MovieCardLayout;