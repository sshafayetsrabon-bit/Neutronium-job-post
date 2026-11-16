import React, { useState } from 'react';
import { MessageSquare, Plus, FileText, Check, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [candidateName, setCandidateName] = useState('');
  const [candidateCity, setCandidateCity] = useState('Dhaka');
  const [candidateExp, setCandidateExp] = useState('');
  const [candidateIntro, setCandidateIntro] = useState('');

  const whatsappNumber = "8801761981646";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Job Application: Business Development & Sales Executive\n\n` +
      `Name: ${candidateName || '[Your Name]'}\n` +
      `City: ${candidateCity}\n` +
      `Experience: ${candidateExp || '[Your Experience]'}\n` +
      `Introduction: ${candidateIntro || '[Your Introduction]'}\n` +
      `${fileName ? `Attached CV/Profile: ${fileName}` : ''}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased selection:bg-black selection:text-white">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono text-xs uppercase tracking-widest font-semibold">Neutorium</div>
          <a 
            href="#apply" 
            className="text-xs uppercase tracking-wider font-mono bg-black text-white hover:bg-neutral-800 px-4 py-2 transition-colors inline-flex items-center space-x-1"
          >
            <span>Apply Now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Main Document Container */}
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-20">

        {/* Title & Metadata */}
        <div className="space-y-6 border-b border-neutral-200 pb-16">
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            Official Job Circular • Neutorium
          </div>
          
          <h1 className="text-3xl md:text-5xl font-normal tracking-tight leading-[1.15]">
            Business Development & Sales Executive
          </h1>

          <p className="text-base text-neutral-600 max-w-2xl leading-relaxed">
            Full-time opportunity after successful evaluation. Remote coordination + Field Sales + Business Networking across Dhaka, Rajshahi, Sylhet and Chattogram, Bangladesh.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 font-mono text-xs">
            <div className="border border-neutral-200 p-3.5">
              <span className="text-neutral-400 block mb-1">POSITION</span>
              <span className="font-semibold text-black">Full-Time</span>
            </div>
            <div className="border border-neutral-200 p-3.5">
              <span className="text-neutral-400 block mb-1">WORK MODE</span>
              <span className="font-semibold text-black">Hybrid / Field</span>
            </div>
            <div className="border border-neutral-200 p-3.5">
              <span className="text-neutral-400 block mb-1">BASE SALARY</span>
              <span className="font-semibold text-black">৳20k–৳25k / mo</span>
            </div>
            <div className="border border-neutral-200 p-3.5">
              <span className="text-neutral-400 block mb-1">COMMISSION</span>
              <span className="font-semibold text-black">5% Per Deal</span>
            </div>
          </div>
        </div>

        {/* Section 1: About Neutorium */}
        <section className="space-y-4">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500">1. About Neutorium</h2>
          <div className="space-y-4 text-sm text-neutral-800 leading-relaxed">
            <p>
              Neutorium is an industry-focused intellectual company working at the intersection of neuromarketing, human psychology, customer behavioural patterns, brand positioning and business development.
            </p>
            <p>
              Our primary interest is understanding how the human brain works, how people perceive products and brands, what influences their decisions, and how businesses can develop stronger relationships with their customers.
            </p>
            <p>
              We study how human needs, emotions, motivations and aspirations influence purchasing behaviour, brand perception and decision-making. Using insights from neuroscience, human psychology, behavioural patterns and data-informed research, Neutorium develops strategies and systems that help businesses achieve their ideal market position.
            </p>
            <div className="border border-neutral-200 p-6 space-y-3 bg-neutral-50">
              <p className="font-medium text-black">Our work focuses particularly on:</p>
              <ul className="list-disc list-inside space-y-1.5 text-neutral-700 pl-2">
                <li>Neuromarketing and customer behavioural patterns.</li>
                <li>Understanding how customers interact with products and brands.</li>
                <li>Brand positioning and customer perception.</li>
                <li>Customer trust and decision-making.</li>
                <li>Business development and client acquisition.</li>
                <li>Research-driven business strategies and practical execution systems.</li>
              </ul>
            </div>
            <p>
              We do not believe in applying generic strategies to every business. Each business has different customers, market conditions, operational challenges and opportunities. Our approach is to understand those differences and develop suitable strategies.
            </p>
            <p>
              Neutorium delivers its intellectual frameworks through specialised services and systems. These extend beyond conventional content publishing or routine promotional activities.
            </p>
            <p>
              Our service portfolio includes research and positioning, brand development, digital presence, website and product development, content and film production, custom AI agents and sales-management solutions.
            </p>
            <p>
              <strong>Website:</strong> <a href="https://neutorium.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 font-mono text-xs">https://neutorium.com</a>
            </p>
          </div>
        </section>

        {/* Section 2: About the Position */}
        <section className="space-y-4 pt-8 border-t border-neutral-200">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500">2. About the Position</h2>
          <div className="space-y-4 text-sm text-neutral-800 leading-relaxed">
            <p>
              Neutorium is looking for commercially minded, sales-oriented and professionally capable individuals who can identify business opportunities, connect with business owners and decision-makers, develop valuable client relationships and convert qualified prospects into paying clients.
            </p>
            <p className="font-medium text-black border-l-2 border-black pl-4 py-1">
              This is not a desk-only sales position.
            </p>
            <p>
              The role strongly focuses on field sales, direct business communication, relationship development and professional networking, supported by remote prospect research, cold calling, online outreach and follow-up activities.
            </p>
            <p>
              A successful candidate will represent Neutorium in business discussions, client meetings, professional gatherings and relevant networking opportunities. The objective is not simply to sell a service. It is to understand a prospective business, identify its requirements, communicate Neutorium's value and guide the prospect through a structured customer journey.
            </p>
          </div>
        </section>

        {/* Section 3: Sales Approach & Customer Journey */}
        <section className="space-y-4 pt-8 border-t border-neutral-200">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500">3. Sales Approach & Customer Journey</h2>
          <div className="space-y-4 text-sm text-neutral-800 leading-relaxed">
            <p>Neutorium follows a structured approach to business development:</p>
            <div className="grid grid-cols-1 gap-3 pt-2">
              {[
                { step: "01", title: "Prospect Research", desc: "Identify companies, business owners, founders and decision-makers who may benefit from Neutorium's services." },
                { step: "02", title: "Introduction & Initial Communication", desc: "Introduce Neutorium, establish professional communication and create an opportunity for further discussion." },
                { step: "03", title: "Business Understanding & Qualification", desc: "Understand the company's business model, challenges, market position and potential requirements." },
                { step: "04", title: "Business Discussion & Value Presentation", desc: "Explain relevant Neutorium services, demonstrate potential value and connect needs with suitable solutions." },
                { step: "05", title: "Meetings & Relationship Development", desc: "Arrange meetings, conduct field visits, address questions and build professional relationships." },
                { step: "06", title: "Negotiation & Closing", desc: "Discuss service agreements, handle objections, negotiate appropriate terms and close qualified opportunities." },
                { step: "07", title: "Client Handover & Relationship Management", desc: "Coordinate with the internal team to ensure a proper handover and maintain long-term professional relationships." }
              ].map((item, idx) => (
                <div key={idx} className="border border-neutral-200 p-4 flex items-start space-x-4">
                  <span className="font-mono text-xs text-neutral-400 font-bold">{item.step}</span>
                  <div>
                    <div className="font-medium text-black text-sm">{item.title}</div>
                    <div className="text-xs text-neutral-600 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Key Responsibilities */}
        <section className="space-y-4 pt-8 border-t border-neutral-200">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500">4. Key Responsibilities</h2>
          <div className="space-y-6 text-sm text-neutral-800 leading-relaxed">
            <div className="border border-neutral-200 p-6 space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-semibold">Business Development & Prospecting</h3>
              <ul className="list-disc list-inside space-y-1.5 text-neutral-700 pl-2">
                <li>Research and identify potential business clients.</li>
                <li>Find relevant companies, business owners and decision-makers.</li>
                <li>Identify market opportunities and potential partnerships.</li>
                <li>Build and maintain a qualified prospect database.</li>
              </ul>
            </div>

            <div className="border border-neutral-200 p-6 space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-semibold">Sales & Client Acquisition</h3>
              <ul className="list-disc list-inside space-y-1.5 text-neutral-700 pl-2">
                <li>Conduct cold calls, online outreach and professional follow-ups.</li>
                <li>Introduce Neutorium and communicate its services effectively.</li>
                <li>Understand prospective clients' business needs and identify opportunities.</li>
                <li>Arrange and attend client meetings and field visits.</li>
                <li>Negotiate service agreements and close qualified deals.</li>
              </ul>
            </div>

            <div className="border border-neutral-200 p-6 space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-semibold">Field Networking & Representation</h3>
              <ul className="list-disc list-inside space-y-1.5 text-neutral-700 pl-2">
                <li>Build professional connections with business owners and founders.</li>
                <li>Attend relevant business meetings, networking events and industry gatherings.</li>
                <li>Represent Neutorium professionally during external discussions.</li>
                <li>Identify referral opportunities and potential business partnerships.</li>
              </ul>
            </div>

            <div className="border border-neutral-200 p-6 space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-semibold">Reporting & Internal Coordination</h3>
              <ul className="list-disc list-inside space-y-1.5 text-neutral-700 pl-2">
                <li>Maintain lead records and follow-up schedules.</li>
                <li>Submit daily activity reports.</li>
                <li>Coordinate with the internal team throughout the sales process.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Training & Performance Evaluation */}
        <section className="space-y-4 pt-8 border-t border-neutral-200">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500">5. Training & Performance Evaluation</h2>
          <div className="space-y-6 text-sm text-neutral-800 leading-relaxed">
            
            <div className="border border-neutral-200 p-6 space-y-3">
              <div className="font-mono text-xs text-neutral-400 uppercase">Phase 1 (3–5 Days)</div>
              <h3 className="font-medium text-base">Introductory Training</h3>
              <p>Selected candidates will receive introductory training covering three essential areas:</p>
              <ul className="list-disc list-inside space-y-1.5 text-neutral-700 pl-2">
                <li><strong>Product Understanding:</strong> What Neutorium does, service categories, and value provided.</li>
                <li><strong>Role & Contribution:</strong> Prospecting, approaching decision-makers, and managing the sales journey.</li>
                <li><strong>Business & Human Behaviour:</strong> Introductory business concepts, branding, and customer behaviour.</li>
              </ul>
            </div>

            <div className="border border-black p-6 space-y-3 bg-neutral-50">
              <div className="font-mono text-xs text-black uppercase font-bold">Phase 2 (25 Days) • Critical KPI</div>
              <h3 className="font-medium text-base">Performance Evaluation</h3>
              <div className="bg-white border border-black p-4 my-2">
                <div className="font-mono text-xs text-neutral-500 uppercase">Primary KPI Target</div>
                <div className="font-bold text-black mt-1 text-base">Successfully close at least one qualifying service contract</div>
              </div>
              <p>
                A deal will be considered successfully closed when the client agrees to terms, the contract is signed, and the initial advance payment is made.
              </p>
            </div>

            <div className="border border-neutral-200 p-6 space-y-3">
              <div className="font-mono text-xs text-neutral-400 uppercase">Phase 3</div>
              <h3 className="font-medium text-base">Permanent Appointment</h3>
              <p>
                Candidates who successfully complete the KPI will be considered for permanent employment with confirmed salary, commission, and terms.
              </p>
            </div>

          </div>
        </section>

        {/* Section 6: Salary, Commission & Benefits */}
        <section className="space-y-4 pt-8 border-t border-neutral-200">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500">6. Salary, Commission & Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="border border-neutral-200 p-6 space-y-2">
              <div className="font-mono text-xs text-neutral-400 uppercase">Monthly Salary</div>
              <div className="text-lg font-semibold">৳20,000–৳25,000</div>
              <p className="text-xs text-neutral-600">Standard range. Exceptional candidates with proven records may negotiate ৳30,000+.</p>
            </div>

            <div className="border border-neutral-200 p-6 space-y-2">
              <div className="font-mono text-xs text-neutral-400 uppercase">KPI Completion Bonus</div>
              <div className="text-lg font-semibold">৳5,000 Bonus</div>
              <p className="text-xs text-neutral-600">Provided upon successful completion of the specified performance KPI.</p>
            </div>

            <div className="border border-neutral-200 p-6 space-y-2">
              <div className="font-mono text-xs text-neutral-400 uppercase">Sales Commission</div>
              <div className="text-lg font-semibold">5% Commission</div>
              <p className="text-xs text-neutral-600">On each successfully closed deal, payable after contract and advance payment.</p>
            </div>

            <div className="border border-neutral-200 p-6 space-y-2">
              <div className="font-mono text-xs text-neutral-400 uppercase">Travel Support</div>
              <div className="text-lg font-semibold">Allowance / Reimbursement</div>
              <p className="text-xs text-neutral-600">Provided for approved work-related travel and field visits.</p>
            </div>
          </div>
        </section>

        {/* Sections 7–13: Logistics & Profile */}
        <section className="space-y-6 pt-8 border-t border-neutral-200">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500">7–13. Location, Shifts & Candidate Profile</h2>
          
          <div className="space-y-4 text-sm text-neutral-800 leading-relaxed">
            <div className="border border-neutral-200 p-6 space-y-2">
              <h3 className="font-medium">Work Location & Arrangement</h3>
              <p>
                Neutorium operates its physical office in Naogaon, Bangladesh. While there is no Dhaka office currently, most coordination happens in Dhaka. Candidates in <strong>Dhaka, Rajshahi, Sylhet, and Chattogram</strong> receive priority consideration.
              </p>
            </div>

            <div className="border border-neutral-200 p-6 space-y-2">
              <h3 className="font-medium">Daily Reporting & Attendance</h3>
              <p>
                Daily reporting is mandatory at the end of each working day covering prospects contacted, calls made, meetings/field visits attended, and sales progress.
              </p>
            </div>

            <div className="border border-neutral-200 p-6 space-y-2">
              <h3 className="font-medium">Working Hours & Shifts</h3>
              <p>
                <strong>National Shift:</strong> 9:00 AM – 4:00 PM or 10:00 AM – 5:00 PM (includes 1-hour lunch break). Working days: Saturday to Thursday. Weekly Holiday: Friday.
              </p>
              <p className="text-xs text-neutral-500 mt-1">International Shift (night shifts for overseas markets) is not currently open.</p>
            </div>

            <div className="border border-neutral-200 p-6 space-y-2">
              <h3 className="font-medium">Essential Capabilities & Personal Qualities</h3>
              <p>
                Understanding of business models, marketing, sales, customer behaviour, brand positioning, and professional networking. Key qualities include self-discipline, confidence without arrogance, accountability, persistence, and willingness to conduct fieldwork.
              </p>
            </div>

            <div className="border border-neutral-200 p-6 space-y-2">
              <h3 className="font-medium">Who Should Apply?</h3>
              <p>
                Previous employment experience and a university degree are not mandatory. Experienced candidates in B2B sales, corporate sales, entrepreneurship, and networking are strongly encouraged. Fresh candidates with strong business understanding are also welcome.
              </p>
            </div>
          </div>
        </section>

        {/* Section 14: How to Apply & WhatsApp Upload */}
        <section id="apply" className="space-y-8 pt-8 border-t border-neutral-200">
          <div className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500">14. How to Apply</h2>
            <p className="text-sm text-neutral-800">
              Interested candidates can apply through WhatsApp.
            </p>
            <div className="border border-black p-4 font-mono text-base font-bold bg-neutral-50 inline-block">
              WhatsApp: +{whatsappNumber}
            </div>
            <p className="text-sm text-neutral-700">Please send:</p>
            <ol className="list-decimal list-inside space-y-1.5 text-sm text-neutral-700 pl-2">
              <li>Updated CV or a brief professional profile.</li>
              <li>Current location.</li>
              <li>Previous sales, business, entrepreneurship or relevant experience, if any.</li>
              <li>A short introduction explaining why you are suitable for this position. (A short video is also welcome).</li>
              <li>Preferred working arrangement and availability for fieldwork.</li>
              <li>Any relevant business connections, networking experience or previous achievements.</li>
            </ol>
          </div>

          {/* WhatsApp Sender & File Upload Widget */}
          <div className="border border-black p-8 space-y-6 bg-white shadow-sm">
            <div className="space-y-1">
              <h3 className="text-base font-medium">Send application via WhatsApp</h3>
              <p className="text-xs text-neutral-500">
                Provide your brief professional profile and attach your CV file below, then click to send.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="block text-xs uppercase tracking-wider text-neutral-600 font-mono">Your Name</label>
                <input 
                  type="text"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  placeholder="e.g. Tanvir Ahmed"
                  className="w-full border border-neutral-300 p-3 text-sm bg-white focus:outline-none focus:border-black rounded-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-neutral-600 font-mono">Current Location</label>
                  <input 
                    type="text"
                    value={candidateCity}
                    onChange={(e) => setCandidateCity(e.target.value)}
                    placeholder="e.g. Dhaka"
                    className="w-full border border-neutral-300 p-3 text-sm bg-white focus:outline-none focus:border-black rounded-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-neutral-600 font-mono">Experience</label>
                  <input 
                    type="text"
                    value={candidateExp}
                    onChange={(e) => setCandidateExp(e.target.value)}
                    placeholder="e.g. 2 Years BD / Fresh"
                    className="w-full border border-neutral-300 p-3 text-sm bg-white focus:outline-none focus:border-black rounded-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs uppercase tracking-wider text-neutral-600 font-mono">Short Introduction</label>
                <textarea 
                  rows={3}
                  value={candidateIntro}
                  onChange={(e) => setCandidateIntro(e.target.value)}
                  placeholder="Briefly explain why you are suitable..."
                  className="w-full border border-neutral-300 p-3 text-sm bg-white focus:outline-none focus:border-black rounded-none resize-none"
                />
              </div>

              {/* CV Upload with Plus Icon */}
              <div className="flex items-center space-x-4 pt-2">
                <label className="cursor-pointer inline-flex items-center space-x-2 border border-black bg-white hover:bg-neutral-100 px-4 py-3 text-xs font-mono uppercase tracking-wider transition-colors">
                  <Plus className="w-4 h-4" />
                  <span>{fileName ? "Change CV File" : "Upload CV / Profile"}</span>
                  <input 
                    type="file" 
                    onChange={handleFileChange} 
                    className="hidden" 
                    accept=".pdf,.doc,.docx,.txt"
                  />
                </label>
                {fileName ? (
                  <div className="flex items-center space-x-2 text-xs text-neutral-800">
                    <FileText className="w-4 h-4 text-neutral-600" />
                    <span className="font-mono">{fileName}</span>
                    <Check className="w-3.5 h-3.5 text-black" />
                  </div>
                ) : (
                  <span className="text-xs text-neutral-500 font-mono">No file attached</span>
                )}
              </div>

              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="w-full bg-black text-white hover:bg-neutral-800 text-xs font-mono uppercase tracking-wider py-4 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send application via WhatsApp</span>
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-12 mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-2 text-xs font-mono text-neutral-500">
          <p className="uppercase tracking-widest text-black font-semibold">Neutorium</p>
          <p>Understand people. Understand businesses. Build relationships. Create opportunities. Deliver results.</p>
        </div>
      </footer>

    </div>
  );
}
