import Home from '../../pages/Home/Home'

import './Carousel.css'

export default function Carousel({pages}) {
  return (
    <div className='carousel'>
      <ul className='carousel-nav'>
        {pages.map((page) => <li className='carousel-nav-li'>{page}</li>)}
      </ul>
      
      <div className='carousel-container'>
      <Home />
      </div>
    </div>
  )
}