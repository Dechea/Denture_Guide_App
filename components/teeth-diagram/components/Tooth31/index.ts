import dynamic from "next/dynamic";

export const Tooth31 = dynamic(() => import("./Tooth31").then((comp) => comp.Tooth31), { ssr: false });
