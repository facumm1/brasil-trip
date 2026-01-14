"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function BrazilCountdown() {
  const targetDate = new Date("2026-02-14T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald via-palm-green to-forest-green animate-gradient-slow" />

        {/* Overlay texture */}
        <div className="absolute inset-0 bg-[url('/tropical-beach-sunset-brazil-rio.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up text-balance">
            RIO 2026{" "}
            <Image
              src="/br.webp"
              alt="Brazil flag"
              width={80}
              height={60}
              className="inline-block ml-3 align-top rounded-sm"
            />
          </h1>

          {/* Countdown Card */}
          <Card className="max-w-2xl mx-auto backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl p-8 md:p-12 mt-12 animate-fade-in-up animate-delay-200">
            <div className="grid grid-cols-4 gap-4 md:gap-8">
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  {timeLeft.days}
                </div>
                <div className="text-sm md:text-base text-white/80 uppercase tracking-wider">
                  Días
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  {timeLeft.hours}
                </div>
                <div className="text-sm md:text-base text-white/80 uppercase tracking-wider">
                  Hrs
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  {timeLeft.minutes}
                </div>
                <div className="text-sm md:text-base text-white/80 uppercase tracking-wider">
                  Min
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  {timeLeft.seconds}
                </div>
                <div className="text-sm md:text-base text-white/80 uppercase tracking-wider">
                  Seg
                </div>
              </div>
            </div>
          </Card>

          <p className="text-xl md:text-2xl text-white/90 mt-8 animate-fade-in-up animate-delay-400">
            14 de Febrero, 2026
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Búzios & Região dos Lagos Section */}
      <section className="py-20 md:py-32 bg-sand">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-forest-green mb-16 animate-fade-in-up text-balance">
            Búzios & Região dos Lagos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Búzios */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl animate-fade-in-up">
              <div className="aspect-[4/5] bg-[url('/buzios-brazil-crystal-clear-water-beach-paradise.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-green/80 to-transparent flex items-end p-6">
                <h3 className="text-3xl font-bold text-white">Búzios</h3>
              </div>
            </div>

            {/* Cabo Frio */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl animate-fade-in-up animate-delay-200">
              <div className="aspect-[4/5] bg-[url('/cabo-frio-brazil-white-sand-beach-turquoise-water.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-green/80 to-transparent flex items-end p-6">
                <h3 className="text-3xl font-bold text-white">Cabo Frio</h3>
              </div>
            </div>

            {/* Arraial do Cabo */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl animate-fade-in-up animate-delay-400">
              <div className="aspect-[4/5] bg-[url('/arraial-do-cabo-brazil-tropical-paradise-clear-wat.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-green/80 to-transparent flex items-end p-6">
                <h3 className="text-3xl font-bold text-white">
                  Arraial do Cabo
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rio de Janeiro Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-palm-green to-emerald">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-16 animate-fade-in-up text-balance">
            Rio de Janeiro
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Cristo Redentor */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl animate-fade-in-up">
              <div className="aspect-video relative">
                <img
                  src="/cristo-redentor-christ-the-redeemer-rio-de-janeiro.jpg"
                  alt="Cristo Redentor"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-green/70 to-transparent" />
              </div>
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-3xl font-bold text-white relative z-10">
                  Cristo Redentor
                </h3>
              </div>
            </div>

            {/* Pan de Azúcar */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl animate-fade-in-up animate-delay-200">
              <div className="aspect-video bg-[url('/sugarloaf-mountain-pao-de-acucar-rio-de-janeiro-su.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-3xl font-bold text-white">Pan de Azúcar</h3>
              </div>
            </div>

            {/* Copacabana & Ipanema */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl animate-fade-in-up animate-delay-400">
              <div className="aspect-video bg-[url('/copacabana-ipanema-beach-rio-de-janeiro-ocean-wave.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-3xl font-bold text-white">
                  Copacabana & Ipanema
                </h3>
              </div>
            </div>

            {/* Barra da Tijuca */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl animate-fade-in-up animate-delay-600">
              <div className="aspect-video bg-[url('/barra-da-tijuca-beach-rio-de-janeiro-skyline.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-3xl font-bold text-white">
                  Barra da Tijuca
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-green py-12 text-center">
        <p className="text-white/80 text-lg">❤️ Un viaje para recordar ❤️</p>
      </footer>
    </div>
  );
}
