import dynamic from "next/dynamic";

export const Tooth22 = dynamic(() => import("./Tooth22").then((comp) => comp.Tooth22), { ssr: false });
