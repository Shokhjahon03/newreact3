import { Fragment, useState } from 'react'
import './header.css'
import  {Link} from 'react-router-dom'
import logo from '../../assets/logo (1).svg'
const Header = () => {
    let [a,setA]=useState(true)
    let [y,setY]=useState(false)
    const x=document.querySelector('body')
    const dark=()=>{
        if (y!==true) {
            x.setAttribute('class','dark')
            setY(false)
        }
    }
    const light=()=>{
        if (y===false) {
            x.setAttribute('class','light')
            // setY(true)
        }
    }
    let toggl=()=>{
        if(a!==true){
            setA(true)
        }
        if(a!==false){
            setA(false)
        }
    }
  return (
    <Fragment>
      <nav className={ y ? 'dnavs': 'navs'}>
        <div className="container">
            <div className="navbar">
                <img src={logo} alt="img" />
                <ul className='navigate'>
                   <Link onClick={toggl} className='links' >Продукция</Link>
                   <span></span>
                   <Link className='links' >Сертификаты</Link>
                   <span></span>
                   <Link className='links' >Наша команда</Link>
                   <span></span>
                   <Link className='links' >O нас</Link>
                   <span></span>
                   <Link className='links' >Новости</Link>
                   <span></span>
                   <Link className='links' >Вакансии</Link>
                   <span></span>
                   <Link className='links' >Контакты</Link>
                </ul>
                <div className={a ? 'none':'mini'}>
                <Link className='links' >Ламинатные тубы</Link>
                <Link className='links' >Экструзионные тубы</Link>
                <Link className='links' >Другая упаковка</Link>
                </div>
                <div className='darkmod'>
                    <button onClick={light}><i className='bx bxs-sun'></i></button>
                    <button onClick={dark}><i className='bx bx-moon' ></i></button>
                </div>
            </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Header
