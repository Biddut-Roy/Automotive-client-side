import { useLoaderData } from "react-router-dom";
import ModelCard from "./ModelCard";
import Advertisement from "./Advertisement";


const Models = () => {

    const models = useLoaderData()


    return (
        <div className=" w-11/12 md:w-10/12 lg:w-10/12 mx-auto">
            <div>
                <Advertisement></Advertisement>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 my-10">
            {
                models?.map(model =><ModelCard model={model} key={model._id}></ModelCard>)
            }
            </div>
        </div>
    );
};

export default Models;