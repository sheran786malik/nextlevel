export default function Footer() {
    return (
      <footer className="bg-[#0D1F17] px-5 pb-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-8 text-center text-xs text-white/25 sm:flex sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} Next Level. All rights reserved.</p>
          <p className="mt-3 sm:mt-0">Registered in England & Wales</p>
        </div>
      </footer>
    );
  }
  