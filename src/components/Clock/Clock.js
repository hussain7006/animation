import React, { useEffect, useState } from 'react'
import './clock.css'

function Clock() {

    const [rhr, setRhr] = useState('')
    const [rmn, setRmn] = useState('')
    const [rsc, setRsc] = useState('')


    useEffect(() => {
        setInterval(() => {

            let day = new Date()
            let hr = day.getHours() * 30
            let mn = day.getMinutes() * 6
            let sc = day.getSeconds() * 6
            setRhr(hr)
            setRmn(mn)
            setRsc(sc)
        });
    }, [])

    return (
        <div className='body'>
            <div className='clock'>
                <div className='numbers'>
                    <span style={{ "--i": 0 }}><b>12</b></span>
                    <span style={{ "--i": 0.333 }}><b>1</b></span>
                    <span style={{ "--i": 0.666 }}><b>2</b></span>
                    <span style={{ "--i": 1 }}><b>3</b></span>
                    <span style={{ "--i": 1.333 }}><b>4</b></span>
                    <span style={{ "--i": 1.666 }}><b>5</b></span>
                    <span style={{ "--i": 2 }}><b>6</b></span>
                    <span style={{ "--i": 2.333 }}><b>7</b></span>
                    <span style={{ "--i": 2.666 }}><b>8</b></span>
                    <span style={{ "--i": 3 }}><b>9</b></span>
                    <span style={{ "--i": 3.333 }}><b>10</b></span>
                    <span style={{ "--i": 3.666 }}><b>11</b></span>
                    <div className='circle' id='hr' style={{ transform: `rotateZ(${rhr + (rmn / 12)}deg)` }}><i></i></div>
                    <div className='circle' id='mn' style={{ transform: `rotateZ(${rmn}deg)` }}><i></i></div>
                    <div className='circle' id='sc' style={{ transform: `rotateZ(${rsc}deg)` }}><i></i></div>
                </div>
            </div>
        </div>
    )
}

export default Clock
