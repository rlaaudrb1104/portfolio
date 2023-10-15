'use client'

import { Typewriter } from 'react-simple-typewriter';

import styles from './TopText.module.css';

export default function TopText_P() {
    return (
        <>
            <div className={styles.topTitleContainer}>
                <div className={styles.topTitle}>
                    <Typewriter
                        words={[`Ask me anything`]}
                        typeSpeed={100}
                    />
                </div>
            </div>
            <div className={styles.topTitleAdaptive}>
                <div className={styles.topTitle}>
                    <Typewriter
                        words={[`Ask`]}
                        typeSpeed={100}
                    />
                    <Typewriter
                        words={[`me`]}
                        typeSpeed={100}
                    />
                    <Typewriter
                        words={[`anything`]}
                        typeSpeed={100}
                    />
                </div>
            </div>
        </>
    )
}