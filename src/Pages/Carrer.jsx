import React from 'react';
import Card from '../Components/Card';

const Carrer = ({data}) => {
    const car=data.filter((element)=>element.Title==="Carrer")
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto my-auto  ">
                {car.map((element,index)=>
                {
                    return(
                        <Card element={element} data={data} />
                    )
                })}
            </div>
        </div>
    );
};

export default Carrer;