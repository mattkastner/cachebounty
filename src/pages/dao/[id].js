import { Logo } from '@/components/Logo'
import backgroundImage from '@/images/background-features.jpg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import crown from 'src/images/logos/crown-solid.svg'
import { CurrencyDollarIcon, ReceiptTaxIcon } from '@heroicons/react/outline'

const bountyBoxes = [
  {
    id: 1,
    author: {
      address: '#AE173EEDCB',
      profile:
        'https://images.unsplash.com/photo-1568990545613-aa37e9353eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    summary:
      'Strip steak buffalo ut veniam short loin salami, hamburger duis nulla sirloin chislic exercitation kevin.  Swine turducken ham, short ribs drumstick corned beef alcatra non sausage pancetta in.  Est t-bone tongue alcatra laboris, mollit dolore pancetta adipisicing spare ribs bacon exercitation bresaola prosciutto.  Pastrami capicola meatball, pariatur corned beef tenderloin ullamco spare ribs cillum shank occaecat filet mignon rump incididunt ut. Landjaeger hamburger ground round pork loin in doner est do eu venison ribeye sed.',
    title: 'Brisket nostrud boudin cupidatat',
    offer: '5.6Eth',
  },
  {
    id: 1,
    author: {
      address: '#AE173EEDCB',
      profile:
        'https://images.unsplash.com/photo-1529701870190-9ae4010fd124?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    summary:
      'Strip steak buffalo ut veniam short loin salami, hamburger duis nulla sirloin chislic exercitation kevin.  Swine turducken ham, short ribs drumstick corned beef alcatra non sausage pancetta in.  Est t-bone tongue alcatra laboris, mollit dolore pancetta adipisicing spare ribs bacon exercitation bresaola prosciutto.  Pastrami capicola meatball, pariatur corned beef tenderloin ullamco spare ribs cillum shank occaecat filet mignon rump incididunt ut. Landjaeger hamburger ground round pork loin in doner est do eu venison ribeye sed.',
    title: 'fugiat esse dolore tenderloin adipisicing occaecat.',
    offer: '5.6Eth',
  },
  {
    id: 1,
    author: {
      address: '#AE173EEDCB',
      profile:
        'https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    summary:
      'Strip steak buffalo ut veniam short loin salami, hamburger duis nulla sirloin chislic exercitation kevin.  Swine turducken ham, short ribs drumstick corned beef alcatra non sausage pancetta in.  Est t-bone tongue alcatra laboris, mollit dolore pancetta adipisicing spare ribs bacon exercitation bresaola prosciutto.  Pastrami capicola meatball, pariatur corned beef tenderloin ullamco spare ribs cillum shank occaecat filet mignon rump incididunt ut. Landjaeger hamburger ground round pork loin in doner est do eu venison ribeye sed.',
    title: 'ostrud boudin cupidatat, fugiat esse dolore',
    offer: '5.6Eth',
  },
]

const IndividualDao = () => {
  const { query } = useRouter()
  return (
    <div className="mb-20 flex flex-col items-center">
      <section
        id="dao"
        aria-label="Individual doa"
        className="relative h-[180px] max-w-5xl overflow-hidden rounded-b-3xl bg-blue-600"
      >
        <Image
          className="cover absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
          src={backgroundImage}
          alt=""
          width={2245}
          height={1636}
          unoptimized
        />
      </section>
      <div className="z-1 relative mt-[-140px] max-w-5xl px-10">
        <div className="mb-[40px]">
          <div className="flex">
            <div className="h-9 w-9">
              <Image
                src={crown}
                alt="crown"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <h1 className="text-2xl text-white">{query.id}</h1>
          </div>
          <div className="flex flex-row gap-x-4 text-gray-200 ">
            <div className="flex items-center">
              <CurrencyDollarIcon className="h-6 text-gray-300" />
              <h4>Treasury Funds</h4>
              {/* <h4>{`$ ${treasuryFunds}`}</h4> */}
            </div>
            <div className="flex">
              <ReceiptTaxIcon className="h-6 text-gray-300" />
              <h4>Net APY</h4>
              {/* <h4>{`$ ${netApyValue}`}</h4> */}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between rounded-3xl bg-white p-10 shadow-md">
          {bountyBoxes.map((bountyBox) => {
            return (
              <div
                key={bountyBox.id}
                className="flex min-h-[380px] flex-col gap-y-4 rounded-md border border-gray-100 bg-white px-6 py-4 shadow-md md:w-1/3"
              >
                <div className="flex items-center gap-x-4">
                  <Image
                    src={bountyBox?.author.profile}
                    height="50"
                    width="50"
                    className="rounded-full"
                    alt="author"
                  />
                  <div className="text-sm leading-4">
                    <p className=" text-gray-500">Owned by</p>
                    <h4 className="m-0 p-0">{bountyBox.author.address}</h4>
                  </div>
                </div>
                <p className="line-clamp-2 h-[140px] overflow-y-hidden text-sm">
                  {bountyBox.summary}
                </p>

                <h4 className="m-0 h-[40px] overflow-y-hidden p-0 text-base font-medium leading-5">
                  {bountyBox.title}
                </h4>
                <div className="text-sm leading-4">
                  <p className=" text-gray-500">Bounty offer</p>
                  <h4 className="m-0 p-0">{bountyBox.offer}</h4>
                </div>
                <button className="text-md w-full rounded-md bg-purple-500 py-2 text-white">
                  Accept offer
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default IndividualDao
