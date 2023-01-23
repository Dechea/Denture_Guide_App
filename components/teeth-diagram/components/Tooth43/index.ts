import dynamic from "next/dynamic";

export const Tooth43 = dynamic(() => import("./Tooth43").then((comp) => comp.Tooth43), { ssr: false });
