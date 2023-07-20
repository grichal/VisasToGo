import React from "react";
import './footer.css'

const Footer =()=>{

    return(
     <footer className="footer">
        
        <div className="footer-content">

            <div className="footer-seccion">
                <h3>ABOUT THIS PAGE</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Est beatae eligendi quas quisquam, aspernatur atque architecto! 
                    Sapiente deleniti libero exercitationem! Distinctio nostrum voluptatem 
                    officia molestiae hic eius incidunt! Repellendus, ab?</p>
                    </div>
                    
            <div className="footer-seccion">
                <h3>CONTACT</h3>
                <p>Correo electronico: gregori7813@gmail.com</p>
                <p>telefono: </p>
                <p>Direccion: </p>
            </div>

            <div className="footer-seccion">
                <h3>SOCIAL MEDIA</h3>
                <ul>
                    <li><a href="#"><i>Facebook</i></a></li>
                    <li><a href="#"><i>Instagram</i></a></li>
                    <li><a href="#"><i>Twitter</i></a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear} KEV VISUAL. Todos los derechos reservados</p>
            </div>
        </div>
     </footer>   
    )
}

export default Footer;