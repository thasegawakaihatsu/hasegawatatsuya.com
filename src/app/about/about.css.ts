import { breakpoints } from "@/styles/styles.css";
import { keyframes, style } from "@vanilla-extract/css";

export const glassBox = style({
  position: "relative",
});

export const aboutHero = style({
  position: "relative",
  margin: "120px auto 40px",
  height: 480,
});
export const nameBox = style({
  position: "absolute",
  top: 120,
  left: 0,
  right: 0,
  zIndex: 50,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  pointerEvents: "none",
});
export const nameJa = style({
  fontSize: "12.8rem",
  color: "#fff",
  marginBottom: -36,
});
export const nameEn = style({
  fontSize: "14rem",
  fontWeight: 400,
  color: "#fff",
});
export const photoBox = style({
  position: "relative",
  width: "100%",
  height: "480px",
});
export const animatePhoto = keyframes({
  "0%": { transform: "rotate(0)" },
  "25%": { transform: "rotate(6deg)" },
  "50%": { transform: "rotate(0)" },
  "75%": { transform: "rotate(-6deg)" },
  "100%": { transform: "rotate(0)" },
});
export const photo = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  margin: "0 auto",
  animationName: animatePhoto,
  animationDuration: "8s",
  animationTimingFunction: "linear",
  animationIterationCount: "infinite",
});

export const profileLinkBox = style({
  display: "flex",
  gap: 24,
  justifyContent: "center",
  marginBottom: 80,
});
export const profileLinkIcon = style({
  width: 28,
  height: 28,
  color: "#fff",
  transition: "scale 0.3s ease",
  ":hover": {
    scale: 1.3,
  },
});

export const animateLine = keyframes({
  "0%": { transform: "translateY(-100%)" },
  "100%": { transform: "translateY(100%)" },
});
export const line = style({
  position: "relative",
  width: 1,
  height: 60,
  margin: "0 auto 120px",
  backgroundColor: "rgba(19, 0, 89, .3)",
  overflow: "hidden",
  ":before": {
    content: "",
    position: "absolute",
    width: 1,
    height: 60,
    backgroundColor: "#fff",
    animationName: animateLine,
    animationDuration: "1.6s",
    animationTimingFunction: "ease",
    animationIterationCount: "infinite",
  },
});

export const occupation = style({
  fontSize: "7.6rem",
  fontWeight: 300,
  color: "#fff",
  lineHeight: 1.2,
  textAlign: "center",
  marginBottom: 160,
});

export const description = style({
  fontSize: "2.4rem",
  fontWeight: 100,
  color: "#fff",
  letterSpacing: 1,
  lineHeight: 1.6,
  textAlign: "center",
  marginBottom: 300,
});

export const backToIndex = style({
  position: "absolute",
  bottom: 100,
  left: "clamp(40px, 15.2%, 300px)",
  fontSize: "2.0rem",
  fontWeight: 300,
  color: "#fff",
  textDecoration: "none",
  selectors: {
    "&::before": {
      content: "",
      position: "absolute",
      top: 28,
      display: "block",
      width: "100%",
      height: 12,
      backgroundColor: "#fff",
      transition: "height 0.3s ease",
    },
    "&:hover::before": {
      height: 1,
    },
  },
  "@media": {
    [breakpoints["2xl"]]: {
      left: "clamp(40px, 10%, 240px)",
    },
  },
});
