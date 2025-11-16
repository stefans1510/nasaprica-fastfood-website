import React from 'react';

interface VideoBannerProps {
  videoSrc?: string;
  posterImage?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

const VideoBanner: React.FC<VideoBannerProps> = ({
  videoSrc = "/banner-video.mp4",
  posterImage = "/banner-poster.png",
  autoPlay = true,
  muted = true,
  loop = true,
}) => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        poster={posterImage}
      >
        <source src={videoSrc} type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <img 
          src={posterImage} 
          alt="Banner" 
          className="w-full h-full object-cover"
        />
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 drop-shadow-2xl tracking-tight" style={{ fontFamily: 'Rubik, sans-serif', textShadow: '4px 4px 8px rgba(0,0,0,0.7), 0 0 25px rgba(255,100,50,0.4)' }}>
            Naša Priča
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 drop-shadow-md opacity-90">
            Ukus koji se prepričava
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('porucivanje');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Poruči Ovde
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;