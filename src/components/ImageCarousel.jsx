import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";
import gsap from "gsap";
import { imageCarousel } from "../constants";
import { CarouselOne } from "../utils";
import { useRef, useState, useEffect } from "react";
const ImageCarousel = () => {
  const carousel = useRef();
  const selectedRef = useRef();
  const [selected, setSelected] = useState({
    id: 1,
    img: CarouselOne,
    white: "0.5x",
    title: "Ultra Wide | Macro",
  });
  const [imageId, setImageId] = useState(1);
  useGSAP(() => {
    animateWithGsap("#title", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
    gsap.to("#box", {
      x: 20,
      scrollTrigger: {
        trigger: "#box",
        toggleActions: "restart reverse restart reverse",
        start: "top 85%",
      },
      scale: 1.5,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  // useEffect(() => {
  //   const translateX = -620 * (imageId - 1); // Adjust based on your image width
  //   if (carousel.current) {
  //     carousel.current.style.transform = `translateX(${translateX}px)`;
  //   }
  // }, [imageId]);
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
      carousel.current.scrollTo({
        left: 600 * (imageId - 1), // Adjust this value based on the width of each image
        behavior: "smooth",
      });
    };
    scrollToElement();
  }, [imageId]);

  return (
    <section className="common-padding">
      <div className="">
        {/* <div id="box" className="h-20 w-20 bg-green-400"></div> */}
        <div>
          <div
            id="carousel"
            className="flex gap-4 overflow-auto transition ease-in-out delay-200 snap-x"
            ref={carousel}
          >
            {imageCarousel.map((item, i) => (
              <img
                ref={selectedRef}
                key={i}
                src={item.img}
                alt={item.title}
                id="image"
                className={`object-contain h-[365px] w-[274px] md:h-[490px] md:w-[653px] brightness-50  ${
                  imageId === item.id ? "selected" : ""
                }`}
              />
            ))}
          </div>
          <div>
            <p>
              <span>{selected.white}</span>
              {selected.title}
            </p>
            <div className="flex gap-5">
              <button onClick={handlePrevClick}>prev</button>
              <button onClick={handleNextClick}>next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
