import { Link } from "react-router-dom";
import beef from "../assets/beef.jpg";
import burger from "../assets/burger.jpg";
import bik from "../assets/bik.jpg";
import by from "../assets/by.jpg";
import chips from "../assets/chips.jpg";
import like from "../assets/like.jpg";
import grilled from "../assets/grilled.jpg";
import lie from "../assets/lie.jpg";
import lil from "../assets/lil.jpg";
import rice from "../assets/rice.jpg";
import wedges from "../assets/wedges.jpg";
import dinner from "../assets/dinner.jpg";
import cheese from "../assets/cheese.jpg";

function MenuItems() {

  const meals = [
    {
      id: 1,
      name: "Crispy Fried Chicken",
      description: "Golden crispy chicken served with fries and fresh salad.",
      price: "$6.99",
      image: beef,
    },
       {
      id: 2,
      name: "Crispy Fried Chicken and Chips",
      description: "Golden crispy chicken served with fries and fresh salad.",
      price: "$4.50",
      image: like,
    },
   {
      id: 3,
      name: "Juicy Beef Burger with Cheese",
      description: "Juicy beef burger with cheese, lettuce and special sauce",
      price: "$3.00",
      image: by,
    },
       {
      id: 4,
      name: "Chicken and Chips ",
      description: "Golden crispy chicken  and chips served with fries and fresh salad.",
      price: "$3.50",
      image: bik,
    },
    {
      id: 5,
      name: " Burger",
      description: "Juicy beef burger , lettuce and special sauce.",
      price: "$2.00",
      image: burger,
    },

    {
      id: 6,
      name: "Fried Rice and Russians",
      description: "Fried rice with beef and russians.",
      price: "$4.99",
      image: lie,
    },
 {
      id: 7,
      name: "Grilled Chicken Skewers ",
      description: "Ultra-Realistic Grilled Chicken Skewers with Rice, Crispy Fries & Fresh Garden Salad.",
      price: "$5.75",
      image: grilled,
    },
    {
      id: 8,
      name: "Mixed  ",
      description: "Mixed munandi foods, Crispy Fries.",
      price: "$5.99",
      image: lil,
    },
    {
      id: 9,
      name: "Rice and Chicken ",
      description: "Rice and Chicken, Crispy Fries & Fresh Garden Salad.",
      price: "$4.00",
      image: rice,
    },
       {
      id: 10,
      name: "Chicken with wedges",
      description: "Chicken with wedges and fresh salad.",
      price: "$4.99",
      image: wedges,
    },
       {
      id: 11,
      name: "Chicken and chips and potatoes with rice",
      description: "Golden crispy chicken served with rice and potatoes with fries.",
      price: "$6.50",
      image: dinner,
    },
       {
      id: 12,
      name: " Sausage , Fries and macaroni ",
      description: "Sausages , Fries with macaroni.",
      price: "$5.00",
      image: cheese,
    },
  ];


  return (
    <div className="grid md:grid-cols-3 gap-8">

      {meals.map((meal) => (

        <div 
          key={meal.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
        >

          <img
            src={meal.image}
            alt={meal.name}
            className="w-full h-56 object-cover"
          />


          <div className="p-6">

            <h2 className="text-2xl font-bold text-gray-800">
              {meal.name}
            </h2>

            <p className="text-gray-600 mt-3">
              {meal.description}
            </p>


            <div className="flex justify-between items-center mt-5">

              <span className="text-red-600 font-bold text-xl">
                {meal.price}
              </span>


              <Link
  to="/contact"
  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 inline-block"
>
  Order Now
</Link>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default MenuItems;