import React, {FC} from 'react';
import Link from "next/link";

import styles from './HeaderComponent.module.css';

const HeaderComponent: FC = () => {
    return (
        <div className={styles.menu}>
            <div>
                <Link href={'/'}> <img src={'https://img.icons8.com/?size=100&id=68235&format=png&color=000000'}
                                       alt={'Home'} width={80} height={80}/>
                </Link>
            </div>
            <div className={styles.menu_navigation}>
                <Link href={'/movies'}>All Movies</Link>
                <Link href={'/genres'}>Genres</Link>
                <div className={styles.icon_user}>
                    <img src={'https://img.icons8.com/?size=100&id=81019&format=png&color=000000'} alt={'user_alien'} width={45} height={45}/>
                    <p>MyName</p>
                </div>
            </div>

        </div>
);
};

export default HeaderComponent;