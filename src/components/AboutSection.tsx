import * as React from 'react';
import { motion } from 'framer-motion';
import { Code2, Video, Coffee, Rocket, Mic, Megaphone, UserPen, Brain } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AboutSection() {
  const stats = [
    { icon: Mic, label: 'English Communication' },
    { icon: Megaphone, label: 'News Anchoring' },
    { icon: UserPen, label: 'Poster Editing / Poster Design' },
    { icon: Brain, label: 'Creative Thinking' },
  ];

  const images = [
    { src: '/sarah-profile.jpg', alt: 'Sarah Profile' },
    { src: '/sarah-prestasi.jpg', alt: 'Sarah Prestasi' },
    { src: '/sertifikat-1.jpg', alt: 'Sertifikat 1' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Tentang Saya</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Deskripsi Diri
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <Carousel
                className="w-full max-w-sm mx-auto"
              >
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-square rounded-2xl overflow-hidden glass shadow-card">
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-12" />
                <CarouselNext className="-right-12" />
              </Carousel>
              
              <div className="absolute -bottom-6 -right-6 p-4 glass rounded-xl shadow-card z-20">
                <p className="font-display font-bold text-2xl text-gradient">5+ Tahun</p>
                <p className="text-sm text-muted-foreground">Pengalaman</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              Halo 👋
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Saya Sarah Muyassarah Muttaqin, lahir pada 8 Juli 2010 dan biasa dipanggil Sarah. 
              Saya bersekolah di MAN 1 Banda Aceh, kelas 10 Program Pre-Internasional. 
              Saya sangat menyukai Bahasa Inggris dan senang terus belajar serta mengembangkan diri.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 glass rounded-xl text-center hover:shadow-card-hover transition-shadow"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
