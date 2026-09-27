const fs = require('fs');
let content = fs.readFileSync('src/components/ui/offer-carousel.tsx', 'utf8');

// Replace the interface
content = content.replace(
  /export interface OfferCarouselProps \{[\s\S]*?\}/,
  'export interface OfferCarouselProps { children?: React.ReactNode; }'
);

content = content.replace(
  /export function OfferCarousel\(\{ offers \}: OfferCarouselProps\) \{/,
  'export function OfferCarousel({ children }: OfferCarouselProps) {'
);

// Remove the if (!offers) block
content = content.replace(
  /if \(!offers \|\| offers\.length === 0\) \{[\s\S]*?return null;\s*\}/,
  ''
);

// Replace the {offers.map...} block
content = content.replace(
  /\{offers\.map\(\(offer, index\) => \([\s\S]*?\)\)\}/,
  '{children}'
);

fs.writeFileSync('src/components/ui/offer-carousel.tsx', content);
