import dynamic from "next/dynamic";

export const Tooth27 = dynamic(() => import("./Tooth27").then((comp) => comp.Tooth27), { ssr: false });
