import dynamic from "next/dynamic";

export const Tooth35 = dynamic(() => import("./Tooth35").then((comp) => comp.Tooth35), { ssr: false });
