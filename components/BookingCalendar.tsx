"use client";

import Script from "next/script";
import { useEffect } from "react";

const IFRAME_ID = "O36Ump0KdtxoELPOrmh2_1778413305395";

export default function BookingCalendar() {
  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        const height =
          data?.height ??
          data?.frameHeight ??
          data?.iframeHeight ??
          data?.calendarHeight;
        if (typeof height === "number" && height > 100) {
          const el = document.getElementById(IFRAME_ID) as HTMLIFrameElement | null;
          if (el) el.style.height = height + "px";
        }
      } catch {}
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <>
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/O36Ump0KdtxoELPOrmh2"
        style={{ width: "100%", border: "none", overflow: "hidden", height: "750px" }}
        scrolling="no"
        id={IFRAME_ID}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
