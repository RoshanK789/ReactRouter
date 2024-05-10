import React from 'react';
import Card from '../Components/Card';

const CyberSecurity = ({data}) => {
    const CS=data.filter((element)=>element.Title==="Cyber Security")
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto my-auto  ">
                {CS.map((element,index)=>
                {
                    return(
                        <Card element={element} data={data} />
                    )
                })}
            </div>
        </div>
    );
};

export default CyberSecurity;