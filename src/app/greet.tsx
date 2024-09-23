"use client";

import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { offlineVerify } from "@/utils/n20-verify";

export default function Greet() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    invoke<string>("greet", { name: "Next.js" })
      .then((result) => setGreeting(result))
      .catch(console.error);
  }, []);

  useEffect(() => {
    console.log(offlineVerify);
  }, []);

  // Necessary because we will have to use Greet as a component later.
  return <div>{greeting}</div>;
}
