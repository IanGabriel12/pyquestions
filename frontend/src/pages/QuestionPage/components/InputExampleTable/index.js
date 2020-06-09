import React from 'react';
import './index.css';

export default function InputExampleTable(props){
   if(props.inputExamples.length === 0){
      return null;
   }
   
   return (
      <table className='example-table'>
         <thead>
            <tr className='header-row'>
               <th>Exemplos de Entrada</th>
               <th>Exemplos de Saída</th>
            </tr>
         </thead>
         <tbody>
            {props.inputExamples.map((example, index) => (
               <tr key={index}>
                  <td>
                     {example.input.split('\n').map((input, index) => (
                        <p key={index}>{input}</p>
                     ))}
                  </td>
                  <td>
                     {example.output.split('\n').map((output, index) => (
                        <p key={index}>{output}</p>
                     ))}
                  </td>
                  
               </tr>
            ))}
         </tbody>
      </table>
   )
}