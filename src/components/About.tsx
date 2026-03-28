"use client";

import React, { useRef } from "react";
import { Code, Zap, MessageCircle, Palette, Sparkles, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@/assets/IMG-e6207925ce66c978c009ffb5391966a3-V.jpg";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const floatingSkills = [
  { icon: Palette, label: "Creativity" },
  { icon: Code, label: "React" },
  { icon: Zap, label: "Performance" },
  { icon: Layers, label: "Next.js" },
  { icon: Sparkles, label: "UI/UX" },
];

const strengths = [
  {
    icon: Palette,
    title: "Creative Design",
    description: "Bringing innovative and visually appealing designs to life with attention to detail and modern UI trends.",
  },
  {
    icon: Code,
    title: "Responsive Web",
    description: "Building adaptive interfaces that work seamlessly across all devices, ensuring a perfect mobile-first experience.",
  },
  {
    icon: Zap,
    title: "SEO & Speed",
    description: "Delivering high-performance applications with optimized code, fast loading times, and SEO best practices.",
  },
  {
    icon: MessageCircle,
    title: "Collaboration",
    description: "Clear and effective communication with teams and stakeholders to ensure project goals are met efficiently.",
  },
];

const About = () => {
  const ref = useRef(null);

  // Scroll animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 100, damping: 20 });

  return (
    <section
      ref={ref}
      id="about"
      className="section-padding bg-secondary/20 relative overflow-hidden"
      aria-label="About Avishek Rimal"
    >
      <div className="container-custom relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Avishek Rimal</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-4xl font-semibold">
              Professional Frontend Developer
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I'm <strong>Avishek Rimal</strong> , 
              a dedicated Frontend Developer focused on crafting modern,
              high-performance web experiences. My goal is to combine clean UI with smooth UX 
              to build products that stand out.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Based on my expertise in <span className="text-primary font-medium">React, Next.js, and TypeScript</span>, 
              I specialize in creating scalable web applications that are both visually stunning 
              and technically optimized for search engines and performance.
            </p>
          </motion.div>

          {/* RIGHT - 3D PROFILE */}
          <motion.div
            style={{
              rotateX: smoothRotateX,
              rotateY: smoothRotateY,
              scale,
              transformPerspective: 1200,
            }}
            className="relative flex justify-center items-center h-[400px]"
          >
            {/* Glow */}
            <div className="absolute w-72 h-72 bg-primary/30 blur-[120px] rounded-full animate-pulse" />

            {/* Rings */}
            <div className="absolute w-64 h-64 border border-primary/20 rounded-full animate-spin-slow" />
            <div className="absolute w-80 h-80 border border-primary/10 rounded-full animate-spin-reverse" />

            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative z-10 w-56 h-56 rounded-full p-[3px] bg-gradient-to-tr from-primary to-primary-glow shadow-xl"
            >
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Avishek Rimal - Abhishek Rimal Frontend Developer Portfolio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Floating Skills */}
            {floatingSkills.map((skill, index) => {
              const angle = (index / floatingSkills.length) * 360;
              const radius = 140;

              return (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="absolute hidden md:block"
                  style={{
                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                  }}
                >
                  <div className="flex items-center gap-2 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-border hover:border-primary transition">
                    <skill.icon className="h-3.5 w-3.5 text-primary" />
                    <span className="text-xs font-semibold">{skill.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* STRENGTH CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="card-glass group hover:-translate-y-2 transition">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition">
                    <s.icon className="h-8 w-8 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="text-xl font-bold">{s.title}</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    {s.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;