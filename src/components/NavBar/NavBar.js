import './NavBar.css'
import { NavLink } from 'react-router-dom'

function updatePage(page) {
  let target = document.getElementById(page);
  target && target.scrollIntoView({behavior: "smooth", block: "start"});
  // console.log(page, target);
};

export default function NavBar({pages}) {
  return (
    <div className='nav left'>
      <NavLink to='/' onClick={() => updatePage('Home')} className='nav-item'>Home</NavLink>
      <NavLink to='/about' onClick={() => updatePage('About')} className='nav-item'>About</NavLink>
      <NavLink to='/portfolio' onClick={() => updatePage('Portfolio')} className='nav-item'>Portfolio</NavLink>
      <NavLink to='/contact' onClick={() => updatePage('Contact')} className='nav-item'>Contact</NavLink>
    </div>
  )
}