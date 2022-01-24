import React, { useState } from "react";
import { FiArrowUpCircle } from "react-icons/fi";
import { IconContext } from "react-icons";

export const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if( scrolled > 150 ){
            setVisible(true)
        }
        else if ( scrolled <= 150 ){
            setVisible(false)
        }

    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    window.addEventListener('scroll', toggleVisible)

    return (
        <>
            <IconContext.Provider value={{ className: "arrow"}}>
                <FiArrowUpCircle
                style={{display: visible ? 'inline' : 'none'}}
                onClick={ scrollToTop } />
            </IconContext.Provider>
        </>    
    )
};
