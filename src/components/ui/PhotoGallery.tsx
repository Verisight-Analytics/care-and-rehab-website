"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
}

export function PhotoGallery({ images }: PhotoGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, closeLightbox, goNext, goPrev]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="rounded-xl overflow-hidden">
        <div className="flex items-center gap-2 mb-4">
          <Camera className="h-5 w-5 text-[var(--primary)]" />
          <h3 className="font-semibold text-[var(--foreground)]">
            Photo Gallery
          </h3>
          <span className="text-sm text-[var(--muted)]">
            ({images.length} photos)
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {images.slice(0, 8).map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-[var(--primary-100)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              {index === 7 && images.length > 8 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white font-semibold">
                  +{images.length - 8} more
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Close gallery"
            >
              <X className="h-8 w-8" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute left-4 z-10 p-2 text-white/80 hover:text-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-10 w-10" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute right-4 z-10 p-2 text-white/80 hover:text-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-10 w-10" />
                </button>
              </>
            )}

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-h-[85vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto object-contain"
                priority
              />
            </motion.div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white">
              {images[currentIndex].caption && (
                <p className="mb-2 text-sm">{images[currentIndex].caption}</p>
              )}
              <p className="text-xs text-white/60">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function PhotoGalleryPlaceholder({
  facilityName,
}: {
  facilityName: string;
}) {
  return (
    <div className="rounded-xl bg-[var(--primary-50)] p-8 text-center">
      <Camera className="h-12 w-12 mx-auto text-[var(--primary-300)]" />
      <h3 className="mt-4 font-semibold text-[var(--foreground)]">
        Photos Coming Soon
      </h3>
      <p className="mt-2 text-sm text-[var(--muted)]">
        We&apos;re preparing a photo gallery of {facilityName}. In the meantime,{" "}
        <a href="/admissions" className="text-[var(--primary)] hover:underline">
          schedule a tour
        </a>{" "}
        to see the facility in person.
      </p>
    </div>
  );
}
