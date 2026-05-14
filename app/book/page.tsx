import type { Metadata } from "next";
import BookNavbar from "@/components/BookNavbar";
import Footer from "@/components/Footer";
import BookingCalendar from "@/components/BookingCalendar";
import { Clock, Monitor, CheckCircle } from "lucide-react";

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
            <div className="book-video">
              <iframe
                src="https://www.youtube.com/embed/KLJErd2Szn0"
                title="AutoPilot AI Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="book-calendar">
              <BookingCalendar />
            </div>

            <div className="call-expect">
              <p className="call-expect-heading">What to Expect on the Call</p>
              <div className="call-expect-items">
                <div className="call-expect-item">
                  <Clock className="call-expect-icon" size={18} strokeWidth={1.75} />
                  <span className="call-expect-title">25 Minutes</span>
                  <span className="call-expect-text">Straight to the point. No fluff.</span>
                </div>
                <div className="call-expect-item">
                  <Monitor className="call-expect-icon" size={18} strokeWidth={1.75} />
                  <span className="call-expect-title">Live Demo</span>
                  <span className="call-expect-text">You&apos;ll see the AI handle a real call in real time.</span>
                </div>
                <div className="call-expect-item">
                  <CheckCircle className="call-expect-icon" size={18} strokeWidth={1.75} />
                  <span className="call-expect-title">Clear Answer</span>
                  <span className="call-expect-text">By the end, you&apos;ll know if this fits — no pressure either way.</span>
                </div>
              </div>
              <p className="call-expect-guarantee">First install guaranteed or full refund. No long-term contracts.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
