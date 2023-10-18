import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const DetailsCard = () => {

    const product = useLoaderData();
    const {name ,price, photo , description ,brand , rating , type} = product ;


    const handelCard=()=>{
        fetch("http://localhost:5000/mycard",{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
        .then( res => res.json())
        .then(data => {
            if (data.acknowledged) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Product added successfully',
                  })
            }
        })
    }

    return (
             <div className="hero min-h-screen lg:h-[400px] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-4xl font-bold">Name: {name}</h1>
                <h1 className="text-3xl font-bold">Brand: {brand}</h1>
                <div className=" flex  gap-8">
                    <h1 className="text-2xl font-bold">price: ${price}</h1>
                    <h1 className="text-2xl font-bold uppercase">{type}</h1>
                    <div className="rating items-center">
                       <span className=" text-2xl font-semibold">{rating}</span>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    </div>
                </div>
                <p className="py-6">{description}</p>
                <button onClick={handelCard} className="btn btn-primary">add to Card</button>
                </div>
            </div>
            </div>
    );
};



export default DetailsCard;