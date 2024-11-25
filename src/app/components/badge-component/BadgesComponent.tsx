import React, {FC} from 'react';

import {movieApiService} from "@/app/services/movie.api.service";
import BadgeComponent from "@/app/components/badge-component/BadgeComponent";
import styles from './BadgesComponent.module.css';

interface IProps {
    id: number
}

const BadgesComponent: FC<IProps> = async ({id}) => {
    const {genres} = await movieApiService.getById(id.toString());

    return (
        <div className={styles.Badges}>
            {genres.map(genre => <BadgeComponent key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default BadgesComponent;