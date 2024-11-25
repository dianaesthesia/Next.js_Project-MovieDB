import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    'title': 'GenresListLayout',
    'description': 'GenresListLayout'
};

type Props = { children: React.ReactNode };

const GenresListLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default GenresListLayout;