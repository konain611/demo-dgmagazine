'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/carousel/1.png', '/carousel/2.png', '/carousel/3.png', '/carousel/4.png', '/carousel/5.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover rounded-md"
        width={1920}
        height={1080}
      />
    </div>
  );
}
