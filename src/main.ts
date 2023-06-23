import "./style.css";
import "./fonts.css";

import Alpine from "alpinejs";
import { twMerge } from "tailwind-merge";

type Logtype = {
  open: boolean;
  toggle: () => void;
  logme: () => void;
};

function registerModule<T>(name: string, callback: () => T): void {
  console.log("register", name);

  const module = (): any => callback;
  Alpine.data(name, module);
}

const logger = () => {
  return {
    open: false,

    toggle() {
      this.open = !this.open;
    },

    logme() {
      console.log("dsjaaaads");
    },
  };
};

registerModule<Logtype>("log", logger);

const classes = {
  "max-w": {
    0: "sm",
    1: "md",
    2: "lg",
    3: "xl",
    4: "2xl",
    5: "4xl",
    6: "none",
  },
  text: {
    0: "sm",
    1: "md",
    2: "lg",
    3: "xl",
    4: "2xl",
    5: "4xl",
  },
  justify: {
    0: "start",
    1: "center",
    2: "end",
  },
  items: {
    0: "start",
    1: "center",
    2: "end",
  },
  py: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  px: [0, 1, 2, 3, 4, 5, 6, 7, 8],
};

Alpine.data("classGenerater", () => ({
  wrapperClasses: "items-start",
  classes: "max-w-md",
  setClass(event, style, isWrapper = false) {
    const propertyValues = classes[style];
    const styleValue = `${style}-${propertyValues[event.target.value]}`;
    if (isWrapper) {
      this.wrapperClasses = twMerge(this.wrapperClasses, styleValue);
    } else {
      this.classes = twMerge(this.classes, styleValue);
    }
  },
}));

Alpine.start();
