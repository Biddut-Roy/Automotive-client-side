import PropTypes from 'prop-types';

const CarCard = ({top}) => {
    const { name , photo , details} = top;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl flex">
            <figure><img className=' rounded-lg' src={photo} alt="car" /></figure>
            <div className="">
                <h2 className=" my-5 font-bold text-2xl">
                {name}
                </h2>
                <div className='flex flex-wrap'>
                    <p>{details}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

CarCard.propTypes = {
    top: PropTypes.shape({
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
    }).isRequired,
};

export default CarCard;