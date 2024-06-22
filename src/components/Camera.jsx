import { useGSAP } from "@gsap/react";
import { greeniguana } from "../utils";
import { animateWithGsap, animateWithGsapFrom } from "../utils/animations";

const Camera = () => {
  useGSAP(() => {
    // animateWithGsapFrom("#mainTitle", {
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power1.inOut",
    // });
    animateWithGsap("#mainTitle", {
      y: 0,
      opacity: 1,
    });
    // animateWithGsapFrom("#greenIguana", {
    //   scale: 1,
    //   duration: 1,
    // });
  });
  return (
    <section className="common-padding overflow-hidden">
      <div className="screen-max-width">
        <div
          id="mainTitle"
          className="background-transparent opacity-0 flex flex-center flex-col ml-auto mr-auto w-[300px] md:w-[100%] justify-center items-center mb-[150px] md:mb-[70px]"
        >
          <h2 className="main-big-title m-auto text-left">
            A camera that captures your wildest imagination.
          </h2>
          <p className="main-sub-title">
            From dramatic framing flexibility to next-generation portraits, see
            what you can do with our most powerful iPhone camera system.
          </p>
        </div>
      </div>

      <img
        id="greenIguana"
        src={greeniguana}
        className="ml-[250px] md:ml-[30px] lg:ml-[50px] scale-175 md:scale-100 lg:scale-90"
      />
    </section>
  );
};

export default Camera;
