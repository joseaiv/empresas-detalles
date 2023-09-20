import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {collection, getDocs, getDoc} from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';
import {async} from '@firebase/util';

const Show = () => {
    //1. config de hooks
    const [empresas, setEmpresas] = useState([]);
    //const mostrarEmpresa = ;


    //2. se referencia DB de firestore
    const emp_collection = collection(db, "empresas");

    //3. se crea función para mostrar TODOS los documentos
    const getEmpresas = async () => {
        const data= await getDocs(emp_collection);
        //console.log(data.docs); 
        setEmpresas(
          data.docs.map((doc)=>({ ... doc.data(), id: doc.id}))
        )
      console.log(empresas);
    }
    
    useEffect(() => {
      getEmpresas();
    }, [])
    

    return (
    <>
      <div className='container'>
        <div className='row'> 
          <div className='col'>
            
            <div className='d-grid gap-2'>
              
            </div> 

            <table className='table table-dark table-hover'>
              
              <thead>
                <tr>
                  <th>Nombre empresa</th>
                  <th>Total de ventas</th>
                  <th>Comisión</th>
                  <th>Detalle</th>
                </tr>
              </thead>

              <tbody>
                {empresas.map((empresa)=>(
                  <tr key={empresa.id}>
                    <th> {empresa.nameAgency} </th>
                    <th> {empresa.finalPrice} </th>
                    <th> --- </th>
                    <th> ver detalle </th>
                  </tr>
                ))}
              </tbody>

            </table>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default Show