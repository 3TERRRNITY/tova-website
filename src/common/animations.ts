export const textAnimation = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.7 },
  }),
};

export const lineAnimation = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "100%",
    transition: {
      duration: 0.7,
    },
  },
};

export const opacityAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
