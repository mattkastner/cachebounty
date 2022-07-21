import { Logo } from '@/components/Logo'
import backgroundImage from '@/images/background-features.jpg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import crown from 'src/images/logos/crown-solid.svg'
import { CurrencyDollarIcon, ReceiptTaxIcon } from '@heroicons/react/outline'

const daos = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1568990545613-aa37e9353eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    title: 'Brisket nostrud boudin',
    type: 'Lending',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1568990545613-aa37e9353eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    title: 'Hsdk nostrud boudin',
    type: 'Lending',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1568990545613-aa37e9353eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    title: 'Brisket boudin cupidatat',
    type: 'Lending',
  },
]

const Dao = () => {
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
        <div className="h-[20px] w-[200px] rounded-r-full bg-purple-500 px-3">
          {daos.length} Bounties
        </div>
        <div className="flex flex-wrap justify-between gap-x-4 rounded-3xl bg-white p-10 shadow-md">
          {daos.map((doa) => {
            return (
              <div
                key={doa.id}
                className="flex h-[260px] w-[260px] flex-col justify-center gap-y-2 rounded-md border border-gray-100 bg-white px-6 py-4 shadow-md"
              >
                <div className="flex items-center justify-center">
                  <Image
                    src={doa?.image}
                    height="120"
                    width="120"
                    className="rounded-full"
                    alt="author"
                  />
                </div>

                <h4 className="m-0 flex justify-center overflow-y-hidden p-0 text-base font-medium leading-5">
                  {doa.title}
                </h4>
                <div className="flex flex-col justify-center text-sm leading-4">
                  <p className="flex justify-center text-gray-500">
                    Bounty offer
                  </p>
                  <h4 className="m-0 flex justify-center p-0">{doa.offer}</h4>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Dao
