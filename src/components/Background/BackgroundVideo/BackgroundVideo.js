import './BackgroundVideo.css'
import video from "../../../assets/galaxy.mp4"

export default function BackgroundVideo() {
  return (
    <video playsInline autoPlay muted loop className='background-video'>
      <source src={video} type='video/mp4' />
    </video>
  )
}