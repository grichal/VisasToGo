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
            <h2 className="title2">ESPAÑOL</h2>
            <p>
              ES UNA OFICINA DE CONSULTAS Y TRÁMITES MIGRATORIOS A ESTADOS
              UNIDOS, DE ALTA INTEGRIDAD Y PROFESIONALISMO. SU LICENCIADO,
              ISAÍAS GRULLÓN, FUE SARGENTO DE LA POLICÍA DE LA CIUDAD DE NUEVA
              YORK (NYPD) POR 20 AÑOS. ES GRADUADO DE JOHN JAY COLLEGE OF
              CRIMINAL JUSTICE, MANHATTAN, NY. TAMBIÉN ESTÁ CERTIFICADO EN LEYES
              Y TRÁMITES MIGRATORIOS POR EL US IMMIGRATION INSTITUTE, ORLANDO,
              FL.
            </p>
            <h2 className="title2">ENGLISH</h2>
            <p>
              VISAS TO GO RD IS AN OFFICE IN THE DOMINICAN REPUBLIC SPECIALIZED
              IN IMMIGRATION MATTERS TO THE UNITED STATES. IT"S PRESIDENT,
              ISAIAS GRULLON, HAS A BACHELOR'S DEGREE IN CRIMINAL JUSTICE FROM
              JOHN JAY COLLEGE OF CRIMINAL JUSTICE, MANHATTAN NEW YORK. HE IS
              ALSO CERTIFIED IN US IMMIGRATION LAWS BY THE US IMMIGRATION
              INSTITUTE, ORLANDO FLORIDA. FURTHERMORE, HE IS A RETIRED NEW YORK
              CITY POLICE SERGEANT (NYPD).
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
