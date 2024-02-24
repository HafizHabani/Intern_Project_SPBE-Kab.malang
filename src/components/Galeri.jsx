import React, { useState } from "react";
import { galleryPhoto } from "../constants";

const Galeri = () => {
  const kartu = galleryPhoto.data.map(item => ({
    id: item.id,
    type: "photo",
    src: item.image,
    href: item.image 
  }))

  const [cards, setCards] = useState(kartu);

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
    <div className="md:px-20 pt-20 pb-20"> {/* Added padding on small screens */}
       {/* Changed to column layout on small screens */}
        <div className="flex md:flex-row items-center justify-between mb-4 md:mb-0"> {/* Added margin bottom on small screens */}

          <div className="flex flex-row pb-2">
            <p className="text-primary pl-2 font-bold text-2xl">Galeri</p>
            <p className="pl-2 font-bold text-2xl">Kegiatan</p>
          </div>

          <div>
            <a href="#" className="font-bold text-white">Lihat Semua</a>
          </div>
        </div>
        <div className="mt-2 md:mt-0 flex items-center"> {/* Added margin left on small screens */}
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
        
      <div className="pt-10">
        <div className="flex items-center justify-center ">
          <button
            onClick={slideLeft}
            className="btn btn-circle bg-primary hover:bg-red-700 border-none text-white top-0 bottom-0 left-0 mr-2"
          >
            ❮
          </button>
          <div className="carousel-container py-6 carousel-item relative justify-center gap-4 w-full overflow-x-auto">
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
                    style={{ maxHeight: "300px", maxWidth: "980px" }}
                  />
                ) : (
                  <img
                    src={card.src}
                    alt={`Card ${card.id}`}
                    className="w-full h-full object-cover"
                    style={{ maxHeight: "1000px" }}
                  />
                )}
                <a href={card.href} target="_blank" rel="noopener noreferrer"></a>
              </div>
            ))}
          </div>
          <button
            onClick={slideRight}
            className="btn btn-circle bg-primary hover:bg-red-700 border-none text-white top-0 bottom-0 right-0 ml-2"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Galeri;
