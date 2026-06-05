"use client";

import { useEffect } from "react";

export default function FAQRedirect() {
  useEffect(() => {
    const hash = window.location.hash || "#faq";
    window.location.replace(`/${hash}`);
  }, []);

  return null;
}
