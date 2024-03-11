import Image from 'next/image';
import footer from '../../../images/footer.svg';
import './sendFooter.css'

const SendFooter = () => {
  return (
    <div className='footer'> 
        <Image src = {footer} alt='footer' className='footer-img' />
    </div>
  )
}

export default SendFooter
