import React from 'react'

export const App = () => {
  const logosony = "./img/SONY.png"
  const logoplaystation ="./img/logo1.png"
  const logospiderman = "./img/spiderman.jpeg"
  const imagen1= "./img/imagen1.jpeg"
  const imagen2= "./img/imagen2.jpeg"
  const imagen3= "./img/imagen3.jpeg"
  const imagen4="./img/imagen4.jpeg"
  const imagen5="./img/imagen5.jpeg"
  return (
    <div>
      
    <img src={logosony} alt="Descripción de la imagen" className="imagen-superior"/>
   
    <header>
        <div className="logo">
            <img src={logoplaystation} alt="PlayStation Logo"/>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Juegos</a></li>
                    <li><a href="#">Consolas</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Soporte</a></li>
                    <li><a href="#" >Registro</a></li>
                </ul>
            </nav>
        </div>

        <div className="container">
            <input type="text" placeholder="Buscar"/>
            <div className="btn">
                <i className="fa fa-search"></i>
            </div>
        </div>
    </header>

    <section>
        <section className="section2">
            <div className="cuerpo">
                <div>
                    <h3><span className="p1">MARVEL</span></h3>
                    <p className="p2">SPIDER-MAN 2</p>
                    <p className="p3">Ser mejores. Juntos.</p>
                    <p className="p4">Peter Parker y Miles Morale regresana para una nueva y emocionante <br/> aventura de la
                        aclamada franquicia de Marvel's Spider-Man, ya <br/> disponible para PS5.</p>
                    <button className="boton">Comprar ahora</button>
                </div>

            </div>
        </section>
        <section className="section1">
            <img src={logospiderman} alt=""/>
        </section>  
        
    </section>

    <div className="linea">
        <a href="#"><img src={imagen1} className="imagenes zoon" alt=""/></a>
        <a href="#"><img src={imagen2} className="imagenes zoon" alt=""/></a>
        <a href="#"><img src={imagen3} className="imagenes zoon" alt=""/></a>
        <a href="#"><img src={imagen4} className="imagenes zoon" alt=""/></a>
        <a href="#"><img src={imagen5} className="imagenes zoon" alt=""/></a>
    </div>
   
    <footer>
        <p>© 2024 Sony Interactive Entertainment Inc. Todos los derechos reservados.</p>
    </footer>
    </div>
  )
}
export default App;
