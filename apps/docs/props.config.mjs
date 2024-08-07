export default {
  theme: {
    borderRadius: {
      path: "/border-radius/",
      props: ["rounded"],
    },
    boxShadow: {
      path: "/box-shadow/",
      props: ["shadow"],
    },
    colors: [
      {
        path: "/background-color/",
        props: ["bg"],
      },
      {
        path: "/border-color/",
        props: ["borderColor"],
      },
      {
        path: "/text-color/",
        props: ["color"],
      },
    ],
    fontFamily: {
      path: "/font-family/",
      props: ["fontFamily"],
    },
    fontSize: {
      path: "/font-size/",
      props: ["fontSize"],
    },
    letterSpacing: {
      path: "/letter-spacing/",
      props: ["tracking"],
    },
    lineHeight: {
      path: "/line-height/",
      props: ["leading"],
    },
    size: [
      { path: "/height/", props: ["h"] },
      { path: "/size/", props: ["size"] },
      { path: "/width/", props: ["w"] },
    ],
    spacing: [
      { path: "/gap/", props: ["gap"] },
      {
        path: "/margin/",
        props: ["m", "mb", "ml", "mr", "mt", "mx", "my"],
      },
      {
        path: "/padding/",
        props: ["p", "pb", "pl", "pr", "pt", "px", "py"],
      },
    ],
  },
};
