import star from '../../assets/icon-star.svg'
import './Rated.css'

const Rated = ({ title }) => {
  return (
    <div className='rated_container'>
      <div className="stars">
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </div>
      <div className='title'>
        {title}
      </div>
    </div>
  )
}

export default Rated