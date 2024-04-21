import React, { useEffect, useRef, useState } from "react";

export default function Starfield(props) {
  const {
    speedFactor = 0.05,
    starCount = 1500,
    starSize = 1,
  } = props;
  const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color');
  const starColor1 = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
  const starColor2 = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
  const canvasRef = useRef(null);
  
  const mousePosition = useRef({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  let stars = [];

  const clear = (canvas, c) => {
    c.fillStyle = backgroundColor;
    c.fillRect(0, 0, canvas.width, canvas.height);
  };
  const makeStars = (count, canvas) => {
    const out = [];
    let color;
    for (let i = 0; i < count; i++) {
      if (Math.random() < 0.5) {
        color = starColor1;
      } else {
        color = starColor2;
      }
      const s = {
        starColor: color,
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
      };
      out.push(s);
    }

    return out;
  };

  const putPixel = (c,canvas, x, y, brightness, starColor) => {
/*     const grad= c.createLinearGradient(canvas.width/2,0,canvas.width/2,canvas.height);
    
    grad.addColorStop(0, starColor);
    grad.addColorStop(0.75, starColor);
    grad.addColorStop(1, "transparent");  */
/* grad.addColorStop(1, "transparent");  */
   /*  if(y > canvas.height-100) {
      c.fillStyle = grad;
      c.fillRect(x, y, starSize, starSize);
    }else{ */

    
    c.fillStyle = starColor;
    c.fillRect(x, y, starSize, starSize);
  /*   } */
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");
   

   /*  div.style.position = "absolute";
    div.style.left = 0;
    div.style.bottom = 0;
    div.style.zIndex = 1;
    div.style.width = canvas.width+"px";
    div.style.height = canvas.height/8+"px";
    div.style.background = "linear-gradient(0deg, rgba(24,24,24,1) 0%, rgba(24,24,24,1) 50%, rgba(0,212,255,0) 100%)";
    console.log(div); */
   
    stars = makeStars(starCount, canvas);

    const moveStars2 = (distance) => {
      const count = stars.length;
      
      for (let i = 0; i < count; i++) {
        const s = stars[i];
        s.z -= distance;
                while (s.z <= 1) {
                    s.z += 1000;
                }
        /* s.x += s.vx;
        s.y += s.vy; */
        /* let dx = s.x - mousePosition.current.x;
        let dy = s.y - mousePosition.current.y;
        let distanceToMouse = Math.sqrt(dx * dx + dy * dy);

        
        if (s.x >= divLeft-10 && s.x <= divRight+10 && s.y >= divTop-10 && s.y <= divBottom+10) {
            // Berechnung der Richtung, in die der Stern abgestoßen werden soll
            let angle = Math.atan2(s.y - divTop - divRect.height / 2, s.x - divLeft - divRect.width / 2);
            let force = 100; // Anpassen der Stärke des Abstoßungseffekts
            
            // Ändern der Geschwindigkeit basierend auf der Abstoßungskraft
            const vx = s.vx + Math.cos(angle) * force * speedFactor;
            const vy = s.vy + Math.sin(angle) * force * speedFactor;
            s.x += vx;
            s.y += vy;
        }
        if (s.x >= divLeft2-10 && s.x <= divRight2+10 && s.y >= divTop2-10 && s.y <= divBottom2+10) {
            // Berechnung der Richtung, in die der Stern abgestoßen werden soll
            let angle = Math.atan2(s.y - divTop2 - divRect2.height / 2, s.x - divLeft2 - divRect2.width / 2);
            let force = 100; // Anpassen der Stärke des Abstoßungseffekts
            
            // Ändern der Geschwindigkeit basierend auf der Abstoßungskraft
            const vx = s.vx + Math.cos(angle) * force * speedFactor;
            const vy = s.vy + Math.sin(angle) * force * speedFactor;
            s.x += vx;
            s.y += vy;
        }
        if (distanceToMouse < 50) {
          let angle = Math.atan2(dy, dx);
          let force = 100;
          const vx = s.vx + Math.cos(angle) * force * speedFactor;
          const vy = s.vy + Math.sin(angle) * force * speedFactor;
          s.x += vx;
          s.y += vy;
        }

        if (s.x < 0 || s.x > screenWidth) {
          s.vx *= -1;
        }
        if (s.y < 0 || s.y > screenHeight) {
          s.vy *= -1;
        } */
      
       
       
       /*  putPixel(c,canvas, s.x, s.y, 1, s.starColor); */

      }
    };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition.current.x = e.clientX - rect.left;
      mousePosition.current.y = e.clientY - rect.top;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      clear(canvas, c);
      stars = makeStars(starCount, canvas);
    };
    let prevTime;
    const init = (time) => {
      prevTime = time;
      requestAnimationFrame(animate);
    };
    const animate = (time) => {
      if (!isAnimating) return;

      clear(canvas, c);

      moveStars2(1);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      const count = stars.length;

      for (var i = 0; i < count; i++) {
        const star = stars[i];

        const x = cx + star.x / (star.z * 0.001);
        const y = cy + star.y / (star.z * 0.001);

        if (x < 0 || x >= canvas.width|| y < 0 || y >= canvas.height) {
          continue;
        }

        const d = star.z / 1000.0;
        const b = 1 - d * d;
        putPixel(c,canvas, x, y, b, star.starColor);
      }

      requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(init);
    setIsAnimating(true);
   /*  animate(); */

    return () => {
      setIsAnimating(false);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [backgroundColor, speedFactor, starCount, isAnimating]);

  return (
  
    <canvas
      ref={canvasRef}
      style={{
        padding: 0,
        margin: 0,
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
        opacity: 1,
        height: "100vh",
        pointerEvents: "none",
        mixBlendMode: "screen"
      }}
    />
  
  );
}
