import dynamic from "next/dynamic";

export const Tooth37 = dynamic(() => import("./Tooth37").then((comp) => comp.Tooth37), { ssr: false });
