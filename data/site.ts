export const site = {
  name: "JRS Music Lessons",
  tagline: "Private Music Lessons in Iowa",
  description:
    "Personalized instruction for guitar, drums, vocals, piano, bass, and more — for all ages and skill levels.",
  contact: {
    location: "Iowa, USA",
    phone: "(319) 555-1234",
    email: "info@jrsmusiclessons.com",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Lessons", href: "/lessons" },
  { label: "About", href: "/about" },
  { label: "Why JRS", href: "/about#why-jrs" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export type Lesson = {
  slug: string;
  title: string;
  short: string;
  long: string;
};

export const lessons: Lesson[] = [
  {
    slug: "guitar",
    title: "Guitar",
    short: "Acoustic, electric, and everything in between.",
    long: "From your first open chords to lead techniques, songwriting, and improvisation. Lessons cover acoustic and electric guitar and are tailored to the music you actually want to play.",
  },
  {
    slug: "vocals",
    title: "Vocals",
    short: "Improve your voice, technique, and confidence.",
    long: "Build breath support, expand your range, and sing with confidence. Whether you want to front a band, sing at church, or just sound great at karaoke, lessons meet you where you are.",
  },
  {
    slug: "drums",
    title: "Drums",
    short: "Learn rhythm, groove, and the fundamentals of drumming.",
    long: "Stick control, coordination, reading rhythms, and playing along with real songs. Learn to keep solid time and develop the groove that holds a band together.",
  },
  {
    slug: "piano",
    title: "Piano",
    short: "From beginners to advanced players, you'll love learning.",
    long: "Classical foundations, chords and lead sheets, or playing by ear — piano lessons are structured around your goals, from first notes to advanced repertoire.",
  },
  {
    slug: "bass",
    title: "Bass",
    short: "Build a strong groove and solid foundation on bass.",
    long: "Lock in with the drums, walk through chord changes, and learn the lines that drive your favorite songs. Fingerstyle, pick, and slap techniques all covered.",
  },
  {
    slug: "other",
    title: "Other Instruments",
    short: "Ask about ukulele, banjo, mandolin and more!",
    long: "Curious about ukulele, banjo, mandolin, or another stringed instrument? Ask — chances are we can build a lesson plan around it.",
  },
];

export const about = {
  heading: "Experienced. Passionate. Invested in Your Success.",
  body: [
    "With years of teaching experience and a deep love for music, JRS Music Lessons is dedicated to helping students of all ages discover their sound, build confidence, and reach their musical goals in a supportive and encouraging environment.",
    "Every student is different, so no two lesson plans are the same. Whether you're picking up an instrument for the first time or getting ready for a performance, lessons are built around your goals, your pace, and the music you love.",
  ],
};

export const whyJrs = [
  { icon: "star", text: "Years of teaching experience" },
  { icon: "users", text: "Lessons for all ages & skill levels" },
  { icon: "person", text: "Personalized approach" },
  { icon: "heart", text: "Supportive & positive environment" },
  { icon: "pin", text: "Local Iowa instructor" },
];

export const trustBadges = [
  { icon: "star", text: "Years of Experience" },
  { icon: "users", text: "All Ages Welcome" },
  { icon: "pin", text: "Local Iowa Instructor" },
];

export type Review = {
  quote: string;
  author: string;
};

export const reviews: Review[] = [
  {
    quote:
      "JRS is an amazing teacher! My son has learned so much on guitar and actually looks forward to practice now.",
    author: "Amy R.",
  },
  {
    quote:
      "I never thought I could sing in front of anyone. JRS has helped me build so much confidence. Highly recommend!",
    author: "Dallas M.",
  },
  {
    quote:
      "Great with kids and adults alike. Patient, knowledgeable, and really cares about his students.",
    author: "Mark T.",
  },
  {
    quote:
      "Started piano as a complete beginner in my forties. Lessons are relaxed, encouraging, and I'm playing songs I love already.",
    author: "Sarah K.",
  },
  {
    quote:
      "My daughter switched from another teacher and the difference is night and day. She's excited about drums again.",
    author: "Jason P.",
  },
  {
    quote:
      "Flexible scheduling and lessons that are actually fun. I've improved more on bass in six months than in years on my own.",
    author: "Chris B.",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "How long are lessons?",
    answer:
      "Standard lessons are 30 minutes, which works well for most students. 45 and 60 minute lessons are available for older students or anyone preparing for performances.",
  },
  {
    question: "How much do lessons cost?",
    answer:
      "Pricing depends on lesson length and frequency. Reach out through the contact form or give us a call for current rates — there are no hidden fees or long-term contracts.",
  },
  {
    question: "What instruments do you teach?",
    answer:
      "Guitar, bass, drums, piano, and vocals are the core offerings. Ukulele, banjo, mandolin, and other stringed instruments are available on request.",
  },
  {
    question: "What ages do you teach?",
    answer:
      "All ages! Students range from young kids picking up their first instrument to adults returning to music after decades away. It's never too early or too late.",
  },
  {
    question: "Do I need my own instrument?",
    answer:
      "For practice at home, yes — but you don't need anything fancy to start. Happy to give recommendations on affordable starter instruments before you buy.",
  },
  {
    question: "Are lessons in person or online?",
    answer:
      "Both. In-person lessons are available locally in Iowa, and online lessons over video call work great for students further away or with busy schedules.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Life happens — just give 24 hours notice and we'll reschedule your lesson at no charge.",
  },
  {
    question: "How do I get started?",
    answer:
      "Fill out the booking form on the contact page or send an email. You'll get a reply within a day to set up your first lesson.",
  },
];

export const instrumentOptions = [
  "Guitar",
  "Vocals",
  "Drums",
  "Piano",
  "Bass",
  "Other",
];

export const experienceLevels = [
  "Complete beginner",
  "Some experience",
  "Intermediate",
  "Advanced",
];
