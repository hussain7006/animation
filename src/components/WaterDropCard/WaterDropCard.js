import React from 'react'
import styles from './WaterDropCard.module.css'

function WaterDropCard() {
    return (
        <div className={styles.container}>

            <div className={styles.drop} style={{ '--clr': '#ff0f5b' }}>
                <div className={styles.content}>
                    <h2>01</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Officia, commodi.
                    </p>
                    <a href='#'>Read More</a>
                </div>
            </div>
            <div className={styles.drop} style={{ '--clr': '#be01fe' }}>
                <div className={styles.content}>
                    <h2>02</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Officia, commodi.
                    </p>
                    <a href='#'>Read More</a>
                </div>
            </div>
            <div className={styles.drop} style={{ '--clr': '#01b4ff' }}>
                <div className={styles.content}>
                    <h2>03</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Officia, commodi.
                    </p>
                    <a href='#'>Read More</a>
                </div>
            </div>

        </div>
    )
}

export default WaterDropCard
