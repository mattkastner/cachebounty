import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Does CacheBounty handle tacos?',
      answer: "Well no, but if you move your company to mexico I'll help.",
    },
    {
      question: 'What about burritos?',
      answer:
        'Absolutely, we are happy to take your money and give you street burritos.',
    },
    {
      question: 'How do I apply for a job at CacheBounty?',
      answer: "You're not gunna get paid :)",
    },
  ],
  [
    {
      question: 'What was that testimonial about Nader being a loser?',
      answer: 'CacheBounty a hack made in a few days, blame Nader.',
    },
    {
      question:
        'CacheBounty sounds horrible but why do I still feel compelled to use it?',
      answer:
        'This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.',
    },
    {
      question: "Mark thinks he's gay. This isn't a question",
      answer: 'I was his roommate once, I can confirm.',
    },
  ],
  [
    {
      question: 'My name is Matt and do I have a question?',
      answer: 'No, please no more...',
    },
    {
      question: 'What color is CacheBounty?',
      answer: 'What kinda dumb-butt question is that?',
    },
    {
      question: "Mark now thinks he's a woman.",
      answer: 'Honestly not sure at all.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
