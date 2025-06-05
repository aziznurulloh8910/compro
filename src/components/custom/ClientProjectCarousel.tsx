import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface ClientLogo {
  src: string;
  alt: string;
  name: string;
}

const clientLogos: ClientLogo[] = [
  { src: "/img/logo-clients/aun.png", alt: "AUN Logo", name: "AUN" },
  { src: "/img/logo-clients/bizbridge.png", alt: "BizBridge Logo", name: "BizBridge" },
  { src: "/img/logo-clients/btn-logo.png", alt: "BTN Logo", name: "BTN" },
  { src: "/img/logo-clients/calpadia.png", alt: "Calpadia Logo", name: "Calpadia" },
  { src: "/img/logo-clients/daisho.png", alt: "Daisho Logo", name: "Daisho" },
  { src: "/img/logo-clients/easy-rent.png", alt: "Easy Rent Logo", name: "Easy Rent" },
  { src: "/img/logo-clients/hairnerds.png", alt: "Hair Nerds Logo", name: "Hair Nerds" },
  { src: "/img/logo-clients/hanoman-logo.png", alt: "Hanoman Logo", name: "Hanoman" },
  { src: "/img/logo-clients/hello-work.png", alt: "Hello Work Logo", name: "Hello Work" },
  { src: "/img/logo-clients/ilc.png", alt: "ILC Logo", name: "ILC" },
  { src: "/img/logo-clients/jfe.png", alt: "JFE Logo", name: "JFE" },
  { src: "/img/logo-clients/piston.png", alt: "Piston Logo", name: "Piston" },
  { src: "/img/logo-clients/pompa-bandung.png", alt: "Pompa Bandung Logo", name: "Pompa Bandung" },
  { src: "/img/logo-clients/rooftop-coffee.png", alt: "Rooftop Coffee Logo", name: "Rooftop Coffee" },
  { src: "/img/logo-clients/sealhonpo.png", alt: "Sealhonpo Logo", name: "Sealhonpo" },
  { src: "/img/logo-clients/sidz.png", alt: "SIDZ Logo", name: "SIDZ" },
  { src: "/img/logo-clients/siix.png", alt: "SIIX Logo", name: "SIIX" },
  { src: "/img/logo-clients/toyotomo.png", alt: "Toyotomo Logo", name: "Toyotomo" },
];

export default function ClientProjectCarousel() {

  const chunkedLogos = clientLogos.reduce((chunks: ClientLogo[][], logo, index) => {
    const chunkIndex = Math.floor(index / 5);
    if (!chunks[chunkIndex]) {
      chunks[chunkIndex] = [];
    }
    chunks[chunkIndex].push(logo);
    return chunks;
  }, []);

  return (
    <Carousel
      className="w-3/4 mx-auto"
      opts={{
        align: "start",
        loop: true as boolean,
      }}
    >
      <CarouselContent>
        {chunkedLogos.map((chunk, chunkIndex) => (
          <CarouselItem key={chunkIndex}>
            <div className="grid grid-cols-5 gap-2 md:gap-8 items-center justify-items-center ml-8">
              {chunk.map((logo, logoIndex) => (
                <div
                  key={logoIndex}
                  className="flex items-center justify-center w-full h-16 transition-all duration-300 hover:scale-110"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    title={logo.name}
                  />
                </div>
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}