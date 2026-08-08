'use client';

import { useState, type FormEvent } from 'react';

const CONTACT_EMAIL = 'rajeshbantawarai90@gmail.com';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${name || 'website'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  const inputClass =
    'w-full bg-transparent border-b border-line py-3 text-sm text-bone placeholder:text-mute/60 focus:outline-none focus:border-brass transition-colors';

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-mute">
          Name
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-mute">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-mute">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your shoot — date, location, and what you have in mind."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center border border-bone/30 px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-bone hover:text-ink transition-colors"
      >
        Send Inquiry
      </button>
    </form>
  );
}
