import { useEffect } from 'react';
import './Landing.css';
import Header from './componentes/Header';
import Slider from './componentes/Slider';

const infoPagina = {
  'titulo': 'Dino Teddy | prehistoricos y adorables',
  'dir': 'http://localhost/landing-bybarney/src/'
}
const midiv = <div><p style={{'color': '#f2f2f2'}}>Hola Banner</p></div>;
const sliderContent = [
  {
    'index': '1',
    'image': true,
    'imgsrc': infoPagina.dir + '/img/banner1.webp',
    'imgAlt': 'Banner 1'
  },
  {
    'index': '2',
    'image': true,
    'imgsrc': infoPagina.dir + '/img/banner2.webp',
    'imgAlt': 'Banner 2'
  },
  {
    'index': '3',
    'image': false,
    'div': midiv
  },
  {
    'index': '4',
    'image': true,
    'imgsrc': infoPagina.dir + '/img/banner4.webp',
    'imgAlt': 'Banner 3'
  }
]

function Landing() {
  useEffect(() => {
    document.title = infoPagina.titulo;
  });
  return (
    <div className="Landing">
      <Header/>
      <Slider sliderContent={sliderContent}/>
    </div>
  );
}

export default Landing;
