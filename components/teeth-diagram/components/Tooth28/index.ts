import dynamic from "next/dynamic";

export const Tooth28 = dynamic(() => import("./Tooth28").then((comp) => comp.Tooth28), { ssr: false });
