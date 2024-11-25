import React, {FC} from 'react';

import {IGenreModel} from "@/app/models/IGenreModel";
import styles from './GenreComponent.module.css';

interface IProps {
    genre: IGenreModel
}

const GenreComponent: FC<IProps> = ({genre: {name}}) => {
    return (
        <div className={styles.genre_button}>
            <div className={styles.genre_button_text}>
                <p>{name}</p>
            </div>
        </div>
    );
};

export default GenreComponent;