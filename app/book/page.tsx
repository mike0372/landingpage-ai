import type { Metadata } from "next";
import BookNavbar from "@/components/BookNavbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Book a Free Demo — AutoPilot AI",
  description: "See Sofia in action. In 30 minutes we'll show you exactly how she answers calls, books jobs, and pays for itself — live.",
};

export default function BookPage() {
  return (
    <>
      <BookNavbar />
      <section id="book">
        <div className="container">
          <div className="book-content">
            <div className="section-label">Free 30-Minute Demo</div>
            <h1 className="book-title">See Sofia in Action —<br />Live, On Your Business</h1>
            <p className="book-sub">
              Pick a time that works for you. We&apos;ll walk you through exactly how Sofia answers calls, qualifies leads, and books jobs for an HVAC business like yours — then answer every question you have. No pressure, no commitment.
            </p>
            <div className="book-calendar">
              {/* Calendar embed script goes here */}
              <p className="book-calendar-placeholder">Calendar loading…</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
