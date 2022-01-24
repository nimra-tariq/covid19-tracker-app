
import './footer.css'
export default function Footer(props) {
    return <div className='bgFooter'>{(props.confirmed) ?
        <div className='footerContainer d-flex justify-content-between'>
            <div className='footer'><span>Designed and Developed by </span><span><a href="https://github.com/nimra-tariq">nimra-tariq</a></span></div>
            <div className='container-fluid iconContainer'>
                <a href="https://www.facebook.com/nimra.tariq.90260" className="nav-item nav-link"><i className="fa fa-facebook" /></a>
                <a href="https://github.com/nimra-tariq" className="nav-item nav-link"><i className="fab fa-github" /></a>
                <a href="https://www.linkedin.com/in/nimra-tariq-6784aa1b0/" className="nav-item nav-link"><i className="fab fa-linkedin" /></a>
            </div>
            <div className='footer margin'><span><i className="fa fa-envelope" />nimratariq899@gmail.com</span></div>
        </div> : null}
    </div>
}