import { motion } from 'framer-motion';

export default function SlideImage({ images }: { images: string[] }) {
  const transition = {
    repeat: Infinity,
    repeatType: 'loop' as const,
    duration: 30,
    ease: 'linear',
  };

  const animate = {
    x: [`0px`, `-${400 * images.length}px`],
  };

  return (
    <div style={{ overflow: 'hidden', width: '400px' }}>
      <motion.div
        style={{ display: 'flex', width: `calc(400px * ${images.length})` }}
        animate={animate}
        transition={transition}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            style={{ width: '200px', height: 'auto' }}
          />
        ))}
      </motion.div>
    </div>
  );
}
