import { useLoaderData } from "react-router-dom";
import Card from "../brandCard/Card";
import Banner from "../banner/Banner";
import CarModel from "../topCarModel/CarModel";
import Gallery from "../Gallery/Gallery";



const Home = () => {
    const brandData = useLoaderData()
    return (
        <div className=" w-11/12 md:w-10/12 lg:w-10/12 mx-auto">
            <Banner></Banner>
            <h1 className=" text-center text-2xl font-semibold">MOST TOP BRAND</h1>
            <div className=" grid md:grid-cols-2 lg:grid-cols-2 gap-5 my-10 ">
                {
                    brandData?.map((brand, idx) => <Card brand={brand} key={idx}></Card>)
                }
            </div>
            <div>
                <h1 className=" text-center text-2xl font-semibold">Top 3 Model in World</h1>
                <CarModel></CarModel>
            </div>
            <div>
                <h1 className=" text-center text-2xl my-4 border-t-2 border-solid font-semibold">BRAND Gallery</h1>
                <Gallery></Gallery>
            </div>
        </div>
    );
};

export default Home;