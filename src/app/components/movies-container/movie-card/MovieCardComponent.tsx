import React, {FC} from 'react';

import {movieApiService} from "@/app/services/movie.api.service";
import {imageBaseUrl} from "@/app/constants/urls";
import StarsRatingComponent from "@/app/components/rating-container/StarsRatingComponent";

interface IProps {
    id: string
}

const MovieCardComponent: FC<IProps> = async ({id}) => {
    const movie = await movieApiService.getById(id);
    const {original_title, overview, poster_path, release_date, runtime} = movie;

    return (
        <div>
            <img src={imageBaseUrl + poster_path} alt={original_title} width={200} height={300}/>
            <div>
                <h5>{original_title}</h5>
                <StarsRatingComponent/>
                <p>Released: {release_date}</p>
                <p>Runtime: {runtime}</p>
            </div>
            <div>
                Overview: {overview}
            </div>
        </div>
    );
};

export default MovieCardComponent;