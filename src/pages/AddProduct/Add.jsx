import Swal from "sweetalert2";



const Add = () => {


    const handelAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const data = {name ,price, photo , description ,brand , rating , type}
        console.log(data);
        fetch("http://localhost:5000/models" , {
            method: "POST",
            body: JSON.stringify(data),
            headers: { 
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
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
        
<form onSubmit={handelAdd} className="w-11/12 md:w-2/5 lg:w-1/3 mx-auto">
<div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="price" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price: $</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="photo" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
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
      <input type="text" name="description" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
  </div>
  {/* BRAND model */}
  <div className="relative z-0 w-full mb-6 group grid grid-cols-2 gap-12 lg:grid-cols-3">
            <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">BMW</span> 
                <input 
                    type="radio"
                    name="brand"
                    value="BMW"
                    id="BMW"
                    className="radio checked:bg-blue-500"
                    required
                
                />
            </label>
            </div>
            <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">FORD</span> 
                <input 
                    type="radio"
                    name="brand"
                    value="FORD"
                    id="FORD"
                    className="radio checked:bg-blue-500"
                    required
                
                />
            </label>
            </div>
            <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">TOYOTA</span> 
                <input 
                    type="radio"
                    name="brand"
                    value="TOYOTA"
                    id="TOYOTA"
                    className="radio checked:bg-blue-500"
                    required
                
                />
            </label>
            </div>
            <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">TESLA</span> 
                <input 
                    type="radio"
                    name="brand"
                    value="TESLA"
                    id="TESLA"
                    className="radio checked:bg-blue-500"
                    required
                
                />
            </label>
            </div>
            <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">HONDA</span> 
                <input 
                    type="radio"
                    name="brand"
                    value="HONDA"
                    id="HONDA"
                    className="radio checked:bg-blue-500"
                    required
                
                />
            </label>
            </div>
            <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">Mercedes-Benz</span> 
                <input 
                        type="radio"
                        name="brand"
                        value="Mercedes-Benz"
                        id="Mercedes-Benz"
                        className="radio checked:bg-blue-500"
                        required
                />
                        
            </label>
            </div>
  </div>
  {/* TYPE */}
        <div className="relative z-0 w-full mb-6 group">

        <div className="">
        <label className=" label cursor-pointer">
            <span className="label-text">Car</span> 
            <input 
                type="radio"
                value="Car"
                id="Car"
                name="type"
                className="radio checked:bg-blue-500"
                required
                 />
        </label>
        </div>
        <div className="form-control">
        <label className="label cursor-pointer">
            <span className="label-text">Bike</span> 
            <input
                    type="radio"
                    value="Bike"
                    id="Bike"
                    name="type"
                    className="radio checked:bg-blue-500"
                    required
                     />
        </label>
        </div>
      
    </div>

  <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit data</button>
</form>

    );
};

export default Add;