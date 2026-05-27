'use client'

import React from 'react'

type Paragraph = { text: string; id?: string | null }
type Props = {
  name: string; title: string; subtitle: string; introQuote: string
  paragraphs: Paragraph[]; pullQuote: string
}

export const StorySectionComponent: React.FC<Props> = ({
  name, title, subtitle, introQuote, paragraphs, pullQuote,
}) => (
  <section id="story" style={{ background: '#080c14', padding: '6rem 5%' }}>
    <div className="story-grid">
      <div className="portrait-wrap reveal">
        <div className="portrait-frame" style={{ position: 'relative', aspectRatio: '3/4', maxWidth: '360px', background: '#141b2a', border: '1px solid rgba(184,151,90,0.15)', overflow: 'hidden', borderRadius: '2px' }}>
          <div className="portrait-placeholder" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', background: 'linear-gradient(160deg, #141b2a 0%, #0e1420 100%)', color: '#4a5568' }}>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.3">
              <circle cx="32" cy="24" r="12"/><path d="M8 56 C8 42 56 42 56 56"/>
            </svg>
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Your photo here</p>
          </div>
          <div className="portrait-accent" style={{ position: 'absolute', bottom: '-1px', left: '-1px', right: '-1px', height: '3px', background: 'linear-gradient(90deg, #b8975a, transparent)' }} />
        </div>
        <div className="portrait-caption" style={{ marginTop: '1.2rem', fontSize: '0.75rem', color: '#4a5568', letterSpacing: '0.08em', lineHeight: 1.6 }}>
          <strong style={{ display: 'block', color: '#c8b89a', fontWeight: 400, marginBottom: '0.15rem', fontSize: '0.85rem' }}>{name}</strong>
          {title}<br />{subtitle}
        </div>
      </div>

      <div className="story-text">
        <p className="reveal" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 300, color: '#f0e6d0', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '2rem' }}>{introQuote}</p>
        {paragraphs.map((p, i) => (
          <p key={i} className={`reveal${i > 0 ? ` reveal-delay-${Math.min(i, 3)}` : ''}`} style={{ fontSize: '0.95rem', fontWeight: 300, color: '#c8b89a', lineHeight: 1.9, marginBottom: '1.4rem' }}>{p.text}</p>
        ))}
        <div className="pull-quote reveal reveal-delay-2" style={{ borderLeft: '2px solid #b8975a', padding: '0.8rem 1.5rem', margin: '2.5rem 0', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.15rem', color: '#f0e6d0', lineHeight: 1.6 }}>
          {pullQuote}
        </div>
      </div>
    </div>

    <style jsx>{`
      .story-grid { display: grid; grid-template-columns: 1fr 1.6fr; gap: 6rem; align-items: start; margin-top: 1rem; }
      .portrait-wrap { position: sticky; top: 7rem; }
      @media (max-width: 768px) {
        .story-grid { grid-template-columns: 1fr; gap: 3rem; }
        .portrait-wrap { position: static; }
        .portrait-frame { max-width: 100% !important; aspect-ratio: 4/3 !important; }
      }
    `}</style>
  </section>
)