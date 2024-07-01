
import { useInView } from "react-intersection-observer";

export const useInViewHook = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return { ref, inView };
};