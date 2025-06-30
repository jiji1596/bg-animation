import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export const StickmanShoot = () => {
  const leftLegRef = useRef(null);
  const rightLegRef = useRef(null);
  const bodyRef = useRef(null);
  const leftArmRef = useRef(null);
  const rightArmRef = useRef(null);
  const ballRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ paused: true });

    // 1. Bend knees and prep
    timeline.to(leftLegRef.current, {
      attr: { x2: 80, y2: 140 },
      duration: 0.3,
    });
    timeline.to(
      rightLegRef.current,
      { attr: { x2: 120, y2: 140 }, duration: 0.3 },
      "<"
    );
    timeline.to(bodyRef.current, { attr: { y2: 105 }, duration: 0.3 }, "<");

    // 2. Load arms up
    timeline.to(
      rightArmRef.current,
      { attr: { x2: 130, y2: 50 }, duration: 0.4 },
      "<"
    );
    timeline.to(
      leftArmRef.current,
      { attr: { x2: 90, y2: 50 }, duration: 0.4 },
      "<"
    );

    // 3. Jump and shoot
    timeline.to(
      [leftLegRef.current, rightLegRef.current, bodyRef.current],
      {
        attr: { y2: 95 },
        duration: 0.3,
      },
      "+=0.1"
    );

    timeline.to(
      ballRef.current,
      {
        motionPath: {
          path: [
            { x: 0, y: 0 },
            { x: 30, y: -50 },
            { x: 50, y: -100 },
          ],
          curviness: 1.5,
        },
        duration: 1,
        ease: "power2.out",
      },
      "<"
    );

    // 4. Follow-through hold
    timeline.to(
      rightArmRef.current,
      { attr: { x2: 140, y2: 30 }, duration: 0.2 },
      "<"
    );
    timeline.to(
      leftArmRef.current,
      { attr: { x2: 80, y2: 30 }, duration: 0.2 },
      "<"
    );

    const onScroll = () => {
      if (window.scrollY > 400) {
        timeline.play();
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <svg width="200" height="200" viewBox="0 0 200 200">
      <circle
        cx="100"
        cy="40"
        r="10"
        stroke="black"
        strokeWidth="2"
        fill="none"
      />
      <line
        ref={bodyRef}
        x1="100"
        y1="50"
        x2="100"
        y2="100"
        stroke="black"
        strokeWidth="2"
      />
      <line
        ref={leftArmRef}
        x1="100"
        y1="60"
        x2="80"
        y2="70"
        stroke="black"
        strokeWidth="2"
      />
      <line
        ref={rightArmRef}
        x1="100"
        y1="60"
        x2="120"
        y2="70"
        stroke="black"
        strokeWidth="2"
      />
      <line
        ref={leftLegRef}
        x1="100"
        y1="100"
        x2="85"
        y2="130"
        stroke="black"
        strokeWidth="2"
      />
      <line
        ref={rightLegRef}
        x1="100"
        y1="100"
        x2="115"
        y2="130"
        stroke="black"
        strokeWidth="2"
      />
      <circle
        ref={ballRef}
        cx="120"
        cy="70"
        r="5"
        fill="orange"
        stroke="black"
      />
    </svg>
  );
};
