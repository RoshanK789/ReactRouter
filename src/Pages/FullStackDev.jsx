import React from 'react';
import Card from '../Components/Card';

const FullStackDev = ({data}) => {
    const FSD=data.filter((element)=>element.Title==="Full Stack Development")
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto my-auto  ">
            {FSD.map((element,index)=>
            {
                return(
                    <Card element={element} index={index} />
                )
            })}
            </div>
        </div>
    );
};

export default FullStackDev;