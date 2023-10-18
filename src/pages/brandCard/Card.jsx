import PropTypes from 'prop-types';

const Card = ({brand}) => {

    const { name , photo} = brand;
    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md lg:w-[75%] lg:mx-auto rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    <img className=' mx-auto rounded-md'
      src={photo}
      alt="img-blur-shadow"
      
    />
  </div> 
  <div className="p-6 flex justify-around md:flex md:justify-between lg:flex lg:justify-between items-center">
    <h5 className="mb-2 font-sans  text-center antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {name}
    </h5>
    <div className=" ">
    <button
      className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
     BRAND Model
    </button>
  </div>
  </div>
  
</div>
    );
};

Card.propTypes = {
    brand: PropTypes.shape({
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card;