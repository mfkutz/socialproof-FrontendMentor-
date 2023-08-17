import './Card.css'

const Card = ({ image, name, text }) => {
  return (
    <div className='card_container'>
      <div className="card_header">
        <img src={image} alt="avatar" />
        <div className='card_data'>
          <div className='card_name'>
            {name}
          </div>
          <div className='card_verified'>
            Verified Buyer
          </div>
        </div>
      </div>
      <div className='card_paragraph'>
        {text}
      </div>
    </div>
  )
}

export default Card