import React, { useState, useMemo } from "react";
import FAQHero from "../components/FAQHero.jsx";
import FAQQuickCategories from "../components/FAQQuickCategories.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";

// ——— SOURCE OF TRUTH: all FAQs grouped into themed categories
const CATS = [
  {
    id: "getting-started",
    title: "Getting started",
    icon: "🚀",
    items: [
      { q: "What is Rent It?", a: "Rent It is a peer-to-peer and business-friendly rental marketplace. It lets you rent out your underused items or borrow what you need — all through a simple, secure mobile app." },
      { q: "How does Rent It work for renters and lenders?", a: "As a renter, you browse, book, and pick up items from locals or businesses. As a lender, you list your items, manage bookings, and earn income — all from your phone." },
      { q: "Is Rent It available in my area?", a: "Rent It is available across New Zealand and expanding fast. Enter your location in the app to see what’s nearby." },
      { q: "Do I need an account to browse items?", a: "Nope — you can browse freely. To rent or list, you’ll need an account so we can keep everything safe and secure." },
      { q: "Where can I download the app?", a: "Rent It is available on the App Store (iOS) and Google Play (Android). Search “Rent It” and look for our logo." },
      { q: "Is there a desktop version of Rent It?", a: "Not yet — Rent It is currently mobile-only for convenience and security." },
    ],
  },
  {
    id: "safety-trust",
    title: "Safety & trust",
    icon: "🛡️",
    items: [
      { q: "Is it safe to rent from people I don’t know?", a: "Yes. We verify users, handle payments securely, and hold bonds for protection. Reviews and ratings help build a trusted community." },
      { q: "How do ratings and reviews work?", a: "After each rental, both parties can leave a rating and short review. These build trust and help others make informed decisions." },
      { q: "What if something goes wrong during a rental?", a: "Report the issue in the app (e.g., damage or no-show). Our support team reviews the situation and helps resolve it fairly." },
      { q: "How is my personal information protected?", a: "Your data is encrypted and handled securely. We never share information without consent and follow NZ privacy standards." },
      { q: "What if the other person doesn’t show up?", a: "Report a missed pickup/return in the app. We log incidents and may take action — including warnings, late fees, or account review." },
    ],
  },
  {
    id: "payments-fees",
    title: "Payments & fees",
    icon: "💳",
    items: [
      { q: "How are payments handled?", a: "Payments are processed securely through the app. At booking, part of the payment and bond are charged. The remainder is charged at pickup confirmation." },
      { q: "When is the bond charged and refunded?", a: "The bond is charged at booking and held securely. Once the item is returned and confirmed, the bond is automatically refunded." },
      { q: "What are the platform fees and what do they cover?", a: "Rent It charges a 12% total fee — 6% from the renter and 6% from the lender. This supports secure payments, customer service, insurance systems, and product development." },
      { q: "What happens if a rental is cancelled?", a: "If you cancel within the allowed window (half the time before the rental), you’ll get a full refund. After that, a small cancellation fee applies. See the full policy in-app." },
    ],
  },
  {
    id: "scheduling",
    title: "Scheduling & pickups",
    icon: "🗓️",
    items: [
      { q: "How do I schedule a pickup and return?", a: "When booking, the renter selects a preferred pickup time. The lender can accept or suggest a new time. Once confirmed, both parties get reminders." },
      { q: "Can I change or reschedule my rental time?", a: "Yes — propose a new time before the rental starts. Each party can send up to 3 suggestions before the booking must be confirmed or cancelled." },
    ],
  },
  {
    id: "listing-business",
    title: "Listing & business",
    icon: "🧰",
    items: [
      { q: "How do I list an item for rent?", a: "Go to the My Listings tab, upload photos, add a title, description, and price, and set your availability. It only takes a few minutes!" },
      { q: "Can I rent out my items as a business?", a: "Absolutely. Businesses are welcome to list items, manage bookings, and reach more customers through Rent It." },
      { q: "What kind of items can I list?", a: "Everything from bikes, tools, and electronics to clothing, camping gear, and more. As long as it’s legal, safe, and you own it — you’re good to go." },
      { q: "How do I set prices and availability?", a: "Choose your own pricing and availability when creating a listing. You can update them anytime in the app." },
    ],
  },
  {
    id: "support",
    title: "Support",
    icon: "💬",
    items: [
      { q: "Who do I contact if I need help or support?", a: "Use the Contact tab in the app or our website’s contact form. Our support team is here to help!" },
    ],
  },
];

export default function FAQPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    if (!query.trim()) return CATS;
    const q = query.toLowerCase();
    return CATS.map(c => ({
      ...c,
      items: c.items.filter(it =>
        it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q)
      ),
    })).filter(c => c.items.length > 0);
  }, [query]);

  return (
    <>
      <FAQHero query={query} setQuery={setQuery} />
      <FAQQuickCategories cats={CATS} />
      <FAQAccordion cats={filtered} />
    </>
  );
}
