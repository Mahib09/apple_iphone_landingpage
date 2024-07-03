import { useGSAP } from "@gsap/react";
import { telephotodisplay } from "../utils";
import MoreBtn from "./MoreBtn";
import { animateWithGsap } from "../utils/animations";
import gsap from "gsap";
import { useRef } from "react";

const Telephoto = () => {
  const videoRef = useRef();
  useGSAP(() => {
    animateWithGsap(".tel_fadeIn", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
    gsap.to("#teleVid", {
      scrollTrigger: {
        trigger: "#teleVid",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });
    animateWithGsap;
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="flex flex-col">
          <div className="m-auto">
            <h2 className="main-big-title m-auto text-center">
              120 mm of <br></br> pure Pro zoom.
            </h2>
          </div>
          <div className="flex flex-col m-auto mt-[-50px] lg:mt-10">
            <video
              id="teleVid"
              autoPlay
              muted
              playsInline={true}
              key={telephotodisplay}
              ref={videoRef}
              className="pointer-events-none h-[666px] w-[734px] lg:w-[1050px] lg:h-[590px]"
            >
              <source src={telephotodisplay} type="video/mp4"></source>
            </video>
          </div>
          <div className="flex flex-col md:flex-row m-auto mt-[-150px] md:mt-[-50px] lg:mt-10 md:w-[692px] md:h-[340px] lg:w-[980px] lg:h-[307px]">
            <div className="flex flex-col gap-4 lg:gap-0 m-auto mt-0 ">
              <p className="tel_fadeIn reg-sub-title w-[280px] h-[135px] md:w-[290px] md:h-[175px] lg:w-[375px] lg:h-[145px]">
                For iPhone 15 Pro Max, we designed a 5x Telephoto camera with{" "}
                <span>the longest optical zoom of any iPhone ever</span> to fit
                in our compact Pro camera system.
              </p>
              <p className="tel_fadeIn reg-sub-title w-[280px] h-[135px] md:w-[290px] md:h-[175px] lg:w-[375px] lg:h-[145px]">
                Now you can{" "}
                <span>take sharper close‑ups from farther away</span> — like a
                phenomenal photo of your friend or a goal in your kid’s soccer
                match.
              </p>
            </div>
            <div className="flex flex-col w-[275px] mt-10">
              <span className="tel_fadeIn text-white text-4xl  font-semibold">
                5x optical zoom
              </span>
              <p className="reg-sub-title tel_fadeIn">with the 120 mm lens</p>
            </div>
          </div>
        </div>
        <MoreBtn text="Nerd out on 5x Telephoto" />
      </div>
    </section>
  );
};

export default Telephoto;
