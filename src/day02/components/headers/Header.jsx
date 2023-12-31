import './Header.css'
import Nav from '../nav/Nav';

const Header = (props)=>{
    return(
        <div className='header-layout'>
        <header className='header-container'>
            <h1>
                <img src={props.logo}/>
                <span>{props.textlogo}</span>
            </h1>
           <Nav />
        </header>
        </div>
    )
}
export default Header;