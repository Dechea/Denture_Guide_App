import dynamic from "next/dynamic";

export const Tooth14 = dynamic(() => import("./Tooth14").then((comp) => comp.Tooth14), { ssr: false });
