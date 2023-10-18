import { useLoaderData } from "react-router-dom";
import Card from "../brandCard/Card";
import Banner from "../banner/Banner";



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
        </div>
    );
};

export default Home;