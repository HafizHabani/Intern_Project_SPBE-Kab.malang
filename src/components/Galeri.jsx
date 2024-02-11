import React, { useState } from "react";
import { kegiatan, kegiatan2, kegiatan3 } from "../assets";

const Galeri = () => {
  const [cards, setCards] = useState([
    { id: 1, type: "photo", src: kegiatan, href: "link1" },
    { id: 2, type: "photo", src: kegiatan2, href: "link2" },
    { id: 3, type: "photo", src: kegiatan3, href: "link3" },
  ]);

  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  const slideLeft = () => {
    setCards((cards) => {
      const updatedCards = [...cards];
      const card = updatedCards.pop();
      updatedCards.unshift(card);
      return updatedCards;
    });
  };

  const slideRight = () => {
    setCards((cards) => {
      const updatedCards = [...cards];
      const card = updatedCards.shift();
      updatedCards.push(card);
      return updatedCards;
    });
  };

  return (
    <div className="px-4 md:px-20 py-10"> {/* Added padding on small screens */}
      <div className="flex flex-col md:flex-row items-center justify-between"> {/* Changed to column layout on small screens */}
        <div className="flex flex-row items-center mb-4 md:mb-0"> {/* Added margin bottom on small screens */}
          <p className="text-primary pl-2 font-bold text-2xl">Galeri</p>
          <p className="pl-2 font-bold text-2xl">Kegiatan</p>
          <div className="mt-2 md:mt-0 ml-10 flex items-center"> {/* Added margin left on small screens */}
            <span
              onClick={toggleVideo}
              className={`cursor-pointer border border-solid ${showVideo ? "border-primary text-primary" : "bg-primary text-white border-primary "
                }`}
              style={{ padding: "4px 35px ", borderRadius: "4px 0 0 4px" }}
            >
              Photo
            </span>
            <span
              onClick={toggleVideo}
              className={`cursor-pointer border border-solid  ${showVideo ? "border-primary bg-primary text-white" : "border-primary text-primary "
                }`}
              style={{ padding: "4px 35px", borderRadius: "0 4px 4px 0" }}
            >
              Video
            </span>
          </div>
        </div>
        
        <div>
          <a href="#" className="font-bold">
            Lihat Semua
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={slideLeft}
          className="btn btn-circle top-0 bottom-0 left-0 ml-2"
        >
          ❮
        </button>
        <div className="carousel-container py-6 carousel-item relative justify-center gap-4 w-full">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`card ${showVideo ? "video" : "photo"} `}
            >
              {showVideo ? (
                <video
                  src={card.src}
                  controls
                  className="w-full h-full object-cover"
                  style={{ maxHeight: "300px" }}
                />
              ) : (
                <img
                  src={card.src}
                  alt={`Card ${card.id}`}
                  className="w-full h-full object-cover"
                  style={{ maxHeight: "300px" }}
                />
              )}
              <a href={card.href} target="_blank" rel="noopener noreferrer"></a>
            </div>
          ))}
        </div>
        <button
          onClick={slideRight}
          className="btn btn-circle top-0 bottom-0 right-0 mr-2"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Galeri;
