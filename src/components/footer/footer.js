
import './footer.css'
export default function Footer() {
    return (
<div className='footerContainer'>
<div className='icon'>
        <a href="" className="nav-item nav-link"><i className="fa fa-facebook" /></a>
        <a href="#" className="nav-item nav-link"><i className="fa fa-twitter" /></a>
        <a href="https://github.com/nimra-tariq" className="nav-item nav-link"><i className="fab fa-github" /></a>
        <a href="#" className="nav-item nav-link"><i className="fab fa-linkedin" /></a>
      </div>
<div className='footer'><span>Designed and Developed by </span><span><a href="https://github.com/nimra-tariq">nimra-tariq</a></span></div>
<div className='footer margin'><span><i className="fa fa-envelope" />nimratariq899@gmail.com</span></div>
</div>
    );
}