import dynamic from "next/dynamic";

export const Tooth33 = dynamic(() => import("./Tooth33").then((comp) => comp.Tooth33), { ssr: false });
