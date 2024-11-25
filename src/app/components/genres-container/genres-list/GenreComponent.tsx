import React, {FC} from 'react';

import {IGenreModel} from "@/app/models/IGenreModel";

// import styles from './GenreComponent.module.css';

interface IProps {
    genre: IGenreModel
}

const GenreComponent: FC<IProps> = ({genre: {name}}) => {
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default GenreComponent;