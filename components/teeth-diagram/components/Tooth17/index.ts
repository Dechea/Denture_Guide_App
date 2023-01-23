import dynamic from "next/dynamic";

export const Tooth17 = dynamic(() => import("./Tooth17").then((comp) => comp.Tooth17), { ssr: false });
