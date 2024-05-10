import React from 'react';
import Card from '../Components/Card';

const DataScience = ({data}) => {
    const DS=data.filter((element)=>element.Title==="Data Science")
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto my-auto  ">
                {DS.map((element,index)=>
                {
                    return (
                        <Card element={element} index={index} />
                    )
                })}
            </div>
        </div>
    );
};

export default DataScience;