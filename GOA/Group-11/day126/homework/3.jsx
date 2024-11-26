function DynamicImage() {
    const imageAttributes = {
      src: "https://vitamini.ge/storage/products/10584/levrone-gold-creatine-300-g.jpg",
      alt: "Placeholder Image"
    };
  
    return (
      <img src={imageAttributes.src} alt={imageAttributes.alt} />
    );
  }
  