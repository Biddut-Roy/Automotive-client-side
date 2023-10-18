import Marquee from "react-fast-marquee";


const Gallery = () => {
    return (
        <div>
            <Marquee speed={20} behavior="alternate" >
  <div className=" w-56 h-60 flex space-x-24">
  <img className=" h-full w-full" src="https://i.ibb.co/FKtGSF8/Ford-F-Series-re.jpg" alt="" />
     <img className=" h-full w-full"  src="https://i.ibb.co/F7B1pn4/Toyota-RAV4-re.jpg" alt="" />
     <img className=" h-full w-full"  src="https://i.ibb.co/F420C2f/toyota-corolla-re.jpg" alt="" />
    <img className=" h-full w-full"  src="https://i.ibb.co/rHTD9dk/Mercedes-Benz.jpg" alt="" />
    <img className=" h-full w-full"  src="https://i.ibb.co/0h4sTYb/addHonda.jpg" alt="" />
    <img className=" h-full w-full"  src="https://i.ibb.co/HKprSmG/Toyota.jpg" alt="" />
    <img className=" h-full w-full"  src="https://i.ibb.co/ch32dV0/Tesla.jpg" alt="" />
    <img className=" h-full w-full"  src="https://i.ibb.co/Vj7yjNB/Ford.jpg" alt="" />
    <img className=" h-full w-full"  src="https://i.ibb.co/nP0W0ws/BMW.jpg" alt="" />
  </div>
  
            </Marquee>
        </div>
    );
};

export default Gallery;