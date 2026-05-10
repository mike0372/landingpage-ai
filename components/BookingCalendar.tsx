"use client";

import Script from "next/script";

export default function BookingCalendar() {
  return (
    <>
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/O36Ump0KdtxoELPOrmh2"
        style={{ width: "100%", border: "none", overflow: "hidden" }}
        scrolling="no"
        id="O36Ump0KdtxoELPOrmh2_1778413305395"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}
