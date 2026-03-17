import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // 100 * 20ms = 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Name/Logo */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-gradient">
            Sarah Muyassarah
          </h1>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-64 h-[2px] bg-muted relative overflow-hidden rounded-full">
          {/* Progress Bar Fill */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]"
          />
        </div>

        {/* Percentage Text */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
        >
          Loading {progress}%
        </motion.span>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[100px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
