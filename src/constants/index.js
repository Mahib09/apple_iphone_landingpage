import {
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  all_colors,
  natural_titanium,
  black_titanium,
  blue_titanium,
  white_titanium,
  CarouselOne,
  CarouselTwo,
  CarouselThree,
  CarouselFour,
  CarouselFive,
  CarouselSix,
  CarouselSeven,
  dark,
  actionaccessibility,
  actioncamera,
  actionflashlight,
  actionfocus,
  actionmagnifier,
  actionshortcut,
  actionsilent,
  actiontranslate,
  actionvoicememo,
} from "../utils";
import {
  BellOff,
  Camera,
  Flashlight,
  Moon,
  AudioLines,
  Languages,
  ZoomIn,
  Layers2,
  PersonStanding,
} from "lucide-react";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 0,
    title: "6.1” iPhone 15 Pro in four colors",
    color: [
      "radial-gradient(circle at center, #ffffff, #e6e6e6 20%, #d4d4d4 40%, #c2c2c2 60%, #a9a9a9 80%, #909090)",
      "#ffe7b9",
      "#6f6c64",
    ],
    img: all_colors,
  },
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: natural_titanium,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blue_titanium,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: white_titanium,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: black_titanium,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];

export const imageCarousel = [
  { id: 0, img: dark, white: "0.5x", title: "Ultra Wide | Macro" },
  { id: 1, img: CarouselOne, white: "0.5x", title: "Ultra Wide | Macro" },
  { id: 2, img: CarouselTwo, white: "0.5x ", title: "Ultra Wide | 13mm" },
  { id: 3, img: CarouselThree, white: "1x ", title: "Main | 24mm" },
  { id: 4, img: CarouselFour, white: "1x ", title: "Main | 28mm" },
  { id: 5, img: CarouselFive, white: "1x", title: "Main | 35mm" },
  { id: 6, img: CarouselSix, white: "2x", title: "Telephoto | 48mm" },
  { id: 7, img: CarouselSeven, white: "New 5x", title: "Telephoto | 120 mm" },
  { id: 8, img: dark, white: "New 5x", title: "Telephoto | 120 mm" },
];

export const actionButtons = [
  { id: 1, icon: BellOff, text: "Silent mode", img: actionsilent },
  { id: 2, icon: Moon, text: "Focus", img: actionfocus },
  { id: 3, icon: Camera, text: "Camera", img: actioncamera },
  { id: 4, icon: Flashlight, text: "Flashlight", img: actionflashlight },
  { id: 5, icon: AudioLines, text: "Voice Memo", img: actionvoicememo },
  { id: 6, icon: Languages, text: "Translate", img: actiontranslate },
  { id: 7, icon: ZoomIn, text: "Magnifier", img: actionmagnifier },
  { id: 8, icon: Layers2, text: "Shortcut", img: actionshortcut },
  {
    id: 9,
    icon: PersonStanding,
    text: "Accessibility",
    img: actionaccessibility,
  },
];
