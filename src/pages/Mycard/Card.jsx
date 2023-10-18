import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Card = ({my , setCard ,cards}) => {
    const {_id ,name ,price, photo , description ,brand , type} = my;

    const handelDelete =()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/mycard/${_id}`, {
                         method: 'DELETE',
                     })
                .then(res => res.json())
                .then(data=> {
                    if (data.deletedCount) {
                        Swal.fire(
                            'Deleted!',
                            'Your Product has been deleted.',
                            'success'
                        ) 
                     }
                     }) 
            }
          })
          const remaining = cards?.filter(card => card._id !== _id)
          setCard(remaining);
    }
    return (
        <div className="hero  lg:h-[330px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
        <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
        <h1 className="text-4xl font-bold">Name: {name}</h1>
        <h1 className="text-3xl font-bold">Brand: {brand}</h1>
        <div className=" flex  gap-8">
            <h1 className="text-2xl font-bold">price: ${price}</h1>
            <h1 className="text-2xl font-bold uppercase">{type}</h1>
        </div>
        <p className="py-6">{description}</p>
        </div>
        <div className=''>
            <button onClick={handelDelete} className='btn btn-block'>Delete</button>
            <Link><button className='btn btn-block'>Update</button></Link>
        </div>
        <div>

        </div>
    </div>
    </div>
    );
};

Card.propTypes = {
    my: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
    setCard: PropTypes.func.isRequired,
    cards: PropTypes.array.isRequired
  };

export default Card;