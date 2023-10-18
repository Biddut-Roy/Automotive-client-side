import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const ModelCard = ({model}) => {
   const  { _id,name ,price, photo , description ,brand , rating , type} = model;
    return (
        <div>
              <div className="relative flex flex-col text-gray-700 bg-white shadow-md lg:w-[75%] lg:mx-auto rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    <img className=' mx-auto rounded-md'
      src={photo}
      alt="img-blur-shadow"
      
    />
  </div> 
  <div className=' flex justify-around text-base lg:text-xl font-medium md:font-semibold lg:font-bold'>
    <h5 className="mb-2 font-sans  text-center antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Brand: {brand}
    </h5>
  <h5 className="mb-2 font-sans  text-center antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {name}
    </h5>
    <h5 className="mb-2 font-sans  text-center antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Price: ${price}
    </h5>
  </div>
  <div className=" flex gap-5 mx-3 md:flex md:justify-between lg:flex lg:justify-between items-center">
    
    <h5 className="mb-2 font-sans  antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
   {description && description?.slice(0 , 100) }
    </h5>
    <div className="">
    <h5 className="mb-2  font-sans  text-center antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Type:{type}
    </h5>
    <div className="rating items-center">
                       <span className=" text-2xl font-semibold">{rating}</span>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    </div>
  </div>
  </div>
  <div className=''>
  <Link to={`/models/id/${_id}`}>
   <button 
      className="select-none my-4 rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
     View Details
    </button>
   </Link>
   <Link to={`/update/${_id}`}><button className='btn btn-block'>Update</button></Link>
  </div>
  
</div>
        </div>
    );
};

ModelCard.propTypes = {
    model: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    }).isRequired,
    slice: PropTypes.func.isRequired
  };

export default ModelCard;