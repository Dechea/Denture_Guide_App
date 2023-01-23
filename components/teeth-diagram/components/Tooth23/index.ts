import dynamic from "next/dynamic";

export const Tooth23 = dynamic(() => import("./Tooth23").then((comp) => comp.Tooth23), { ssr: false });
