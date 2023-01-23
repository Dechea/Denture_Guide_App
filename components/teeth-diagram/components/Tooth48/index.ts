import dynamic from "next/dynamic";

export const Tooth48 = dynamic(() => import("./Tooth48").then((comp) => comp.Tooth48), { ssr: false });
