const ActionBtn = () => {
  return (
    <section className="common-padding">
      <div className="screen-max-width flex flex-col">
        <div className="">
          <h2 className="main-big-title">
            Get in on the
            <br /> Action button.
          </h2>
        </div>
        <div>
          <div>
            <div className="m-auto">
              <p className="reg-sub-title h-[189px] w-[280px] md:h-[290px] md:w-[289px] lg:w-[327px] lg:h-[203px]">
                The all‑new Action button is{" "}
                <span className="text-white">
                  a fast track to your favorite feature
                </span>
                . Once you set the one you want, just press and hold to launch
                the action.
              </p>
            </div>
            <div>
              <ActionBtn />
            </div>
          </div>
          <div>
            <img />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 m-auto">
          <p className="reg-sub-title h-[189px] w-[280px] md:h-[290px] md:w-[289px] lg:w-[327px] lg:h-[203px]">
            By default, the{" "}
            <span className="text-white">
              Action button is set to toggle between Ring and Silent modes
            </span>
            . If you choose a different action, you can use Control Center to
            mute or use Focus filters to automatically set your iPhone to
            silent.
          </p>
          <p className="reg-sub-title h-[189px] w-[280px] md:h-[290px] md:w-[289px] lg:w-[327px] lg:h-[203px]">
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
