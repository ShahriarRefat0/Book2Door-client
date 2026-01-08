import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedNumber = ({ value }) => {
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  useEffect(() => {
    if (!inView || hasAnimated.current) return;

    hasAnimated.current = true;

    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplay(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [inView, value]);

  return (
    <h3
      ref={ref}
      className="text-2xl md:text-3xl font-bold"
    >
      {display}
      {value > 1000 && "+"}
    </h3>
  );
};

export default AnimatedNumber;
