import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";
import { imageCarousel } from "../constants";
import { CarouselOne } from "../utils";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  useGSAP(() => {
    animateWithGsap("#maincamera", {
      y: 0,
      opacity: 1,
    });
  });
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
      // Ignore 0
      setImageId(imageId - 1);
      setSelected(imageCarousel[imageId - 1]);
    } else {
      setImageId(1);
      setSelected(imageCarousel[1]);
    }
  };

  const handleNextClick = () => {
    if (imageId < 7) {
      // Ignore 8
      setImageId(imageId + 1);
      setSelected(imageCarousel[imageId + 1]);
    } else {
      setImageId(7);
      setSelected(imageCarousel[7]);
    }
  };

  // Assuming imageCarousel is an array and imageId is a one-based index starting from 1 to 7 (ignoring 0 and 8)

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
    <section className="common-padding mt-[-150px]">
      <div className="screen-max-width">
        <div
          id="maincamera"
          className="background-transparent opacity-0 flex flex-center flex-col ml-auto mr-auto w-[300px] justify-center items-center md:m-auto md:mb-[40px]"
        >
          <p className="main-sub-title">
            With iPhone 15 Pro, you have multiple focal lengths to work with.
            It’s like having{" "}
            <span className="text-white">seven pro lenses in your pocket</span>{" "}
            , everywhere you go.
          </p>
        </div>
      </div>
      <div>
        <div
          id="carousel"
          className="flex lg:w-screen ml-[-170px] gap-4 overflow-auto transition ease-in-out delay-200 snap-x snap-madatory no-scrollbar md:ml-[-350px] lg:ml-[-200px] xl:ml-[-50px]"
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
        <div className="flex flex-col items-center justify-start">
          <p className="m-auto text-gray font-semibold">
            <span className="text-white">{selected.white}</span>
            {selected.title}
          </p>
          <div className="flex gap-5 ml-auto mr-20">
            <button
              onClick={handlePrevClick}
              className="bg-gray-500 flex items-center rounded-full h-[36px] w-[36px] p-[4px]"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              onClick={handleNextClick}
              className="bg-gray-500 flex items-center rounded-full h-[36px] w-[36px] p-[4px]"
            >
              <ChevronRight size={36} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
