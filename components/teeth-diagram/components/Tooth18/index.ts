import dynamic from "next/dynamic";

export const Tooth18 = dynamic(() => import("./Tooth18").then((comp) => comp.Tooth18), { ssr: false });
