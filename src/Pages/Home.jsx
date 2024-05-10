import React from 'react';
import Card from '../Components/Card';

const Home = ({data}) => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto my-auto  ">
            {data.map((element,index)=>
            {
                return(
                    <Card element={element} index={index} />
                )
            })}
            </div>
        </div>
    );
};

export default Home;