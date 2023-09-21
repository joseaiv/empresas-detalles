import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {collection, getDocs, getDoc} from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';
import {async} from '@firebase/util';

const Show = () => {
    //1. config de hooks
    const [empresas, setEmpresas] = useState([]);
    const [empresasE, setEmpresasE] = useState([]);
    const [filterRow2, setFilterRow2] = useState([]);
    const [filterRow3, setFilterRow3] = useState([]);
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
    
    
    //4. se crea función para mostrar cada empresa sin repetirla (empresa espesifica)
    
    const getEmpresasE = async () => {
      
      setEmpresasE(
        empresas.map((es_emp) => ({ ... es_emp.data(), id: es_emp.id}))
      );
    }
    
    
    
    //5. se crea función para mostrar y calcular ventas totales por empresa
    const getTVentas = async () => {
        const data3= await getDocs(emp_collection); 
        setEmpresas(
          data3.docs.map((doc)=>({ ... doc.data(), id: doc.id}))
        );
        console.log(empresas);
      }
    
    //6. se crea función para mostrar y calcular comision por empresa
    const getTComision = async () => {
        const data4= await getDocs(emp_collection); 
        setEmpresas(
          data4.docs.map((doc)=>({ ... doc.data(), id: doc.id}))
        )
      console.log(empresas);
    }
    
    
    
    useEffect(() => {
      getEmpresas();
      //getEmpresasE();
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