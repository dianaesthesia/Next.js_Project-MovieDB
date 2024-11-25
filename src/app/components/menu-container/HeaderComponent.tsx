import React, {FC} from 'react';
import Link from "next/link";

import styles from './HeaderComponent.module.css';
import Form from "next/form";

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
                <Form action={'/movies'}>
                    <input name="query"/>
                    <button type="submit">Search</button>
                </Form>
                <Link href={'/genres'}>Profile</Link>

            </div>
        </div>
    );
};

export default HeaderComponent;