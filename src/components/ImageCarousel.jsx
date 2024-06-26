import { imageCarousel } from "../constants";
import { CarouselOne } from "../utils";
import { useRef, useState, useEffect } from "react";
const ImageCarousel = () => {
  const carousel = useRef();
  const selectedRef = useRef();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selected, setSelected] = useState({
    id: 1,
    img: CarouselOne,
    white: "0.5x",
    title: "Ultra Wide | Macro",
  });
  const [imageId, setImageId] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handlePrevClick = () => {
    if (imageId > 1) {
      setImageId(imageId - 1);
      console.log(imageId);
      setSelected(imageCarousel[imageId - 1]);
    }
  };
  const handleNextClick = () => {
    if (imageId < 7) {
      setImageId(imageId + 1);
      console.log(imageId);
      setSelected(imageCarousel[imageId - 1]);
    }
  };
  useEffect(() => {
    const scrollToElement = () => {
      if (windowWidth > 1024) {
        carousel.current.scrollTo({
          left: 600 * (imageId <= 4 ? imageId - 1 : imageId),
          behavior: "smooth",
        });
      } else if (windowWidth > 768 && windowWidth < 1024) {
        carousel.current.scrollTo({
          left:
            470 * (imageId > 2 ? imageId : imageId < 6 ? imageId - 1 : imageId),
          behavior: "smooth",
        });
      } else {
        carousel.current.scrollTo({
          left:
            230 *
            (imageId < 3 ? imageId - 1 : imageId > 5 ? imageId + 1 : imageId),
          behavior: "smooth",
        });
      }
    };

    scrollToElement();
  }, [imageId, windowWidth]);

  return (
    <section className="common-padding">
      <div className="">
        <div>
          <div
            id="carousel"
            className="flex lg:w-screen ml-[-170px] gap-4 overflow-auto transition ease-in-out delay-200 snap-x snap-madatory no-scrollbar md:ml-[-350px] lg:ml-[-20px]"
            ref={carousel}
          >
            {imageCarousel.map((item, i) => (
              <img
                ref={selectedRef}
                key={i}
                src={item.img}
                alt={item.title}
                id="image"
                className={`object-contain h-[250px] w-[285px] md:w-[500px] md:h-[420px] lg:h-[490px] lg:w-[653px] brightness-50 snap-center snap-always scroll-p-0 ${
                  imageId === item.id ? "selected" : ""
                }`}
              />
            ))}
          </div>
          <div className="flex flex-col">
            <p className="m-auto">
              <span>{selected.white}</span>
              {selected.title}
            </p>
            <div className="flex gap-5 ml-auto">
              <button onClick={handlePrevClick}>prev</button>
              <button onClick={handleNextClick}>next</button>
            </div>
          </div>
        </div>
        <div className="h-screen"></div>
      </div>
    </section>
  );
};

export default ImageCarousel;
