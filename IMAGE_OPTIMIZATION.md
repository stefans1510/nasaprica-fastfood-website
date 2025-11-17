# Image Optimization Guidelines

## Current Issues:
- Your images are in PNG format which can be large
- No lazy loading for images
- No responsive images

## Recommended Optimizations:

### 1. Convert to WebP format
- WebP images are 25-35% smaller than PNG
- Better compression with same quality

### 2. Add responsive images
- Use different image sizes for mobile/desktop
- Implement srcset for different screen densities

### 3. Lazy load images
- Only load images when they come into viewport
- Especially important for your product images

### 4. Image Compression
- Use tools like TinyPNG, ImageOptim
- Target 80-90% quality for web

### Example Implementation:
```tsx
// Lazy loaded image component
const LazyImage = ({ src, alt, className }) => (
  <img 
    src={src}
    alt={alt}
    className={className}
    loading="lazy"
    decoding="async"
  />
);
```