import dynamic from "next/dynamic";

export const Tooth36 = dynamic(() => import("./Tooth36").then((comp) => comp.Tooth36), { ssr: false });
