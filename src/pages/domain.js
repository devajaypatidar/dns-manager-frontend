import React from 'react';
import DomainRegister from '../components/Domain/DomainRegister';
import GetAllDomain from '../components/Domain/GetAllDomain';
import DeleteDomain from '../components/Domain/DeleteDomain';
function Domain(){
    return (
        <div> 
        <DomainRegister/>
        <GetAllDomain></GetAllDomain>
        <DeleteDomain></DeleteDomain>
        </div>
    )
}

export default Domain ;