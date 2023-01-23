import dynamic from "next/dynamic";

export const Tooth45 = dynamic(() => import("./Tooth45").then((comp) => comp.Tooth45), { ssr: false });
