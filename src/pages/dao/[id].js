import Image from 'next/image'
import { useRouter } from 'next/router'
import backgroundImage from '@/images/background-features.jpg'
import { Header } from '@/layouts/Header'

const Dao = () => {
  const { query } = useRouter()
  return (
    <div className="flex flex-col items-center">
      <section
        id="dao"
        aria-label="Individual doa"
        className="relative h-[300px] max-w-5xl overflow-hidden rounded-b-3xl bg-blue-600"
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
      <div className="z-1 relative mx-2 mt-[-60px]">
        <div>title here</div>
        <div className="h-20 w-[900px] max-w-5xl rounded-3xl bg-white shadow-md">
          bounty boxes here
        </div>
      </div>
    </div>
  )
}

export default Dao
