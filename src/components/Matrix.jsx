import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import gradient from '../images/Gradient.png'

const renderMatrix = (ref) => {
    let canvas = ref.current;
    let context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight /2;

    const katakana =
        "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = [];

    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }

    const render = () => {
        const grd = context.createLinearGradient(canvas.width/2,-150, canvas.width/2, canvas.height);
        grd.addColorStop(0, "transparent");
        grd.addColorStop(1, "#181818");
        context.fillStyle = grd; 
        context.fillRect(0, 0, canvas.width, canvas.height);
        const grd2 = context.createLinearGradient(canvas.width/2,canvas.height, canvas.width/2, 0);
        grd2.addColorStop(0, "transparent");
        grd2.addColorStop(1, "yellow");
        context.fillStyle = grd2; 
        context.font = fontSize + "px monospace";

        for (let i = 0; i < rainDrops.length; i++) {
            // randomize the string of characters to render
            const text = alphabet.charAt(
                Math.floor(Math.random() * alphabet.length)
            );
            context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (
                rainDrops[i] * fontSize > canvas.height &&
                Math.random() > 0.975
            ) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };

    return () => {
        setInterval(render, 40);
    };
};

const Matrix = (props) => {
    const ref = useRef();
    const keyName = "mrl-" + props.key;
    const thisClassName = "mrl-container " + props.custom_class;
    useEffect(() => renderMatrix(ref));

    return (
        <React.Fragment>
            <canvas key={keyName} style={{backgroundColor:"transparent",zIndex:"-1"}}  ref={ref} />
        </React.Fragment>
    );
};

export default Matrix;