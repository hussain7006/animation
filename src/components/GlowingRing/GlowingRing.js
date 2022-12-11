import React from 'react'
import styles from './GlowingRing.module.css'

function GlowingRing() {
    return (
        <div className={styles.main}>
            <div className={styles.loader}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default GlowingRing
