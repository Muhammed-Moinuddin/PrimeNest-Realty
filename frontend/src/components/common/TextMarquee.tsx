interface TextMarqueeProps {
  direction?: 'left' | 'right';
}

function TextMarquee({ direction = 'left' }: TextMarqueeProps) {
  const items = [
    'Luxury Villas',
    'Premium Apartments',
    'Beachfront Properties',
    'Penthouse Suites',
    'Family Homes',
    'Studio Apartments',
    'Golf Course Villas',
    'Downtown Condos',
    'Waterfront Estates',
    'Modern Townhouses',
    'Sky Villas',
    'Garden Residences',
  ];

  return (
    <div className="bg-dark overflow-hidden">
      <div
        className={`flex whitespace-nowrap ${
          direction === 'left' 
            ? 'animate-[scrollLeft_40s_linear_infinite]' 
            : 'animate-[scrollRight_40s_linear_infinite]'
        } hover:[animation-play-state:paused]`}
      >
        {/* First set */}
        {items.map((item, index) => (
          <span key={`first-${index}`} className="inline-flex items-center border-y border-brand">
            <span className="text-brand text-base md:text-lg px-4 py-4">
              {item}
            </span>
            <span className="text-brand">•</span>
          </span>
        ))}
        {/* Duplicate set for seamless loop */}
        {items.map((item, index) => (
          <span key={`second-${index}`} className="inline-flex items-center border-y border-brand">
            <span className="text-brand text-base md:text-lg px-4 py-4">
              {item}
            </span>
            <span className="text-brand">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default TextMarquee;