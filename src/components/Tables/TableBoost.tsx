"use client";

import Image from "next/image";
import { useState } from "react";

const boostData = [
  {
    logo: "",
    name: "Multitap",
    levels: [
      {
        level: 1,
        price: 500,
      },
      {
        level: 2,
        price: 1500,
      },
      {
        level: 3,
        price: 2500,
      },
    ],
  },
  {
    logo: "",
    name: "Recharging Speed",
    levels: [
      {
        level: 1,
        price: 500,
      },
      {
        level: 2,
        price: 1500,
      },
      {
        level: 3,
        price: 2500,
      },
    ],
  },
  {
    logo: "",
    name: "Energy Limit",
    levels: [
      {
        level: 1,
        price: 500,
      },
      {
        level: 2,
        price: 1500,
      },
      {
        level: 3,
        price: 2500,
      },
    ],
  },
  {
    logo: "",
    name: "Double Tap (X2)",
    levels: [
      {
        level: 1,
        price: 500,
      },
      {
        level: 2,
        price: 1500,
      },
      {
        level: 3,
        price: 2500,
      },
    ],
  },
]

const TableBoost = () => {
  const [DataBoost, setDataBoost] = useState(boostData);

  const handleAddLevel = (index: any) => {
    const newDataBoost = [...DataBoost];
    const lastLevel = newDataBoost[index].levels[newDataBoost[index].levels.length - 1];

    const newLevel = {
      level: lastLevel.level + 1,
      price: 1000 * (lastLevel.level + 1),
    };

    newDataBoost[index].levels.push(newLevel);

    setDataBoost(newDataBoost);
  };

  const handleRemoveLevel = (boostIndex:any, levelIndex:any) => {
    const newDataBoost = [...DataBoost];
    newDataBoost[boostIndex].levels.splice(levelIndex, 1);
    setDataBoost(newDataBoost);
  };

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {DataBoost?.map((data, boostindex) => (
        <div className="bg-white rounded-xl p-5" key={boostindex}>
          <Image className="w-28 h-28 mx-auto" src={'/images/placeholder.png'} alt="placeholder" width={200} height={200} />
          <p className="text-center my-2">{data.name}</p>
          {data?.levels?.map((level, index) => (
            <div className="flex items-center space-x-2 mb-2" key={index}>
              <p className="leading-none">Lv.{level.level}</p>
              <div>
                <p className="text-xs">Price</p>
                <input
                  type="text"
                  value={level.price}
                  placeholder="Price"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-0.5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                />
              </div>
              <button onClick={() => handleRemoveLevel(boostindex, index)} className="rounded-full bg-red-500 p-1 text-white"><svg fill="currentColor" className="w-3 h-3 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg></button>
            </div>
          ))}
          <button onClick={() => handleAddLevel(boostindex)} className="bg-blue-500 text-white rounded py-1.5 mt-2 w-full">New level +</button>
          <button className="bg-blue-500 text-white rounded py-1.5 mt-2 w-full">Save</button>
        </div>
      ))}
    </div>
  );
};

export default TableBoost;
