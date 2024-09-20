"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal/Modal";

const brandData = [
  {
    logo: "/images/placeholder.png",
    name: "-",
    visitors: "-",
    revenues: "-",
    sales: "-",
    conversion: "-",
  }
]

const TableOne = () => {
  const [ActiveCategory, setActiveCategory] = useState('Regular');
  const [IsOpen, setIsOpen] = useState(false);
  const [IsOpen2, setIsOpen2] = useState(false);
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <Modal IsOpen={IsOpen2} setIsOpen={setIsOpen2} Title="Delete Task">
        <p className="text-center my-4">Are you sure?</p>
        <div className="flex items-center justify-center space-x-4">
          <button onClick={() => { setIsOpen2(false) }} className="bg-blue-500 rounded px-4 py-1.5 text-white">Cancel</button>
          <button onClick={() => { setIsOpen2(false) }} className="bg-red-500 rounded px-4 py-1.5 text-white">Delete</button>
        </div>
      </Modal>
      <Modal IsOpen={IsOpen} setIsOpen={setIsOpen} Title="Manage Task" >
        <div className="mb-4">

          <div className="flex items-center justify-center w-full mb-4">
            <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Required PNG File (Ex. 400x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>

          <label className="text-sm mb-2">Task Name</label>
          <input
            type="text"
            placeholder=""
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-1.5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm mb-2">Type</label>
          <form>
            <select id="countries" className="bg-gray-50 border-[1.5px] border-stroke text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Choose a type</option>
              <option value="Regular">Regular</option>
              <option value="Collabs">Collabs</option>
              <option value="Events">Events</option>
            </select>
          </form>
        </div>
        <div className="mb-4">
          <label className="text-sm mb-2">Reward</label>
          <input
            type="text"
            placeholder=""
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-1.5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
          />
        </div>
        <button className="bg-blue-500 rounded px-4 py-1.5 text-white">Save</button>
      </Modal>
      <div className="flex items-center mb-4">
        <div className="border-r-2 border-graydark/15 pr-4">
          <button onClick={() => { setIsOpen(true) }} className="bg-blue-500 text-white px-4 rounded py-1.5">Create +</button>
        </div>
        <div className="pl-4 space-x-2">
          <button onClick={() => { setActiveCategory('Regular') }} className={`${ActiveCategory === "Regular" ? 'text-blue-500' : 'text-graydark/35'} px-4 rounded py-1.5 font-semibold`}>Regular</button>
          <button onClick={() => { setActiveCategory('Collabs') }} className={`${ActiveCategory === "Collabs" ? 'text-blue-500' : 'text-graydark/35'} px-4 rounded py-1.5 font-semibold`}>Collabs</button>
          <button onClick={() => { setActiveCategory('Events') }} className={`${ActiveCategory === "Events" ? 'text-blue-500' : 'text-graydark/35'} px-4 rounded py-1.5 font-semibold`}>Events</button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Task Image
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Task Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Type
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Reward
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Action
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${key === brandData.length - 1
              ? ""
              : "border-b border-stroke dark:border-strokedark"
              }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <Image src={brand.logo} alt="Brand" width={48} height={48} />
              </div>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{brand.revenues}</p>
            </div>

            <div className="items-center justify-center p-2.5 flex xl:p-5">
              <p className="text-black dark:text-white">{brand.sales}</p>
            </div>

            <div className="p-2.5 grid gap-y-1 xl:p-5">
              <button onClick={() => { setIsOpen(true) }} className="bg-yellow-500 text-white px-4 rounded py-1.5 max-w-fit mx-auto">Edit</button>
              <button onClick={() => { setIsOpen2(true) }} className="bg-red-500 text-white px-4 rounded py-1.5 max-w-fit mx-auto">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
