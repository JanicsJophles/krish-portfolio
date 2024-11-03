import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function LottieAnimation() {
  const container = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/person.json', // Updated to use the person.json file
    });

    return () => animation.destroy();
  }, []);

  return (
    <div 
      ref={container} 
      className="w-full h-full"
      style={{ maxWidth: '500px', margin: '0 auto' }}
    />
  );
} 