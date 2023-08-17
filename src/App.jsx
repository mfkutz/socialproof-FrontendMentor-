import './App.css'
import Card from './components/Card/Card'
import Rated from './components/Rated/Rated'
import colton from './assets/image-colton.jpg'
import irene from './assets/image-irene.jpg'
import anne from './assets/image-anne.jpg'
import patternDesktopTop from './assets/bg-pattern-top-desktop.svg'
import patternDesktopBottom from './assets/bg-pattern-bottom-desktop.svg'
import patternMobileTop from './assets/bg-pattern-top-mobile.svg'
import patternMobileBottom from './assets/bg-pattern-bottom-mobile.svg'

const App = () => {

  const coltonText = ' "We needed the same printed design as the one we had ordered a week prior.Not only did they find the original order, but we also received it in time. Excellent!"'
  const ireneText = ' "Customer service is always excellent and very quick turn around. Completelydelighted with the simplicity of the purchase and the speed of delivery."'
  const anneText = ' "Put an order with this company and can only praise them for the very highstandard. Will definitely use them again and recommend them to everyone!"'

  return (

    <div className='bg'>

      <img src={patternDesktopTop} alt="bg" className='bg_top_desktop' />
      <img src={patternDesktopBottom} alt="bg" className='bg_bottom_desktop' />
      <img src={patternMobileTop} alt="bg" className='bg_top_mobile' />
      <img src={patternMobileBottom} alt="bg" className='bg_bottom_mobile' />

      <div className="wrapper">
        <div className='container'>
          {/*********** Section TOP ************/}
          <div className="top">
            <div className="left">
              <h1>
                10,000+ of our <br /> users love our <br /> products.
              </h1>
              <p>
                We only provide great products combined with excellent customer service.
                See what our satisfied customers are saying about our services.
              </p>
            </div>

            <div className="right">

              <div className="rated_Card">
                <Rated title={'Rated 5 Stars in Reviews'} />
              </div>

              <div className="rated_Card">
                <Rated title={'Rated 5 Stars in Report Guru'} />
              </div>

              <div className="rated_Card">
                <Rated title={'Rated 5 Stars in BestTech'} />
              </div>

            </div>
          </div>

          {/*********** Section DOWN ************/}
          <div className="down">

            <div>
              <Card image={colton} name={'Colton Smith'} text={coltonText} />
            </div>

            <div>
              <Card image={irene} name={'Irene Roberts'} text={ireneText} />
            </div>

            <div>
              <Card image={anne} name={'Anne Wallace'} text={anneText} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App