import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-seccion">
          <h3>ABOUT THIS PAGE</h3>
          <p>
            VISAS TO GO RD ES UNA OFICINA DE CONSULTAS Y TRÁMITES MIGRATORIOS A
            ESTADOS UNIDOS DE ALTA INTEGRIDAD Y PROFESIONALISMO. SU LICENCIADO,
            ISAÍAS GRULLÓN, FUE SARGENTO DE LA POLICÍA DE LA CIUDAD DE NUEVA
            YORK (NYPD) POR 20 AÑOS. ES GRADUADO DE JOHN JAY COLLEGE OF CRIMINAL
            JUSTICE, MANHATTAN, NY. TAMBIÉN ESTÁ CERTIFICADO EN LEYES Y TRÁMITES
            MIGRATORIOS POR EL US IMMIGRATION INSTITUTE, ORLANDO, FL.
          </p>
        </div>
        <div className="footer-seccion">
          <h3>CONTACT</h3>
          <p>CORREO: VISASTOGORD@GMAIL.COM</p>
          <p>TELEFONO: (829) 763-7928</p>
          <p>DIRECCION: LA VEGA, REPUBLICA DOMINICANA</p>
        </div>
        <div className="footer-seccion">
          <h3>SOCIAL MEDIA</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100091582413156">
                <i>Facebook</i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/visastogord/">
                <i>Instagram</i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear} VISAS TO GO. Todos los derechos
            reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
