"use client";
import { motion } from "framer-motion";
import { features } from "../constants";

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-muted/20 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Magical </span>
            <span className="bg-gradient-primary bg-clip-text! text-transparent">
              Features
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your photos with cutting-edge AI technology. Each feature
            is designed to give you professional results in seconds, not hours.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {features?.slice(0, 3).map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

function FeatureCard({ feature, index }: { feature: any; index: number }) {
  const { icon: Icon, title, description, gradient, delay } = feature;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group"
    >
      <div className="h-full glass rounded-2xl p-8 border border-card-border hover:border-primary/30 transition-all duration-300 shadow-glow-subtle hover:shadow-glow-primary">
        <div className="relative mb-6">
          <div
            className={`w-16 h-16 rounded-2xl bg-linear-to-br ${gradient} p-4 group-hover:animate-glow-pulse`}
          >
            <Icon className="w-full h-full text-white" />
          </div>
          <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-linear-to-br from-primary/20 to-secondary/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
        </div>

        <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">{description}</p>

        <div className="mt-6 pt-6 border-t border-card-border">
          <div className="flex items-center space-x-2 text-sm text-primary">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-medium">SnapMagic AI Powered</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Features;
