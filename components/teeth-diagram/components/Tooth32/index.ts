import dynamic from "next/dynamic";

export const Tooth32 = dynamic(() => import("./Tooth32").then((comp) => comp.Tooth32), { ssr: false });
