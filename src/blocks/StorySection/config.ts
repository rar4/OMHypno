import type { Block } from 'payload'

export const StorySection: Block = {
  slug: 'storySection',
  labels: { singular: 'Story Section', plural: 'Story Sections' },
  fields: [
    { name: 'name', type: 'text', defaultValue: 'Sarah Ellwood' },
    { name: 'title', type: 'text', defaultValue: 'Clinical Hypnotherapist · London' },
    { name: 'subtitle', type: 'text', defaultValue: 'GHR Registered · NCH Member' },
    { name: 'introQuote', type: 'textarea', defaultValue: '"I came to hypnotherapy not as a therapist, but as a client — someone who had tried everything else and hadn\'t found what she was looking for."' },
    {
      name: 'paragraphs', type: 'array', minRows: 1,
      fields: [{ name: 'text', type: 'textarea', required: true }],
      defaultValue: [
        { text: 'After years working in a high-pressure corporate environment, anxiety had quietly become the backdrop of my life. Therapy helped me understand it. Hypnotherapy helped me change it. That distinction — between understanding and transforming — is what drives everything I do now.' },
        { text: 'I trained with the London College of Clinical Hypnosis and have since completed advanced programmes in trauma-informed practice, cognitive hypnotherapy, and solution-focused therapy. Over twelve years, I\'ve worked with more than 800 clients — from teenagers to retirees, professionals to parents — each with their own story.' },
        { text: 'My approach blends evidence-based hypnotherapy with elements of NLP, mindfulness, and parts-based therapy. But more than any technique, what shapes my work is the belief that you already have everything you need. My job is simply to help you access it.' },
        { text: 'Sessions take place in my calm, private practice in Central London, and online for those who prefer it. I offer a free 30-minute consultation before we begin — no obligation, just a conversation.' },
      ],
    },
    { name: 'pullQuote', type: 'textarea', defaultValue: '"Understanding why you feel a certain way is valuable. Being free from it is something else entirely."' },
  ],
}