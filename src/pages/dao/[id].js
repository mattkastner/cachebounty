import { Logo } from '@/components/Logo'
import backgroundImage from '@/images/background-features.jpg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import crown from 'src/images/logos/crown-solid.svg'
import { CurrencyDollarIcon, ReceiptTaxIcon } from '@heroicons/react/outline'

const IndividualDao = () => {
  const { query } = useRouter()
  return (
    <div className="flex flex-col items-center ">
      <section
        id="dao"
        aria-label="Individual doa"
        className="relative h-[200px] max-w-5xl overflow-hidden rounded-b-3xl bg-blue-600"
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
      <div className="z-1 relative mx-2 mt-[-140px] border-[2px] border-blue-700">
        <div className="mb-[40px]">
          {' '}
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
        <div className="h-20 w-[900px] max-w-5xl rounded-3xl bg-white shadow-md">
          bounty boxes here
        </div>
      </div>
    </div>
  )
}
export default IndividualDao
