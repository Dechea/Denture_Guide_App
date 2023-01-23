import dynamic from "next/dynamic";

export const Tooth38 = dynamic(() => import("./Tooth38").then((comp) => comp.Tooth38), { ssr: false });
