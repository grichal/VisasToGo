import React from "react";
import imageRob from "../assets/image1.png"
import './firsSection.css'

const FirsSection =()=>{
    return(<>
        <section className="firstsection" id="first">

            <div className="desc">
                <h1 className="title">VISAS TO GO</h1>
                <p>Es una oficina de consultas y tramites migratorios a estados unidos, de alta integridad y profesionalismo. su lisenciado, isaias grullon, fue sargento de la policia de la ciudad de nueva york, (NYDP), por 20 años. es graduado de john hay college of criminal justic, manhattan NY. Tambien esta certificado, en leyes y tramites migratorios por el US Inmigration institute, Orlando, FL,</p>
                <button>CONTACTANOS</button>
               <p className="DTCEN"> DEPOSITA TU CONFIANZA EN NOSOTROS</p>
            </div>
            <div className="image">
                <img src={imageRob} alt="" />
            </div>
        </section>
        </>
    )
}

export default FirsSection;