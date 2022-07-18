import React from 'react'
import { Container } from '@/components/Container'
import { logo } from '../../components/Logo'

const BountyBoard = () => {
  return (
    <section className="relative w-full overflow-hidden ">
      <Container className="h-64 w-full bg-[#3763E3]">
        <div className="align-middle">
          <logo />
          <h1 className="text-2xl text-white">Bounty Board</h1>
        </div>
        <div className="flex flex-row">
          <div>
            <img />
            <h4>Treasury Funds</h4>
            {/* <h4>{`$ ${treasuryFunds}`}</h4> */}
          </div>
          <div className="flex space-x-4">
            <img className="mx-w-lg round-full bg-[#30b748]" />
            <h4>Net APY</h4>
            {/* <h4>{`$ ${netApyValue}`}</h4> */}
          </div>
        </div>
      </Container>
      <Container></Container>
    </section>
  )
}
export default BountyBoard
