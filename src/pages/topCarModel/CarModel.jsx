import { useEffect, useState } from "react";
import CarCard from "./CarCard";


const CarModel = () => {
    const [carData , setCarData] = useState();

    useEffect(() =>{
        fetch("https://top-auto-brand-53sj6su0h-biddut-roys-projects.vercel.app/top3")
        .then(res=>res.json())
        .then(data => setCarData(data))
    },[])
    return (

        <div className=" grid md:grid-cols-3 lg:grid-cols-3 md:gap-5 lg:gap-7 my-5 ">
            {
                carData?.map((top , idx) =><CarCard key={idx} top={top}></CarCard> )
            }
        </div>
    );
};

export default CarModel;