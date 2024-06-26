// import { useInView } from "react-intersection-observer";

// export const { ref, inView } = useInView({
//   triggerOnce: true,
// });



function getTransitionProps(delay: number) {
  return {
    transition: {
      delay: delay,
      duration: 2,
      type: "spring",
      stiffness: 50,
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
