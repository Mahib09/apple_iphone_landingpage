const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5 overflow-hidden ">
      <div className="screen-max-width ">
        <p className="text-gray text-4xl lg:6xl font-semibold mb-[50px]">
          iPhone
        </p>
        <div className="flex gap-16 flex-col md:flex-row">
          <ul className="text-lg font-semibold md:text-xl flex flex-col gap-2 cursor-pointer">
            <li className="text-sm text-gray md:text-md mb-6">
              Explore iPhone
            </li>
            <li>Explore All iPhone</li>
            <li>iPhone 15 Pro</li>
            <li>iPhone 15</li>
            <li>iPhone 15</li>
            <li>iPhone 15</li>
            <li className="text-sm md:text-md mt-6">Compare iPhone</li>
            <li className="text-sm md:text-md">Switch from Android</li>
          </ul>
          <ul className="text-sm md:text-md flex flex-col gap-2 cursor-pointer">
            <li className="text-sm text-gray md:text-md mb-6">Shop iPhone</li>
            <li>Shop iPhone</li>
            <li>iPhone Accessories</li>
            <li>Apple Trade In</li>
            <li>Carrier Deals at Apple</li>
            <li>Financing</li>
          </ul>
          <ul className="text-sm md:text-md flex flex-col gap-2 cursor-pointer">
            <li className="text-sm text-gray md:text-md mb-6">Go Further</li>
            <li>iPhone Support</li>
            <li>AppleCare+ for iPhone</li>
            <li>iOS 18 Preview</li>
            <li>Apple Intelligence</li>
            <li>Apps by Apple</li>
            <li>iPhone Privacy</li>
            <li>iCloud+</li>
            <li>Wallet, Pay, Card</li>
            <li>Siri</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
