"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryGridProps {
  images: readonly string[];
}

export const GalleryGrid = ({ images }: GalleryGridProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
  }, [images.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  }, [images.length]);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => openLightbox(i)}
            className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
          >
            <Image
              src={src}
              alt={`NFW Gallery ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-nfw-purple/20 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors cursor-pointer z-10"
            aria-label="Close"
          >
            <X className="size-8" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors cursor-pointer z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="size-10" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full mx-16 aspect-square"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`NFW Gallery ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="80vw"
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors cursor-pointer z-10"
            aria-label="Next"
          >
            <ChevronRight className="size-10" />
          </button>

          {/* Counter */}
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-sm tracking-widest">
            {lightboxIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
};
