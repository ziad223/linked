import React from 'react'
import SendNav from '../_components/send-nav/SendNav'
import SendSection from '../_components/sendSection/SendSection'
import SendProfile from '../_components/sendProfile/SendProfile'
import SendFooter from '../_components/sendFooter/SendFooter'

const page = () => {
  return (
    <div className='send'>
      <SendNav/>
      <SendProfile/>
      <SendSection/>
      <SendFooter/>
    </div>
  )
}

export default page
