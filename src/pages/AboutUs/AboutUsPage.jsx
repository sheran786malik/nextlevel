export default function AboutUsPage() {
    const values = [
      {
        title: "Compassion",
        body: "We lead with empathy, patience and understanding, recognising that every young person’s journey is unique.",
      },
      {
        title: "Safety",
        body: "We create environments where young people feel emotionally and physically safe, supported and respected.",
      },
      {
        title: "Growth",
        body: "We believe every child and young person deserves the opportunity to rebuild confidence and reach their potential.",
      },
      {
        title: "Integrity",
        body: "We work transparently and collaboratively with families, schools, local authorities and professionals.",
      },
    ];
  
    const aims = [
      "Provide safe, nurturing and structured environments for vulnerable young people.",
      "Support children and young people experiencing barriers to mainstream education.",
      "Promote emotional wellbeing, confidence and resilience.",
      "Deliver tailored educational and personal development pathways.",
      "Work collaboratively with families, schools and local authorities.",
      "Encourage independence, aspiration and positive long-term outcomes.",
    ];
  
    return (
      <main className="min-h-screen bg-[#F8F5EF] text-[#163826]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#0D1F17] px-5 py-32 text-white sm:px-8 lg:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1F5C3A_0%,transparent_45%)]" />
  
          <div className="relative mx-auto max-w-6xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-12 bg-[#E4BC72]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#E4BC72]">
                About Us
              </span>
            </div>
  
            <h1 className="max-w-4xl font-serif text-5xl font-light leading-[1] sm:text-6xl lg:text-7xl">
              Helping young people feel safe, supported and understood.
            </h1>
  
            <p className="mt-8 max-w-3xl text-base font-light leading-8 text-white/70 sm:text-lg">
              Next Level Support Services is a specialist organisation providing
              educational support, alternative provision and accommodation services
              for children and young people across the UK.
            </p>
          </div>
        </section>
  
        {/* INTRODUCTION */}
        <section className="px-5 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-10 bg-[#C5973A]" />
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5973A]">
                  Introduction
                </span>
              </div>
  
              <h2 className="font-serif text-5xl font-light leading-tight sm:text-6xl">
                Building brighter pathways for young people.
              </h2>
            </div>
  
            <div className="space-y-6 text-[15px] font-light leading-8 text-[#4A5568] sm:text-base">
              <p>
                At Next Level Support Services, we understand that some young
                people require a different approach to education and support.
                Many of the children and young people we work with have faced
                significant challenges including EBSA, trauma, instability,
                disrupted education or unmet emotional needs.
              </p>
  
              <p>
                Our role is to provide safe, structured and nurturing support that
                helps young people rebuild trust, confidence and engagement with
                education and daily life.
              </p>
  
              <p>
                We work closely with local authorities, schools, carers and
                families to create tailored pathways that place the wellbeing and
                long-term outcomes of the young person at the centre of everything
                we do.
              </p>
            </div>
          </div>
        </section>
  
        {/* VALUES */}
        <section className="bg-white px-5 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-10 bg-[#C5973A]" />
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5973A]">
                  Our Values
                </span>
              </div>
  
              <h2 className="font-serif text-5xl font-light leading-tight sm:text-6xl">
                The principles that guide our work.
              </h2>
            </div>
  
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-3xl border border-black/5 bg-[#F8F5EF] p-8 shadow-sm"
                >
                  <h3 className="font-serif text-3xl text-[#163826]">
                    {value.title}
                  </h3>
  
                  <p className="mt-4 text-sm font-light leading-7 text-[#4A5568]">
                    {value.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* MISSION */}
        <section className="bg-[#163826] px-5 py-24 text-white sm:px-8 lg:px-10">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto mb-5 h-px w-14 bg-[#E4BC72]" />
  
            <span className="text-xs uppercase tracking-[0.3em] text-[#E4BC72]">
              Our Mission
            </span>
  
            <h2 className="mt-6 font-serif text-5xl font-light leading-tight sm:text-6xl">
              To empower vulnerable young people through compassionate support,
              safe environments and meaningful opportunities for growth.
            </h2>
  
            <p className="mx-auto mt-8 max-w-3xl text-[15px] font-light leading-8 text-white/70 sm:text-base">
              We are committed to helping every young person feel valued, heard
              and capable of achieving positive outcomes regardless of the
              challenges they may have faced.
            </p>
          </div>
        </section>
  
        {/* AIMS */}
        <section className="px-5 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-10 bg-[#C5973A]" />
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5973A]">
                  Our Aims
                </span>
              </div>
  
              <h2 className="font-serif text-5xl font-light leading-tight sm:text-6xl">
                What we strive to achieve every day.
              </h2>
            </div>
  
            <div className="grid gap-5 md:grid-cols-2">
              {aims.map((aim) => (
                <div
                  key={aim}
                  className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm"
                >
                  <div className="mt-1 h-3 w-3 rounded-full bg-[#C5973A]" />
  
                  <p className="text-[15px] font-light leading-7 text-[#4A5568]">
                    {aim}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }