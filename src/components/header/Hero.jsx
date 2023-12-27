import   { Fragment } from 'react'
import './hero.css'
const Hero = () => {
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
      </div>
    </Fragment>
  )
}

export default Hero
