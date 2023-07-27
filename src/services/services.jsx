import React from "react";
import './services.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Services = () => {
    const serviceContent = [
        {
            servicio:'Asesoria general de migracion',
            description:'Hacia estados unidos',
            img:'https://www.aycelaborytax.com/wp-content/uploads/2019/09/contratar-asesor-fiscal-600x400-1.png'
        },
        {
            servicio:'Peticiones familiares(residencia)',
            description:'I-130 Y LOS 6 PASOS',
            img:'https://s.yimg.com/ny/api/res/1.2/3PHYGR57R6ZE8amU4BMNPw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2022-09/050942b0-37d8-11ed-a6be-0bd8932284a9'
        },
        {
          servicio:"Visas de turista y negocios",
          description:"(B1/B2)",
          img:'https://static01.nyt.com/images/2017/03/01/nyregion/01TOURISM1/01TOURISM1-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
        },
        {
          servicio:"Visa de prometida(o)",
          description:"K1",
          img:'https://www.nyhabitat.com/sp/blog/wp-content/uploads/2020/02/escapada-nueva-york-san-valentin-apartamentos-romanticos-puente-brooklyn-pareja.jpg'
        },
        {
          servicio:"Trámites para obtener ciudadanía americana",
          description:'nacimiento en el extranjero o naturalización',
          img:'https://media.istockphoto.com/id/1127585195/es/foto/hombre-y-su-peque%C3%B1o-hijo-encantador-admiran-las-vistas-de-central-park-nueva-york.jpg?s=612x612&w=0&k=20&c=6silx5eMpwHweyxjJmnbZtcq096caIKy6FLFwlZhglo='
        },
        {
          servicio:"Solicitud de evidencia",
          description:'Request for evidence',
          img:'https://www.auditool.org/images/images/Fotolia_81731372_S4.jpg'
        
        }
    ]
  return (
    <>
    <div className="servicesContainer">
    <h1 className="ourservices">NUESTROS SERVICIOS</h1>
    <section className="services">
            {serviceContent.map((data,index)=>(
                <div>
                <Card sx={{ maxWidth: 345, borderRadius: '20px'}}key={index} className='card'>
         <CardMedia
           sx={{ height: 200 }}
           image={data.img}
           title="service"/>
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
            {data.servicio}
           </Typography>
           <Typography variant="body2" color="text.secondary">
             {data.description}
           </Typography>
         </CardContent>
       </Card>
        </div>
            ))}
    </section>
    </div>
    </>
  );
};

export default Services;
