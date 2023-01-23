import dynamic from "next/dynamic";

export const Tooth12 = dynamic(() => import("./Tooth12").then((comp) => comp.Tooth12), { ssr: false });
