import dynamic from "next/dynamic";

export const Tooth11 = dynamic(() => import("./Tooth11").then((comp) => comp.Tooth11), { ssr: false });
