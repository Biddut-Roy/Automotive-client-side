import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";


const MyCard = () => {
    const cards = useLoaderData()
    const [card ,setCard]= useState(cards)

    return (
        <div className="w-11/12 md:w-10/12 lg:w-10/12 mx-auto my-10">
            <div className=" grid grid-cols-1 gap-10">
                {
                    card?.map(my =><Card my={my} key={my._id} setCard={setCard} cards={cards}></Card>)
                }
        </div>
        </div>

    );
};

export default MyCard;