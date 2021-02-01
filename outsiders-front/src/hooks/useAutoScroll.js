import { useEffect, useRef } from 'react';

/**
 * -- useAutoScroll --
 * Smoothly scroll to a target
 * 
 * @param {Array} constraints - a list of data constraints for the scroll effet (default: [])
 * @return {React.ref}
 */
const useAutoScroll = (constraints = [], {smooth = true} = {}) => {
  const target = useRef();
  
  useEffect(
    () => {
      let options = {}
      if (smooth) options.behavior = 'smooth'
      target.current.scrollIntoView(options);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    constraints
  );

  return target;
};

export default useAutoScroll;