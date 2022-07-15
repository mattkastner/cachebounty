import Image from 'next/image'
import { useRouter } from 'next/router'
import backgroundImage from '@/images/background-features.jpg'
import { Header } from '@/layouts/Header'

const Dao = () => {
  const { query } = useRouter()
  return (
    <div className="flex justify-center">
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
    </div>
  )
}

export default Dao
