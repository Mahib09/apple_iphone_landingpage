import { useEffect, useRef, useState } from "react";
import { actionButtons } from "../constants";
import ActionButton from "./ActionButton";
import { ChevronLeft, ChevronRight, Scale } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";
import gsap from "gsap";

const ActionBtn = () => {
  const buttons = useRef();
  const [selected, setSelected] = useState(actionButtons[0]);
  const [nextclicked, setNextClicked] = useState(1);
  const [prevclicked, setPrevClicked] = useState(1);
  useEffect(() => {}, [selected]);
  const handleClick = (id) => {
    setSelected(actionButtons[id - 1]);
  };
  const handleNext = () => {
    buttons.current.scrollTo({ left: 200 * nextclicked, behaviour: "smooth" });
    setNextClicked(nextclicked + 1);
    setPrevClicked(prevclicked - 1);
  };
  const handlePrev = () => {
    buttons.current.scrollTo({ left: -200 * prevclicked, behaviour: "smooth" });
    setPrevClicked(prevclicked + 1);
    setNextClicked(nextclicked - 1);
  };
  useGSAP(() => {
    animateWithGsap("#actionText", {
      x: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
    animateWithGsap("#bottomactionText", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
    animateWithGsap("#actionPhoto", {
      y: 0,
      opacity: 1,
      ease: "power2",
      scale: 1,
      duration: 1,
    });
    animateWithGsap("#buttons", {
      x: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
      scrub: true,
    });
  });
  return (
    <section className="common-padding">
      <div className="screen-max-width flex flex-col">
        <div className="m-auto md:ml-[1.7rem] text-left">
          <h2 className="main-big-title ">
            Get in on the
            <br /> Action button.
          </h2>
        </div>
        <div className=" flex flex-col md:flex-row m-auto h-screen md:m-auto">
          <div className=" flex flex-col md:gap-[5rem] lg:gap-[10rem] m-auto items-center md:flex-row">
            <div className="">
              <p
                id="actionText"
                className="animatebtn reg-sub-title m-auto h-[189px] w-[280px] md:h-[290px] md:w-[289px] lg:w-[327px] lg:h-[203px] mb-0"
              >
                The all‑new Action button is{" "}
                <span className="text-white">
                  a fast track to your favorite feature
                </span>
                . Once you set the one you want, just press and hold to launch
                the action.
              </p>

              <div>
                <div
                  ref={buttons}
                  id="buttons"
                  className="animatebtn lg:ml-[1rem] flex md:mt-[-70px] w-[375px] md:flex-col overflow-auto snap-mandatory snap-start no-scrollbar"
                >
                  {actionButtons.map((item) => (
                    <ActionButton
                      key={item.id}
                      icon={item.icon}
                      text={item.text}
                      handleClick={() => handleClick(item.id)}
                      className={`${selected.id === item.id ? "active" : ""}`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex gap-10 ">
                <button
                  onClick={handlePrev}
                  className="ml-auto bg-[#212121] flex items-center rounded-full h-[36px] w-[36px] p-[4px] md:hidden"
                >
                  <ChevronLeft size={36} />
                </button>
                <button
                  onClick={handleNext}
                  className=" bg-[#212121] flex items-center rounded-full h-[36px] w-[36px] p-[4px] md:hidden"
                >
                  <ChevronRight size={36} />
                </button>
              </div>
            </div>
            <div
              id="actionPhoto"
              className="scale-150 w-[276px] h-[520px] md:ml-auto md:w-[358px] md:h-[748px] lg:w-[418px] lg:h-[732px]"
            >
              <img
                src={selected.img}
                alt={selected.text}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 mt-0 m-auto">
          <p
            id="bottomactionText"
            className="tel_fadeIn reg-sub-title h-[189px] w-[280px] md:h-[290px] md:w-[289px] lg:w-[327px] lg:h-[203px]"
          >
            By default, the{" "}
            <span className="text-white">
              Action button is set to toggle between Ring and Silent modes
            </span>
            . If you choose a different action, you can use Control Center to
            mute or use Focus filters to automatically set your iPhone to
            silent.
          </p>
          <p
            id="bottomactionText"
            className="tel_fadeIn reg-sub-title h-[189px] w-[280px] md:h-[290px] md:w-[289px] lg:w-[327px] lg:h-[203px]"
          >
            Whatever you’re doing, the Action button is at the ready. Launch
            Camera to catch a spontaneous selfie. Record an instant voice memo.
            You can even
            <span className="text-white">
              select Shortcut to open an app or run a series of tasks
            </span>
            like switching on the lights in your living room and playing music.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ActionBtn;
