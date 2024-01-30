"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("3bc28af5-8409-447c-a477-56e37dae3041");
  }, []);

  return null;
};
