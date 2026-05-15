

export default function ReferralModal({ open, onClose }) {
    if (!open) return null;
  
    function handleSubmit(event) {
      event.preventDefault();
  
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData.entries());
  
      console.log("Referral submitted:", data);
  
      onClose();
    }
  
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm">
        <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-[#F8F5EF] shadow-2xl">
          <div className="sticky top-0 z-10 flex items-start justify-between border-b border-black/10 bg-[#F8F5EF] px-6 py-5 sm:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5973A]">
                Referral Form
              </p>
              <h2 className="mt-2 font-serif text-3xl font-light text-[#163826] sm:text-4xl">
                Make a Referral
              </h2>
            </div>
  
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-[#163826] px-3 py-1.5 text-sm text-white transition hover:bg-[#1F5C3A]"
              aria-label="Close referral form"
            >
              ✕
            </button>
          </div>
  
          <form onSubmit={handleSubmit} className="space-y-6 px-6 py-7 sm:px-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#163826]">
                  Your name
                </label>
                <input
                  name="referrerName"
                  required
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C5973A] focus:ring-4 focus:ring-[#C5973A]/10"
                  placeholder="Full name"
                />
              </div>
  
              <div>
                <label className="mb-2 block text-sm font-medium text-[#163826]">
                  Your role
                </label>
                <input
                  name="referrerRole"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C5973A] focus:ring-4 focus:ring-[#C5973A]/10"
                  placeholder="Parent, carer, school, LA officer..."
                />
              </div>
  
              <div>
                <label className="mb-2 block text-sm font-medium text-[#163826]">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C5973A] focus:ring-4 focus:ring-[#C5973A]/10"
                  placeholder="you@example.com"
                />
              </div>
  
              <div>
                <label className="mb-2 block text-sm font-medium text-[#163826]">
                  Phone number
                </label>
                <input
                  name="phone"
                  type="tel"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C5973A] focus:ring-4 focus:ring-[#C5973A]/10"
                  placeholder="Contact number"
                />
              </div>
  
              <div>
                <label className="mb-2 block text-sm font-medium text-[#163826]">
                  Young person's name
                </label>
                <input
                  name="youngPersonName"
                  required
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C5973A] focus:ring-4 focus:ring-[#C5973A]/10"
                  placeholder="Full name"
                />
              </div>
  
              <div>
                <label className="mb-2 block text-sm font-medium text-[#163826]">
                  Age
                </label>
                <input
                  name="age"
                  type="number"
                  min="0"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C5973A] focus:ring-4 focus:ring-[#C5973A]/10"
                  placeholder="Age"
                />
              </div>
            </div>
  
            <div>
              <label className="mb-2 block text-sm font-medium text-[#163826]">
                Support needed
              </label>
              <select
                name="supportType"
                required
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C5973A] focus:ring-4 focus:ring-[#C5973A]/10"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a provision
                </option>
                <option value="EBSA Support">EBSA Support</option>
                <option value="Alternative Provision">
                  Alternative Provision
                </option>
                <option value="Supported Accommodation">
                  Supported Accommodation
                </option>
                <option value="Bespoke Curriculum">Bespoke Curriculum</option>
                <option value="General enquiry">General enquiry</option>
              </select>
            </div>
  
            <div>
              <label className="mb-2 block text-sm font-medium text-[#163826]">
                Referral details
              </label>
              <textarea
                name="details"
                rows="5"
                required
                className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C5973A] focus:ring-4 focus:ring-[#C5973A]/10"
                placeholder="Briefly explain the young person's situation, current school status, risks, needs, and what support is being requested."
              />
            </div>
  
            <div className="rounded-2xl border border-[#E4BC72]/40 bg-[#FBF0D8] p-4 text-sm leading-6 text-[#4A5568]">
              Please avoid sharing highly sensitive information unless necessary.
              A member of the team will contact you to discuss the referral
              securely.
            </div>
  
            <div className="flex flex-col-reverse gap-3 border-t border-black/10 pt-6 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-black/10 px-6 py-3 text-sm font-medium text-[#163826] transition hover:bg-white"
              >
                Cancel
              </button>
  
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-[#C5973A] to-[#E4BC72] px-7 py-3 text-sm font-semibold text-[#0D1F17] shadow-lg shadow-[#C5973A]/20 transition hover:-translate-y-0.5"
              >
                Submit Referral
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }