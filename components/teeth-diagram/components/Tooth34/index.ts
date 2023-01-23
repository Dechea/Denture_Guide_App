import dynamic from "next/dynamic";

export const Tooth34 = dynamic(() => import("./Tooth34").then((comp) => comp.Tooth34), { ssr: false });
