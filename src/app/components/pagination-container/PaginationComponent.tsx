'use client';
import React, {FC} from 'react';
import {Pagination} from "@mui/material";
import {usePathname, useSearchParams, useRouter} from 'next/navigation';

interface IProps {
    currentPage: string,
    totalPages: number
}

const PaginationComponent: FC<IProps> = ({currentPage, totalPages}) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const {replace} = useRouter();


    const clickHandler = (event: React.ChangeEvent<unknown>, selectedPage: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', selectedPage.toString());

        replace(`${pathname}?${params}`);
    }

    return (
        <div>
            <Pagination count={totalPages > 500 ? 500 : totalPages} page={+currentPage} size={"large"}
                        onChange={clickHandler}/>
        </div>
    );
};
export default PaginationComponent;