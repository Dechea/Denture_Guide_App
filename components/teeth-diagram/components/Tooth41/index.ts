import dynamic from "next/dynamic";

export const Tooth41 = dynamic(() => import("./Tooth41").then((comp) => comp.Tooth41), { ssr: false });
