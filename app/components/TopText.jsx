'use client'

import { Typewriter } from 'react-simple-typewriter';

import styles from './TopText.module.css';

export default function TopText() {
    return (
        <>
            <div className={styles.topTitleContainer}>
                <div className={styles.topTitle}>
                    <Typewriter
                        words={[`Welcome my portfolio`]}
                        typeSpeed={100}
                    />
                </div>
            </div>
            <div className={styles.topTitleAdaptive}>
                <div className={styles.topTitle}>
                    <Typewriter
                        words={[`Welcome`]}
                        typeSpeed={100}
                    />
                    <Typewriter
                        words={[`My`]}
                        typeSpeed={100}
                    />
                    <Typewriter
                        words={[`Portfolio`]}
                        typeSpeed={100}
                    />
                </div>
            </div>
        </>
    )
}