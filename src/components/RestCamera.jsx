import { useGSAP } from "@gsap/react";
import { maincamera } from "../utils";
import MoreBtn from "./MoreBtn";
import { animateWithGsap } from "../utils/animations";

const RestCamera = () => {
  useGSAP(() => {
    animateWithGsap(".more_fadeIn", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
      scrollTrigger: {
        scrub: true,
      },
    });
  }, []);
  return (
    <section className="common-padding mt-[-100px]">
      <div className="screen-max-width flex flex-col items-center">
        <div className="flex flex-col overflow-hidden md:flex-row items-center w-[560px] md:w-[692px] lg:[980px]">
          <div className="m-auto">
            <img
              src={maincamera}
              className="h-[561px] w-[275px] md:h-[713px] md:w-[349px] lg:h-[671px] lg:w-[329px] more_fadeIn"
            />
          </div>
          <div className="m-auto w-[275px]">
            <p className="reg-sub-title more_fadeIn">
              The 48MP Main camera is more advanced than ever, capturing
              super‑high‑resolution photos with a{" "}
              <span className="text-white">new level of detail and color</span>.
            </p>
            <p className="reg-sub-title more_fadeIn">
              You’ll see the improvements in your portraits. And now you no
              longer have to switch to Portrait mode. If your subject is a
              person, dog, or cat, iPhone automatically captures depth
              information. So you can choose to instantly{" "}
              <span className="text-white">see your photo as a portrait</span>,
              with an artful blur effect. Or later in the Photos app.
            </p>
          </div>
        </div>
        <MoreBtn text="Zoom in on the cameras" />
      </div>
    </section>
  );
};

export default RestCamera;
