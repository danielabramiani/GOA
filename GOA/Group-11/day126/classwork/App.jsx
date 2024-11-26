import React from 'react';

function PhotoGallery() {
  const imageUrls = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Kevin_Levrone_at_2016_Arnold_Classic_Europe.jpg/640px-Kevin_Levrone_at_2016_Arnold_Classic_Europe.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Kevin_Levrone.jpg/640px-Kevin_Levrone.jpg",
    "https://i.ytimg.com/vi/UaPJd5vRETY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDuuSjxBTdKqcpWhIKBDD5eHKNJBw",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUPEOA7mUtKtALn4chex7NRIgqC4pNHt5wCg&s"
  ];

  return (
    <div>
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`Image ${index + 1}`} style={{ margin: '10px' }} />
      ))}
    </div>
  );
}

export default PhotoGallery;
