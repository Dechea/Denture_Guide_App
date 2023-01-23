import dynamic from "next/dynamic";

export const Tooth21 = dynamic(() => import("./Tooth21").then((comp) => comp.Tooth21), { ssr: false });
