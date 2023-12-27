import   { Fragment } from 'react'
import './hero.css'
const Hero = () => {
    let handBack=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
  return (
    <Fragment>
      <div className="hero">
        <div className="container">
            <div className="hero_inbox">
                <div className="hero_inbox_in">
                    <h3>LEANGROUP - тубы и этикетки</h3>
                    <h1>Ламинатные тубы</h1>
                    <p>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).
                    </p>
                    <button>Каталог</button>
                </div>
            </div>
        </div>
        <button onClick={handBack} className='back'>
        <i className='bx bx-up-arrow-alt'></i>
        </button>
      </div>
    </Fragment>
  )
}

export default Hero
