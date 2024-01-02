import React from 'react';


export const CustomBanner = () => {

  return (
    
    <div className='container-fluid'>
        <div className='row'  style={{ justifyContent: 'center', alignItems: 'center'}}>
            <div className='col-12 p-3'>
                <div style={{fontSize: '40px', fontWeight: 'bold'}}>RollingCode</div>
                <div style={{fontSize: '30px'}}>Ejercicio Practico GiMoji!</div>
                <div style={{fontSize: '13px'}}>Implmentacion Hooks y async/await y consumo apiRest</div>
            </div>
        </div>
    </div>
  )

}
