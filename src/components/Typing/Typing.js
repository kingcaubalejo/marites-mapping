import Typed from "typed.js";
import {useEffect, useRef} from "react";


import styles from "./Typing.module.scss";

const Typing = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Hi there, this is your map.", "Please click anywhere in the map to fly in to your location.", "Those markers are placed by the users via geolocation feature."],
            startDelay: 300,
            typeSpeed: 80,
            backSpeed: 80,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: "|"
        });

        return () => {
            typed.destroy();
        };
    }, []);



    return (
        <span className={styles.typing} ref={el}></span>
    );
}

export default Typing;