import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getRandomInViewAnimation } from "@/utils/animations";

const steps = [
  { step: "01", title: "Capture", desc: "Advanced multi-camera workflows capturing hundreds to thousands of images from all angles." },
  { step: "02", title: "Reconstruction", desc: "Gaussian Splatting algorithms process raw data into photorealistic 3D point clouds." },
  { step: "03", title: "Optimization", desc: "Real-time engine optimization balancing visual fidelity with performance requirements." },
  { step: "04", title: "Delivery", desc: "Production-ready assets for web, engines, VFX pipelines, or custom integrations." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Technology
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground max-w-xl">
            Scalable Environments That Balance Realism and Performance
          </h2>
          <p className="text-muted-foreground font-light mt-4 max-w-2xl">
            Our pipeline combines advanced capture workflows, Gaussian Splatting reconstruction and real-time engine optimization. The result: scalable digital environments that balance realism and performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="relative"
            >
              <p className="font-serif text-5xl text-primary/15 mb-4">{item.step}</p>
              <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8">
                  <svg width="32" height="8" viewBox="0 0 32 8" className="text-primary/30">
                    <path d="M0 4h28M24 0l4 4-4 4" stroke="currentColor" strokeWidth="1" fill="none" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Full-width video placeholder */}
        <motion.div
          {...getRandomInViewAnimation(isInView, 0.6)}
          className="mt-20"
        >
          <div className="aspect-[21/9] media-placeholder rounded-sm flex items-center justify-center">
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-full border-2 border-primary/30 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary ml-1">
                  <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                </svg>
              </div>
              <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                Showreel · Gaussian Splatting in Aktion
              </p>
              <p className="text-xs text-muted-foreground/50 mt-1">
                Video Platzhalter · 21:9
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
