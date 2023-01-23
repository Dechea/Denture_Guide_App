import dynamic from "next/dynamic";

export const Tooth44 = dynamic(() => import("./Tooth44").then((comp) => comp.Tooth44), { ssr: false });
