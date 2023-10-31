import { proxy } from "valtio";

const state = proxy({
  intro: true, // on homepage or not
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
