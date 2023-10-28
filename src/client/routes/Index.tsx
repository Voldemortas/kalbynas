import React from 'react'
import Header from '../components/Header'
import useIncrease from '../components/useIncrease'

export default function Index() {
  const {count, increase} = useIncrease()
  return (
    <>
      <Header />
      <span onClick={increase}>labas: {count}</span>
    </>
  )
}

