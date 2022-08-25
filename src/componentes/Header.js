import logo from '../logotipo.png';
import './Header.css';

export default function Header() {
    return(
        <div className='contenedorHeader'>
            <header className="headerDino" style={{'zIndex':'4'}}>
                <div className="columna">
                    <div className="fila">
                        <a href="https://www.google.com">
                            <img src={logo} className="logoImg" alt="Logo de DinoTeddy"></img>
                        </a>
                    </div>
                </div>
                <div className="columna">
                    <div className="fila">
                        <nav className="menuNav">
                            <p className="enlace">Productos</p>
                            <p className="enlace">Sucursales</p>
                            <p className="enlace">Nosotros</p>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    );
}