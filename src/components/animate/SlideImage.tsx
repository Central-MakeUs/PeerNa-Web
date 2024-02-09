import { motion } from 'framer-motion';

export default function SlideImage({ images }: { images: string[] }) {
  const duration = 6;
  const doubledImages = [...images, ...images];

  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: `-100%` }}
        transition={{
          x: {
            type: 'linear',
            ease: 'linear',
            duration: duration,
            repeat: Infinity,
          },
        }}
      >
        {doubledImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-[33%] h-auto inline-block mr-4"
          />
        ))}
      </motion.div>
    </div>
  );
}
