"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

import { useUser } from "@clerk/nextjs";

const CrispChat = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      Crisp.configure(process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID);
      Crisp.user.setEmail(user.primaryEmailAddress);
      Crisp.user.setNickname(user.fullName);
    }
  });

  return null;
};

export default CrispChat;
