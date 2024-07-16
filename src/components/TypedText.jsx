import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Software Engineer'],
      typeSpeed: 70,
      backSpeed: 50,
      smartBackspace: false,
      backDelay: 2000,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="typed" ref={typedElement}></span>;

  
};

export default TypedText;
