import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ThreeScene from './ThreeScene';

function SocialAccordion() {
  const socials = [
    { icon: Github, href: 'https://github.com/sarah-muyassarah', label: 'GitHub', color: 'hover:text-[#333]' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-[#0077b5]' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-[#ff0000]' },
    { icon: Instagram, href: 'https://www.instagram.com/muyassarahsarh?igsh=aDhid2FuZzA4ZDli', label: 'Instagram', color: 'hover:text-[#e4405f]' },
  ];

  return (
    <Accordion type="single" collapsible className="w-full max-w-[200px]">
      <AccordionItem value="socials" className="border-none">
        <AccordionTrigger className="glass px-6 py-3 rounded-full bg-primary text-primary-foreground shadow-glow hover:no-underline hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center group data-[state=open]:rounded-b-none">
          <div className="flex items-center gap-2">
            <span className="font-medium">Social Media</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="glass rounded-b-3xl border-t-0 p-0 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-6 py-4 px-2"
          >
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`p-1 text-foreground/70 transition-colors duration-300 ${social.color}`}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <ThreeScene />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              👋 Selamat datang di portfolio saya
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Sarah Muyasarah
            <br />
            <span className="text-gradient">Kelas X-4</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
          Sedang belajar teknologi, membuat proyek kecil, dan membangun portfolio pribadi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 shadow-glow"
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Lihat Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Hubungi Saya
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center justify-center"
          >
            <SocialAccordion />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
