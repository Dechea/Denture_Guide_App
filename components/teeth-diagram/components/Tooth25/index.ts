import dynamic from "next/dynamic";

export const Tooth25 = dynamic(() => import("./Tooth25").then((comp) => comp.Tooth25), { ssr: false });
