import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const updateData = useLoaderData();
    const {_id,name ,price, photo , description ,brand  } = updateData;
    const handelAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const getData = {name ,price, photo , description ,rating}
        fetch(`http://localhost:5000/models/id/${_id}` , {
            method: "PUT",
            body: JSON.stringify(getData),
            headers: { 
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data =>{
            if (data.modifiedCount > 0) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Product has been added successfully',
                })
            }
            })        
            

        form.reset();
    };

    return (
        
<form onSubmit={handelAdd} className="w-11/12 md:w-2/5 lg:w-1/3 mx-auto my-5">
<div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" defaultValue={name} name="name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" defaultValue={price} name="price" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price: $</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" defaultValue={photo} name="photo" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">URL (270*180p)</label>
    </div>
    {/* ratting */}
    <div className="relative z-0 w-full m-6 group">
                <div  className="rating">
            <input type="radio" name="rating" value="1" id="1" required className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating" value="2" id="2" required className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating" value="3" id="3" required className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating" value="4" id="4" required className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating" value="5" id="5" required className="mask mask-star-2 bg-orange-400" />
            </div>
    </div>
  </div>
  <div className="relative z-0 w-full mb-6 group ">
      <input type="text" defaultValue={description} name="description" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
  </div>
        <div className=" mb-5">
            <p>Brand name: {brand}</p>
        </div>
  <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit data</button>
</form>

    );
};

export default Update;