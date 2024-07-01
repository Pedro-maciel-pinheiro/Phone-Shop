// import { useInView } from "react-intersection-observer";

// export const { ref, inView } = useInView({
//   triggerOnce: true,
// });



// <motion.div
// key={item._id}
// ref={ref}
// initial={{ opacity: 0, y: 20 }}
// animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
// transition={{ delay: index * animationDelay, duration: 0.5 }}
// >
// {/* Product card content */}
// </motion.div>


function getTransitionProps(delay: number) {
  return {
    transition: {
      delay: delay,
      duration: 0.5, // Increase duration for a slower transition
      type: "spring",
      stiffness: 30, // Lower stiffness for a smoother, less rigid spring
      damping: 20, // Increase damping to reduce oscillation
      mass: 0.5, // Adjust mass to control the inertia of the spring
    },
  };
}


export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      ...getTransitionProps(delay),
    },
  };
}


export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      ...getTransitionProps(delay),
    },
  };
}


export function slideInFromTop(delay: number) {
  return {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      ...getTransitionProps(delay),
    },
  };
}


export function slideInFromBottom(delay: number) {
  return {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      ...getTransitionProps(delay),
    },
  };
}


export function fadeIn(delay: number) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      ...getTransitionProps(delay),
    },
  };
}
