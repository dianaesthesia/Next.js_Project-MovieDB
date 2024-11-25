'use client';
import React, {useState} from 'react';
import {Box, Rating} from "@mui/material";
// import {Rating as ReactRating, RoundedStar} from '@smastrom/react-rating'
//
// const myStyles = {
//     itemShapes: RoundedStar,
//     activeFillColor: '#ffb700',
//     inactiveFillColor: '#fbf1a9'
// }
//
// const StarsRatingComponent = () => {
//     const [rating, setRating] = useState(3)
//
//     return (
//         <div>
//             <ReactRating style={{ maxWidth: 10 }} value={rating} onChange={setRating} orientation={"horizontal"} readOnly={true} items={10} itemStyles={myStyles}/>
//         </div>
//     );
// };
//
// export default StarsRatingComponent;

const StarsRatingComponent = () => {
    const [value, setValue] = useState<number | null>(0);
    return (
        <div>
            <Box sx={{ '& > legend': { mt: 2 } }}>
                {/*<Typography component="legend">Controlled</Typography>*/}
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                {/*<Typography component="legend">Uncontrolled</Typography>*/}
                {/*<Rating*/}
                {/*    name="simple-uncontrolled"*/}
                {/*    onChange={(event, newValue) => {*/}
                {/*        console.log(newValue);*/}
                {/*    }}*/}
                {/*    defaultValue={2}*/}
                {/*/>*/}
                {/*<Typography component="legend">Read only</Typography>*/}
                {/*<Rating name="read-only" value={value} readOnly />*/}
                {/*<Typography component="legend">Disabled</Typography>*/}
                {/*<Rating name="disabled" value={value} disabled />*/}
                {/*<Typography component="legend">No rating given</Typography>*/}
                {/*<Rating name="no-value" value={null} />*/}
            </Box>
        </div>
    );
};

export default StarsRatingComponent;
