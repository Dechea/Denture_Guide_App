import dynamic from "next/dynamic";

export const Tooth24 = dynamic(() => import("./Tooth24").then((comp) => comp.Tooth24), { ssr: false });
