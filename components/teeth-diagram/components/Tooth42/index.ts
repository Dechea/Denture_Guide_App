import dynamic from "next/dynamic";

export const Tooth42 = dynamic(() => import("./Tooth42").then((comp) => comp.Tooth42), { ssr: false });
