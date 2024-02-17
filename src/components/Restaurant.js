import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../util/constant";
import RestarantCatogary from "./RestarantCatogary";

const InfoAboutRes = () => {
  const [ResInfo, setResInfo] = useState([]);
  const [showIndex, setShowIndex] = useState(null);

  const param = useParams();
  console.log(param.resid);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      let data = await fetch(Api + param.resid);

      let info = await data.json();

      setResInfo(info?.data?.cards);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (ResInfo === null || ResInfo.length === 0)
    return (
      <div>
        <img src="https://www.shutterstock.com/image-vector/we-closed-today-vector-sign-260nw-2331199471.jpg"></img>
      </div>
    );
  console.log(ResInfo);
  const { name, cuisines, areaName } = ResInfo[0].card?.card?.info;
  const { deliveryTime } = ResInfo[0].card?.card?.info?.sla;

  const ItemCard = ResInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const catagory = ItemCard.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );


  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <h3 className="font-bold text-larg">{cuisines}</h3>
      <p className="font-bold text-larg mt-2">
        {" "}
        {areaName} , {deliveryTime} MIN;
      </p>
      {catagory.map((catagory, index) => (
        <RestarantCatogary
          key={index}
          data={catagory?.card?.card}
          showItem={index===showIndex ? true :false}
          setShowIndex={()=> setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default InfoAboutRes;
