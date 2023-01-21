import React, { useState } from 'react'
import styles from './style.module.css'

function BorderedForm() {
    const [switchForm, setSwitchForm] = useState('signup')
    return (
        <div className={styles.container}>

            {
                (switchForm === "signup") ?
                    (<div className={`${styles.form} ${styles.signup}`}>
                        <h2>Sign Up</h2>
                        <div className={styles.inputBox}>
                            <input type='text' required="required"></input>
                            <i className="fa-regular fa-user"></i>
                            <span>username</span>
                        </div>
                        <div className={styles.inputBox}>
                            <input type='text' required="required"></input>
                            <i className="fa-regular fa-envelope"></i>
                            <span>email address</span>
                        </div>
                        <div className={styles.inputBox}>
                            <input type='password' required="required"></input>
                            <i className="fa-solid fa-lock"></i>
                            <span>password</span>
                        </div>
                        <div className={styles.inputBox}>
                            <input type='password' required="required"></input>
                            <i className="fa-solid fa-lock"></i>
                            <span>confirm password</span>
                        </div>
                        <div className={styles.inputBox}>
                            <input type='submit' value='Create Account'></input>
                        </div>
                        <p>Already a member ?
                            <a href='#' onClick={() => setSwitchForm('login')} className={styles.login}>Login in</a>
                        </p>
                    </div>) :
                    (
                        <div className={`${styles.form} ${styles.signin}`}>
                            <h2>Log In</h2>
                            <div className={styles.inputBox}>
                                <input type='text' required="required"></input>
                                <i className="fa-regular fa-user"></i>
                                <span>username</span>
                            </div>
                            <div className={styles.inputBox}>
                                <input type='password' required="required"></input>
                                <i className="fa-solid fa-lock"></i>
                                <span>password</span>
                            </div>
                            <div className={styles.inputBox}>
                                <input type='submit' value='Login'></input>
                            </div>
                            <p>Not Registered ?
                                <a href='#' className={styles.create} onClick={() => setSwitchForm('signup')} > Create an account</a>
                            </p>
                        </div>
                    )
            }



        </div >
    )
}

export default BorderedForm
