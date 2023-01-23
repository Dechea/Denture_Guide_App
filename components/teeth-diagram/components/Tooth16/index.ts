import dynamic from "next/dynamic";

export const Tooth16 = dynamic(() => import("./Tooth16").then((comp) => comp.Tooth16), { ssr: false });
