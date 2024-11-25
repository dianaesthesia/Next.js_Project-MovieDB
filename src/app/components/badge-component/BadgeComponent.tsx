import React, {FC} from 'react';

import {IGenreModel} from "@/app/models/IGenreModel";
import styles from './BadgeComponent.module.css';

interface IProps {
    genre: IGenreModel
}

const BadgeComponent: FC<IProps> = ({genre}) => {
    return (
        <div className={styles.Badge}>
            <p>{genre.name}</p>
        </div>
    );
};

export default BadgeComponent;