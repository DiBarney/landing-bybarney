import {useEffect, useState} from 'react'
import './Slider.css';

export default function Slider(props) {
    const sliderContent = props.sliderContent
    const numImagenes = sliderContent.length;
    
    const [posSlider, setPosSlider] = new useState(0);

    useEffect(()=>{
        document.getElementById('elementosSlider').style.width = `${numImagenes*100}%`;
    });

    const dezplazarDerecha = (posSlider) => {
        if(posSlider === 0){
            document.getElementById('elementosSlider').style.marginLeft = `-${(numImagenes-1)*100}%`;
            setPosSlider(numImagenes-1);
        }else{
            document.getElementById('elementosSlider').style.marginLeft = `-${(posSlider-1)*100}%`;
            setPosSlider(posSlider - 1);
        }
    }

    const dezplazarIzquierda = (posSlider) => {
        if(posSlider === numImagenes-1){
            document.getElementById('elementosSlider').style.marginLeft = `-0%`;
            setPosSlider(0);
        }else{
            document.getElementById('elementosSlider').style.marginLeft = `-${(posSlider+1)*100}%`;
            setPosSlider(posSlider + 1);
        }
    }

    return (
    <div style={{'zIndex':'2'}}>
        <div className='contenedorSlider'>
            <div className='slider'>
                <div className='contElementos'>
                    <div className='elementosSlider' id='elementosSlider'>
                        {sliderContent.map((elemento)=>{
                            if(elemento.image){
                                return(
                                    <div className='elementoSlider' key={elemento.index}>
                                        <img src={elemento.imgsrc} alt={elemento.imgAlt}></img>
                                    </div>
                                );
                            }else{
                                return(
                                    <div className='elementoSlider' key={elemento.index}>
                                        {elemento.div}
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
                <div className='botonTrigger' id='triggPrev' onClick={()=>{dezplazarDerecha(posSlider)}}><p>◀</p></div>
                <div className='botonTrigger' id='triggNext' onClick={()=>{dezplazarIzquierda(posSlider)}}><p>▶</p></div>
            </div>
        </div>
    </div>
  )
}