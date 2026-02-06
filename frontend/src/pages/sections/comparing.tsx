export default function ComparingSection() {
  return (
    <section className="bg-light py-24">
        <motion.div
    variants={priceTagVariants}
    initial="hidden"
    animate="visible"
    transition={{ delay: 1.2 }}
    className="hidden 2xl:flex absolute top-20 -left-28 cursor-pointer"
    >
    <motion.div
    animate={{
        x: [0, 12, 0, -12, 0],
        y: [-12, 0, 12, 0, -12],
    }}
    transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
    }}
    className="relative flex items-center"
    >
    <div className="bg-dark rounded-xl px-6 py-2 shadow-lg">
        <span className="text-light">Starting from AED 2.4M</span>
    </div>

    {/* Pointer (fixed relative position) */}
    <div className="absolute -right-6 -bottom-8">
        <MousePointer2
        className="scale-x-[-1] mb-16"
        fill="currentColor"
        stroke="currentColor"
        />
    </div>
    </motion.div>
</motion.div>

<motion.div
    variants={priceTagVariants}
    initial="hidden"
    animate="visible"
    transition={{ delay: 1.2 }}
    className="2xl:hidden flex absolute left-4 items-center justify-center cursor-pointer"
>
        <motion.div
    animate={{
        x: [0, -3, 0],
        y: [0, 1, 0],
    }}
    transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
    }}
    >
    <div className="bg-dark rounded-xl px-6 py-2 shadow-lg">
    <span className="text-light">Starting from $6M</span>
    </div>

    <MousePointer2 className="scale-x-[-1] mb-10" fill="currentColor" stroke="currentColor" />
    </motion.div>
</motion.div>


    </section>
  );
}