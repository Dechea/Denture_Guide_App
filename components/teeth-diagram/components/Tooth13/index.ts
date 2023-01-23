import dynamic from "next/dynamic";

export const Tooth13 = dynamic(() => import("./Tooth13").then((comp) => comp.Tooth13), { ssr: false });
