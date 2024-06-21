import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { all_colors } from "../utils";
import { models } from "../constants";
const Model = () => {
  const [model, setModel] = useState({
    title: "6.1” iPhone 15 Pro in four colors",
    color: ["#D7D7D7", "#353535"],
    img: all_colors,
  });

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>

        <div className="flex felx-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <div className="flex mt-8">
              <img
                src={model.img}
                className="m-auto scale-75 lg:scale-100 transition-all ease-in-out"
              ></img>
            </div>

            <div className="mx-auto w-full mt-14">
              <p className="text-sm font-light text-center mb-5">
                {model.title}
              </p>
              <div className="flex-center">
                <ul className="color-container">
                  {models.map((item, i) => (
                    <li
                      key={i}
                      className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                      style={{ backgroundColor: item.color[0] }}
                      onClick={() => setModel(item)}
                    ></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
