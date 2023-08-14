import { useState, useEffect, SetStateAction, Dispatch } from 'react';

export const useOnScreen = (
  options?: IntersectionObserverInit
): [boolean, Dispatch<SetStateAction<Element | null>>] => {
  const [ref, setRef] = useState<Element | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);
    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options]);

  return [visible, setRef];
};
