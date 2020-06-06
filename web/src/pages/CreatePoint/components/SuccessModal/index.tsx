import React from 'react';
import { FiCheck } from 'react-icons/fi';
import './styles.css';

interface ModalProps {
   show: boolean;
}

const SuccessModal = (props: ModalProps) => {

   const show = props.show;

   const opacity = show ? 0.95 : 0;
   const zIndex = show ? 100000 : -1

   return (
      <div className="success" style={{opacity, zIndex}}>
         <FiCheck id='check'/>
         <h1>Ponto de coleta criado com sucesso</h1>
      </div>
   )
}

export default SuccessModal;