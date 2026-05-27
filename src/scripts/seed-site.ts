import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@/payload.config'

async function seed({ payload, req }: { payload: any; req: any }) {

  const homeContent = [
    {
      blockType: 'heroBlock',
      tag: 'Clinical Hypnotherapy & Mindwork',
      heading: 'Quiet the noise.\nReclaim yourself.',
      subtitle:
        'I help people break free from anxiety, phobias, and old patterns — using evidence-based hypnotherapy that works at the level where change actually happens.',
      primaryButton: { label: 'Book a Free Consultation', url: '/contact' },
      secondaryButton: { label: 'About Me', url: '/about' },
    },
    {
      blockType: 'introSection',
      sectionTag: 'What Is Hypnotherapy',
      heading: 'A gentle shift in perspective',
      headingEmphasis: 'perspective',
      paragraph1:
        'Hypnotherapy is a collaborative, evidence-based therapy that uses a deeply relaxed state of focused awareness to access the part of your mind where habits, beliefs, and emotional responses are stored.',
      paragraph2:
        "It's not sleep. It's not losing control. It's a natural, guided state — similar to the flow you feel when absorbed in a book — where we gently work with your subconscious to create lasting change.",
      paragraph3:
        'Sessions are warm, conversational, and completely tailored to you. Most clients feel noticeable shifts within just a few visits.',
      linkLabel: 'Learn more about my approach',
      linkUrl: '/about',
      stats: [
        { number: '12+', label: 'Years Experience' },
        { number: '800+', label: 'Clients Helped' },
        { number: '96%', label: 'Feel Better After 3 Sessions' },
        { number: '100%', label: 'Fully Confidential' },
      ],
    },
    {
      blockType: 'servicesSection',
      sectionTag: 'Areas I Help With',
      heading: 'What brings people to my door',
      headingEmphasis: 'to my door',
      description:
        'Each session is bespoke. These are the most common areas where hypnotherapy creates remarkable, lasting change.',
      services: [
        {
          title: 'Anxiety & Stress',
          description: 'Learn to quiet the over-active mind and step out of the cycle of worry that keeps you stuck.',
          icon: 'anxiety',
        },
        {
          title: 'Phobias & Fears',
          description: 'Gently dissolve the unconscious roots of specific fears — from flying to public speaking.',
          icon: 'phobia',
        },
        {
          title: 'Sleep & Insomnia',
          description: 'Restore your natural relationship with sleep and wake up genuinely rested.',
          icon: 'sleep',
        },
        {
          title: 'Self-Confidence',
          description: 'Build genuine, embodied confidence that carries into interviews, relationships, and life.',
          icon: 'confidence',
        },
        {
          title: 'Habits & Addictions',
          description: 'Smoking, emotional eating, nail-biting — rewire the habits that no longer serve you.',
          icon: 'habits',
        },
        {
          title: 'Trauma & PTSD',
          description: 'A safe, gentle approach to processing difficult experiences and reclaiming peace.',
          icon: 'trauma',
        },
      ],
    },
    {
      blockType: 'processSection',
      sectionTag: 'The Process',
      heading: 'Simple. Guided. Transformative.',
      headingEmphasis: 'Transformative.',
      steps: [
        {
          number: 'I',
          title: 'Free Consultation',
          description:
            "We start with an open, judgement-free conversation. I'll listen carefully, understand your goals, and explain exactly what to expect.",
        },
        {
          number: 'II',
          title: 'Bespoke Sessions',
          description:
            'Each session is tailored around you. We work at a pace that feels right, combining hypnotherapy with practical tools for lasting change.',
        },
        {
          number: 'III',
          title: 'Lasting Change',
          description:
            'Most clients notice meaningful shifts within 3–5 sessions. You\'ll leave with techniques to reinforce your progress every day.',
        },
      ],
    },
    {
      blockType: 'testimonialBlock',
      quote:
        '"I came to Sarah convinced nothing would shift the panic attacks I\'d had for seven years. After four sessions, I genuinely felt like a different person. Not a \'fixed\' person — a free one."',
      authorName: 'Miriam T.',
      authorDetail: 'Anxiety & Panic, London',
      stars: 5,
      ctaLabel: 'Read all reviews →',
      ctaUrl: '/reviews',
    },
    {
      blockType: 'ctaBand',
      sectionTag: 'Take the first step',
      heading: 'Ready to feel different?',
      headingEmphasis: 'different?',
      description:
        "The first conversation is completely free, and completely without pressure. Let's find out if we're a good fit.",
      buttonLabel: 'Book Your Free Consultation',
      buttonUrl: '/contact',
    },
  ]

  const aboutContent = [
    {
      blockType: 'pageHeader',
      tag: 'About Me',
      heading: 'The person behind\nthe practice',
      headingEmphasis: 'practice',
      lead:
        "I'm Sarah — a clinical hypnotherapist with over twelve years of experience helping people move from where they are to where they want to be.",
    },
    {
      blockType: 'storySection',
      name: 'Sarah Ellwood',
      title: 'Clinical Hypnotherapist · London',
      subtitle: 'GHR Registered · NCH Member',
      introQuote:
        "\"I came to hypnotherapy not as a therapist, but as a client — someone who had tried everything else and hadn't found what she was looking for.\"",
      paragraphs: [
        {
          text: 'After years working in a high-pressure corporate environment, anxiety had quietly become the backdrop of my life. Therapy helped me understand it. Hypnotherapy helped me change it. That distinction — between understanding and transforming — is what drives everything I do now.',
        },
        {
          text: 'I trained with the London College of Clinical Hypnosis and have since completed advanced programmes in trauma-informed practice, cognitive hypnotherapy, and solution-focused therapy. Over twelve years, I\'ve worked with more than 800 clients — from teenagers to retirees, professionals to parents — each with their own story.',
        },
        {
          text: "My approach blends evidence-based hypnotherapy with elements of NLP, mindfulness, and parts-based therapy. But more than any technique, what shapes my work is the belief that you already have everything you need. My job is simply to help you access it.",
        },
        {
          text: 'Sessions take place in my calm, private practice in Central London, and online for those who prefer it. I offer a free 30-minute consultation before we begin — no obligation, just a conversation.',
        },
      ],
      pullQuote:
        '"Understanding why you feel a certain way is valuable. Being free from it is something else entirely."',
    },
    {
      blockType: 'credentialsSection',
      sectionTag: 'Qualifications & Training',
      heading: 'Grounded in evidence & experience',
      headingEmphasis: 'evidence & experience',
      credentials: [
        {
          year: '2012',
          title: 'Diploma in Clinical Hypnotherapy',
          description:
            'London College of Clinical Hypnosis — LCCH. Full clinical training covering therapeutic hypnosis, psychotherapy, and counselling.',
        },
        {
          year: '2014',
          title: 'Advanced Cognitive Hypnotherapy',
          description:
            'Quest Institute, London. Post-graduate training integrating cognitive-behavioural models with hypnotic techniques.',
        },
        {
          year: '2016',
          title: 'Trauma-Informed Practice Certificate',
          description:
            'Specialist training in working with complex trauma, PTSD, and adverse childhood experiences.',
        },
        {
          year: '2018',
          title: 'Solution-Focused Brief Therapy',
          description:
            'BRIEF, London. Qualification in SFBT, enabling fast, goal-directed work alongside hypnotherapy.',
        },
        {
          year: 'Ongoing',
          title: 'GHR Registered & NCH Member',
          description:
            'Full registration with the General Hypnotherapy Register and National Council for Hypnotherapy. Bound by their codes of ethics and practice.',
        },
        {
          year: 'Ongoing',
          title: 'Continuing Professional Development',
          description:
            'Minimum 30 hours per year of supervised CPD, keeping practice current with the latest research and approaches.',
        },
      ],
    },
    {
      blockType: 'valuesSection',
      sectionTag: 'My Approach',
      heading: 'What you can always expect from me',
      headingEmphasis: 'expect from me',
      intro:
        'Every client is different, and every session is shaped around you. But these principles run through everything I do, every time.',
      values: [
        {
          number: '01',
          title: 'Complete Confidentiality',
          description:
            'What you share stays between us. My practice is governed by strict confidentiality codes, and I work in a fully private setting. You can speak freely.',
        },
        {
          number: '02',
          title: 'No Judgement, Ever',
          description:
            'People often come to me carrying shame about what they\'re struggling with. That shame has no place in my practice. You will be met with warmth and genuine curiosity.',
        },
        {
          number: '03',
          title: 'Honest, Realistic Expectations',
          description:
            "I will never promise a cure or make claims that can't be kept. I'll be honest with you about what hypnotherapy can realistically achieve, and how many sessions you might need.",
        },
        {
          number: '04',
          title: 'You Are Always in Control',
          description:
            'Hypnotherapy is a collaborative process. You cannot be made to do anything against your values or will. Everything happens with your full knowledge and consent.',
        },
        {
          number: '05',
          title: 'Evidence-Based Practice',
          description:
            'My methods are rooted in research. I stay current through ongoing training and supervision, and I only use approaches that are supported by evidence.',
        },
        {
          number: '06',
          title: 'A Whole-Person View',
          description:
            "I don't treat symptoms in isolation. I'm interested in you — your life, your context, your strengths — and that shapes every session we have together.",
        },
      ],
    },
    {
      blockType: 'ctaBand',
      sectionTag: 'Take the first step',
      heading: 'Ready to start the conversation?',
      headingEmphasis: 'conversation?',
      description:
        "The first session is free. No commitment, no pressure — just a chance to meet and see if we're a good fit.",
      buttonLabel: 'Book Your Free Consultation',
      buttonUrl: '/contact',
      secondaryButton: { label: 'Read Client Reviews', url: '/reviews' },
    },
  ]

  const contactContent = [
    {
      blockType: 'pageHeader',
      tag: 'Get in Touch',
      heading: "Let's start the\nconversation",
      headingEmphasis: 'conversation',
      lead:
        "The first step is always the hardest. Fill in the form and I'll be in touch within one working day to arrange your free 30-minute consultation.",
    },
    {
      blockType: 'contactBlock',
      sectionHeading: 'What happens next',
      sectionHeadingEmphasis: 'next',
      introText:
        "After you send your message, I'll reach out within one working day to schedule a free, 30-minute introductory call. There's no obligation and no scripts — just a genuine conversation.",
      formHeading: 'Book your free consultation',
      formSubheading: 'All details are kept strictly confidential. I aim to respond within one working day.',
      noticeText:
        'By submitting this form you agree to being contacted by Sarah Ellwood Hypnotherapy. Your information is never shared with third parties and is handled in accordance with GDPR. All communications are strictly confidential.',
      contactDetails: {
        address: '12 Harley Street, Marylebone\nLondon, W1G 9PG',
        addressExtra: "Easy access from Oxford Circus & Regent's Park",
        phone: '+44 (0)20 7123 4567',
        phoneHours: 'Mon–Fri, 9am–6pm',
        email: 'hello@sarahellwood.co.uk',
        emailExtra: 'Replied within one working day',
        onlineInfo: 'Available via Zoom or Teams',
        onlineExtra: 'Equally effective, just more convenient',
        sessionDuration: '60 minutes (standard)',
        sessionExtra: 'Free 30-min consultation · 90-min extended available',
      },
    },
    {
      blockType: 'faqBlock',
      sectionTag: 'Before You Book',
      heading: 'Questions people often ask',
      headingEmphasis: 'often ask',
      faqs: [
        {
          question: 'Will I be in control during hypnosis?',
          answer:
            'Yes, completely. Hypnotherapy is a collaborative process. You are aware of everything that happens, you can speak, move, or end the session at any time. You cannot be made to do or say anything against your will.',
        },
        {
          question: 'How many sessions will I need?',
          answer:
            "It varies. Specific phobias and habit-based issues often resolve in 1–3 sessions. Anxiety, confidence, and complex issues typically take 4–8 sessions. I'll give you an honest estimate in your free consultation.",
        },
        {
          question: 'What does hypnosis actually feel like?',
          answer:
            "Most people describe it as deeply relaxed but completely aware — similar to being absorbed in a good book or just before falling asleep. You'll hear everything I say and remember most of the session.",
        },
        {
          question: "Can I be hypnotised if I'm sceptical?",
          answer:
            "Absolutely. Scepticism doesn't prevent hypnotherapy from working. What matters is a willingness to try and a desire for change — you don't need to 'believe in' it for it to be effective.",
        },
        {
          question: 'How much does a session cost?',
          answer:
            'Sessions are £120 for 60 minutes. A 90-minute extended session is £165. The initial consultation (30 minutes) is always free. I offer a small number of reduced-rate spaces — please ask if cost is a concern.',
        },
        {
          question: 'Do you offer online sessions?',
          answer:
            'Yes. Online sessions are available via Zoom or Teams and are equally effective. Many of my clients prefer the convenience, and some have never set foot in my practice at all.',
        },
        {
          question: 'Is everything I say confidential?',
          answer:
            'Yes. Everything shared in sessions is strictly confidential and governed by the GHR and NCH codes of ethics. The only exceptions — as with all therapists — are situations where there is a serious risk of harm.',
        },
        {
          question: "What if I've tried therapy before and it didn't work?",
          answer:
            "Many of my clients come having tried other approaches. Hypnotherapy works differently — it targets the subconscious level where patterns are stored, rather than just examining them cognitively. It's often effective precisely where other methods haven't been.",
        },
      ],
    },
  ]

  const reviewsContent = [
    {
      blockType: 'pageHeader',
      tag: 'Client Reviews',
      heading: 'Real people,\nreal change',
      headingEmphasis: 'real change',
      lead:
        "Every review here is from a real client. I share them not to impress, but because I know how hard it is to take that first step — and sometimes, hearing someone else's story helps.",
    },
    {
      blockType: 'reviewsBlock',
      averageRating: '4.9',
      totalReviews: '127',
      recommendPercent: '96%',
      avgSessions: '3.8',
      reviews: [
        {
          quote:
            '"I came to Sarah convinced nothing would shift the panic attacks I\'d had for seven years. After four sessions, I genuinely felt like a different person. Not a \'fixed\' person — a free one."',
          authorName: 'Miriam T.',
          authorLocation: 'London',
          tag: 'Anxiety & Panic',
          category: 'anxiety',
          stars: 5,
          platform: 'Verified Client · Google Reviews',
          featured: true,
        },
        {
          quote:
            '"I booked a holiday for the first time in eight years after two sessions. I didn\'t just tolerate the flight — I actually enjoyed looking out the window."',
          authorName: 'James R.',
          authorLocation: 'Surrey',
          tag: 'Flying Phobia',
          category: 'phobia',
          stars: 5,
          platform: 'Verified Client · Trustpilot',
        },
        {
          quote:
            '"Three years of waking at 3am every single night. Sarah helped me figure out what was underneath it, and within two weeks I was sleeping through. I still can\'t quite believe it."',
          authorName: 'Helen W.',
          authorLocation: 'Kent',
          tag: 'Insomnia',
          category: 'sleep',
          stars: 5,
          platform: 'Verified Client · Google Reviews',
        },
        {
          quote:
            '"20 years of smoking, gone after a single session. I expected it to be a battle. It simply wasn\'t. Sarah has a gift."',
          authorName: 'David K.',
          authorLocation: 'Essex',
          tag: 'Smoking Cessation',
          category: 'habits',
          stars: 5,
          platform: 'Verified Client · Trustpilot',
        },
        {
          quote:
            '"I used to physically shake before presenting. I gave a keynote to 400 people last month and felt calm, grounded, even excited. Sarah transformed something I thought was permanent."',
          authorName: 'Priya S.',
          authorLocation: 'London',
          tag: 'Public Speaking',
          category: 'confidence',
          stars: 5,
          platform: 'Verified Client · Google Reviews',
        },
        {
          quote:
            '"I\'d worked with several therapists over the years and made progress, but it was always slow and painful. Sarah\'s approach was different — gentle, collaborative, and faster than anything I\'d tried. I feel like myself again."',
          authorName: 'Anonymous',
          authorLocation: 'Online Client',
          tag: 'Trauma',
          category: 'trauma',
          stars: 5,
          platform: 'Verified Client · Direct Feedback',
        },
        {
          quote:
            '"The health anxiety was running my life — constant Google searches, doctors visits for nothing, catastrophising every headache. That spiral has completely stopped. I\'m astounded by how different I feel."',
          authorName: 'Tom B.',
          authorLocation: 'Bristol',
          tag: 'Health Anxiety',
          category: 'anxiety',
          stars: 5,
          platform: 'Verified Client · Google Reviews',
        },
        {
          quote:
            '"I didn\'t believe this would work. I told Sarah that in the first session. She just smiled and said \'that\'s fine, you don\'t have to.\' Six weeks later, I\'ve stopped apologising for existing."',
          authorName: 'Rachel O.',
          authorLocation: 'Manchester',
          tag: 'Self-Confidence',
          category: 'confidence',
          stars: 5,
          platform: 'Verified Client · Trustpilot',
        },
        {
          quote:
            '"I\'d been comfort eating through stress for fifteen years. Sarah helped me understand what was driving it, not just suppress it. I feel in control for the first time. No diet, no willpower — just peace with food."',
          authorName: 'Sonia M.',
          authorLocation: 'London',
          tag: 'Emotional Eating',
          category: 'habits',
          stars: 5,
          platform: 'Verified Client · Direct Feedback',
        },
        {
          quote:
            '"I\'d been avoiding medical procedures for years because of needle phobia. I had a blood test last week with barely a thought. If you\'d told me that six months ago I\'d have laughed."',
          authorName: 'Chris F.',
          authorLocation: 'Hertfordshire',
          tag: 'Needle Phobia',
          category: 'phobia',
          stars: 5,
          platform: 'Verified Client · Google Reviews',
        },
        {
          quote:
            '"The recordings Sarah gave me to listen to at night were a game changer on their own. Combined with the sessions, I went from averaging 4 hours a night to a solid 7. My whole life improved as a result."',
          authorName: 'Natasha P.',
          authorLocation: 'Online Client',
          tag: 'Insomnia & Anxiety',
          category: 'sleep',
          stars: 5,
          platform: 'Verified Client · Trustpilot',
        },
        {
          quote:
            '"I was turning down social events, struggling with basic shopping, dreading phone calls. Sarah helped me get my life back step by step. Her manner alone is half the therapy — impossibly calm and reassuring."',
          authorName: 'Lena H.',
          authorLocation: 'Cambridge',
          tag: 'Social Anxiety',
          category: 'anxiety',
          stars: 5,
          platform: 'Verified Client · Google Reviews',
        },
      ],
    },
    {
      blockType: 'ctaBand',
      sectionTag: 'Ready to begin?',
      heading: 'Your story could be next',
      headingEmphasis: 'Your',
      description:
        'The first consultation is free, relaxed, and completely without pressure.',
      buttonLabel: 'Book a Free Consultation',
      buttonUrl: '/contact',
    },
  ]

  const pages = [
    { title: 'Home', slug: 'home', hero: { type: 'none' }, layout: homeContent },
    { title: 'About Me', slug: 'about', hero: { type: 'none' }, layout: aboutContent },
    { title: 'Contact', slug: 'contact', hero: { type: 'none' }, layout: contactContent },
    { title: 'Reviews', slug: 'reviews', hero: { type: 'none' }, layout: reviewsContent },
  ]

  for (const pageData of pages) {
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: pageData.slug } },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data: {
          title: pageData.title,
          layout: pageData.layout,
          hero: pageData.hero,
          _status: 'published',
        },
        context: { disableRevalidate: true },
      })
      console.log(`Updated: ${pageData.title}`)
    } else {
      await payload.create({
        collection: 'pages',
        data: { ...pageData, _status: 'published' },
        context: { disableRevalidate: true },
      })
      console.log(`Created: ${pageData.title}`)
    }
  }

  console.log('Seeding complete!')
}

export { seed }
