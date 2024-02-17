import { IMAGE } from "../util/constant";

const CardElemet = (props) => {
  const { data } = props;
  return (
    <div className=" m-8 w-[200px] hover:border border-black">
      <div className="h-64 relative">
        <img className="h-32 w-full"
          src={
            IMAGE +
            data.info.cloudinaryImageId
          }
        />
        <h2 className="font-semibold">{data.info.name}</h2>
        <h2 className="truncate font-light">{data.info.cuisines.join(",")}</h2>
        <h2 className="font-light">{data.info.avgRatingString}</h2>
        <h3 className="font-bold">{data.info.areaName}</h3>
       
      </div>
    </div>
  );
};

export default CardElemet;