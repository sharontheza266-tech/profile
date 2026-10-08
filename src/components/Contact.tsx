import { Mail, Phone, MapPin, Send, Linkedin, MessageCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Contact() {
  const contactItems = [
    { icon: Mail, label: 'Email', value: 'sharon.l.theza@email.com', href: 'mailto:sharon.l.theza@email.com' },
    { icon: Phone, label: 'Phone', value: '+27 (0)00 000 0000', href: 'tel:+27000000000' },
    { icon: MapPin, label: 'Location', value: 'South Africa', href: undefined },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact Information"
          title="Get in Touch"
          icon={<Mail size={14} />}
          description="I'm actively seeking internships, learnerships, and entry-level opportunities. Let's connect and explore how I can contribute to your organisation."
        />

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="reveal space-y-4">
            {contactItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className={`flex items-center gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/60 hover:border-primary-300 hover:bg-primary-50/30 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 group ${!item.href ? 'cursor-default' : ''}`}
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200/60 flex items-center justify-center group-hover:bg-primary-500 group-hover:border-primary-500 transition-all duration-300">
                  <item.icon size={22} className="text-neutral-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-neutral-900">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            <div className="flex gap-3 pt-2">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: MessageCircle, label: 'WhatsApp' },
              ].map((social, i) => (
                <button
                  key={i}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 text-white text-sm font-medium hover:bg-primary-600 transition-colors duration-300"
                >
                  <social.icon size={18} />
                  {social.label}
                </button>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                form.reset();
                const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                if (btn) {
                  const original = btn.innerHTML;
                  btn.innerHTML = 'Message Sent!';
                  btn.classList.add('bg-secondary-500');
                  setTimeout(() => {
                    btn.innerHTML = original;
                    btn.classList.remove('bg-secondary-500');
                  }, 2500);
                }
              }}
              className="p-8 rounded-3xl bg-gradient-to-br from-neutral-900 to-primary-950 text-white shadow-2xl shadow-primary-900/20"
            >
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-white/60 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-primary-400 focus:bg-white/10 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/60 mb-1.5">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-primary-400 focus:bg-white/10 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/60 mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="I'd like to discuss an opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-primary-400 focus:bg-white/10 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm shadow-lg shadow-primary-500/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
