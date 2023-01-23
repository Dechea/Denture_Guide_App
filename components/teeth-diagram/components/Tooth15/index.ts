import dynamic from "next/dynamic";

export const Tooth15 = dynamic(() => import("./Tooth15").then((comp) => comp.Tooth15), { ssr: false });
