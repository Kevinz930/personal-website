import './Background.css'
import video from "../../assets/melancholy.mp4"

export default function Background() {
  return (
    <video playsinline autoPlay muted loop className='background-video'>
      <source src={video} type='video/mp4' />
    </video>
  )
}