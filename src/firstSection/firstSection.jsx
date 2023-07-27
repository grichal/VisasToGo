import React from "react";
import imageRob from "../assets/image1.png";
import "./firsSection.css";

const FirsSection = () => {
  const redirectP = () => {
    window.location.href = "#contactUs";
  };
  return (
    <>
      <section className="firstsection" id="first">
        <div className="desc">
          <h1 className="title">VISAS TO GO RD</h1>
          <div className="firstDescription">
          <h2 className="title2">SPANISH</h2>
          <p>
            ES UNA OFICINA DE CONSULTAS Y TRÁMITES MIGRATORIOS A ESTADOS UNIDOS,
            DE ALTA INTEGRIDAD Y PROFESIONALISMO. SU LICENCIADO, ISAÍAS GRULLÓN,
            FUE SARGENTO DE LA POLICÍA DE LA CIUDAD DE NUEVA YORK (NYPD) POR 20
            AÑOS. ES GRADUADO DE JOHN JAY COLLEGE OF CRIMINAL JUSTICE,
            MANHATTAN, NY. TAMBIÉN ESTÁ CERTIFICADO EN LEYES Y TRÁMITES
            MIGRATORIOS POR EL US IMMIGRATION INSTITUTE, ORLANDO, FL.
          </p>
          <h2 className="title2">ENGLISH</h2>
          <p>
            IT IS AN OFFICE FOR CONSULTATIONS AND IMMIGRATION PROCEDURES TO THE
            UNITED STATES, KNOWN FOR ITS HIGH INTEGRITY AND PROFESSIONALISM. ITS
            ATTORNEY, ISAÍAS GRULLÓN, SERVED AS A SERGEANT IN THE NEW YORK CITY
            POLICE DEPARTMENT (NYPD) FOR 20 YEARS. HE IS A GRADUATE OF JOHN JAY
            COLLEGE OF CRIMINAL JUSTICE, MANHATTAN, NY. HE IS ALSO CERTIFIED IN
            IMMIGRATION LAWS AND PROCEDURES BY THE US IMMIGRATION INSTITUTE,
            ORLANDO, FL.
          </p>
          </div>
          <button onClick={redirectP}>CONTACTANOS</button>
          <p className="DTCEN"> DEPOSITA TU CONFIANZA EN NOSOTROS</p>
        </div>
        <div className="image">
          <img src={imageRob} alt="" />
        </div>
      </section>
    </>
  );
};

export default FirsSection;
