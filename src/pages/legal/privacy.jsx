export const metadata = { title: "Privacy — Rent It" };

export default function PrivacyPage() {
  return (
    <main className="container-xy py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Privacy Policy</h1>

      <div className="h-[78vh] rounded-xl overflow-hidden border border-slate-200 bg-white">
        <iframe
          src="/legal/privacy.pdf#view=FitH&pagemode=none"
          className="w-full h-full"
          title="Privacy PDF"
        />
      </div>

      <div className="mt-3 text-sm text-slate-600">
        Can’t see the PDF?{" "}
        <a href="/legal/privacy.pdf" className="text-violet-600 underline" target="_blank" rel="noopener">
          Open in a new tab
        </a>{" "}
        or{" "}
        <a href="/legal/privacy.pdf" download className="text-violet-600 underline">
          download the PDF
        </a>.
      </div>
    </main>
  );
}
