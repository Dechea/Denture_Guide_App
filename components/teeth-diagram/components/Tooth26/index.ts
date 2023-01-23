import dynamic from "next/dynamic";

export const Tooth26 = dynamic(() => import("./Tooth26").then((comp) => comp.Tooth26), { ssr: false });
