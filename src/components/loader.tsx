import React, { useState, useEffect } from 'react';

import anime from 'animejs';
import Image from 'next/image';
import PropTypes from 'prop-types';
import IconLoader from './icon-loader';

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '#logo path',
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#icon',
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#icon',
        delay: 700,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '#logo',
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="loader fixed top-0 bottom-0 right-0 left-0 w-full h-full flex items-center justify-center bg-darkNavy z-50">
      <div className={`relative w-max max-w-[100px] duration-200 ${isMounted ? 'opacity-100' : 'opacity-0'} flex items-center justify-center`}>
        <IconLoader />
        <Image id="icon" src="/logo.svg" alt="logomarca ricardo paz dev" width={40} height={40} className=" absolute top-[30px] left-[30px] opacity-0"/>
      </div>
    </div>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;