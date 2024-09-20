"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DatePicker from "react-datepicker";
import Image from "next/image";

import "react-datepicker/dist/react-datepicker.css";

const GeneralPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [IsAD, setIsAD] = useState(false);
  const [IsLive, setIsLive] = useState(false);

  return (
    <div>
      <Breadcrumb pageName="General" />

      <div className="flex flex-col gap-10">
        <div>
          <div className="mb-4">
            <p className="text-xl text-gray-900 mb-2">Airdrop</p>
            <div className="bg-white rounded-xl shadow p-5">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium mb-2">Switch On to prepare Airdrop Event/Switch Off to cancel the Event</p>
                {IsLive ?
                  <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                    Live
                  </span>
                  :
                  <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
                    Closed
                  </span>
                }
              </div>
              <label className="inline-flex items-center me-5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={IsAD}
                  onChange={(e) => {
                    setIsAD(e.target.checked);
                    if (IsAD) {
                      setIsLive(false);
                    }
                  }}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-graydark rounded-full peer peer-focus:ring-blue-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
              </label>
              <div className="block mt-2">
                <p className="mb-1 text-sm">Date Airdrop Event</p>
                <DatePicker className={`${IsAD ? 'bg-gray' : 'select-none bg-graydark opacity-50'} z-50 rounded py-1 px-4 text-lg`} disabled={true} showTimeSelect selected={startDate} onChange={(date: any) => setStartDate(date)} />
                <button onClick={() => {
                  setIsLive(true);
                }} disabled={IsAD ? false : true} className={`${IsAD ? 'bg-blue-500 text-white' : 'bg-graydark select-none text-gray'} rounded px-4 py-1.5 ml-2`}>Save</button>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-xl text-gray-900 mb-2">Level</p>
            <button className="bg-blue-500 rounded px-4 text-white py-1.5 mb-2">Add new +</button>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-white rounded-xl shadow p-5 relative">
                <p className="text-xl font-bold">Bronze</p>
                <p className="text-lg">Tap: 0-1000</p>
                <button className="text-sm text-blue-500 absolute top-0 right-0 m-2">Edit</button>
              </div>
              <div className="bg-white rounded-xl shadow p-5 relative">
                <p className="text-xl font-bold">Silver</p>
                <p className="text-lg">Tap: 1000-5000</p>
                <button className="text-sm text-blue-500 absolute top-0 right-0 m-2">Edit</button>
              </div>
              <div className="bg-white rounded-xl shadow p-5 relative">
                <p className="text-xl font-bold">Gold</p>
                <p className="text-lg">Tap: 5000-15000</p>
                <button className="text-sm text-blue-500 absolute top-0 right-0 m-2">Edit</button>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-xl text-gray-900 mb-2">Assets</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-white rounded-xl p-5">
                <Image className="mx-auto w-auto h-28" src={'/images/game/airdrop.png'} alt="" width={200} height={200} />
                <p className="text-xs my-2 text-center">required: 500x350</p>
                <button className="bg-blue-500 w-full rounded text-white">Change</button>
              </div>
              <div className="bg-white rounded-xl p-5">
                <Image className="mx-auto w-auto h-28" src={'/images/game/capsule.png'} alt="" width={200} height={200} />
                <p className="text-xs my-2 text-center">required: 500x415</p>
                <button className="bg-blue-500 w-full rounded text-white">Change</button>
              </div>
              <div className="bg-white rounded-xl p-5">
                <Image className="mx-auto w-auto h-28" src={'/images/game/coin.png'} alt="" width={200} height={200} />
                <p className="text-xs my-2 text-center">required: 500x500</p>
                <button className="bg-blue-500 w-full rounded text-white">Change</button>
              </div>
              <div className="bg-white rounded-xl p-5">
                <Image className="mx-auto w-auto h-28" src={'/images/game/friends.png'} alt="" width={200} height={200} />
                <p className="text-xs my-2 text-center">required: 500x350</p>
                <button className="bg-blue-500 w-full rounded text-white">Change</button>
              </div>
              <div className="bg-white rounded-xl p-5">
                <Image className="mx-auto w-auto h-28" src={'/images/game/task.png'} alt="" width={200} height={200} />
                <p className="text-xs my-2 text-center">required: 500x500</p>
                <button className="bg-blue-500 w-full rounded text-white">Change</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralPage;
