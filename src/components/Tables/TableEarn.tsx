"use client";

import { BRAND } from "@/types/brand";
import { useState } from "react";
import Image from "next/image";
import Modal from "../Modal/Modal";

const brandData: BRAND[] = [
  {
    logo: "/images/placeholder.png",
    name: "-",
    visitors: "-",
    revenues: "-",
    sales: "-",
    conversion: "-",
  }
]

const TableEarn = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const [IsOpen2, setIsOpen2] = useState(false);
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <Modal IsOpen={IsOpen} setIsOpen={setIsOpen} Title="Manage Earn">
        <div className="mb-4">
          <label className="text-sm mb-2">Name</label>
          <input
            type="text"
            placeholder=""
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-1.5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
          />
        </div>
        <button className="bg-blue-500 rounded px-4 py-1.5 text-white">Save</button>
      </Modal>
      <Modal IsOpen={IsOpen2} setIsOpen={setIsOpen2} Title="Detail Earn">
        <div className="mb-4">
          <label className="text-sm mb-2">Name</label>
          <input
            type="text"
            placeholder=""
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-1.5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
          />
        </div>
        <div className="flex items-center space-x-2 mb-4 w-full">
          <p className="leading-none">Lv.1</p>
          <div>
            <p className="text-xs">Price</p>
            <input
              type="text"
              placeholder="Price"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-0.5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>
          <div>
            <p className="text-xs">Profit/hr</p>
            <input
              type="text"
              placeholder="Profit/hr"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-0.5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>
          <div>
            <p className="text-xs">Condition</p>
            <form className="m-none">
              <select id="countries" className="bg-gray-50 border-[1.5px] border-stroke rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-0.5">
                <option selected>Choose condition</option>
                <option value="buy-butcoin">*Buy Bitoin</option>
                <option value="buy-kyc">*Buy KYC</option>
              </select>
            </form>
          </div>
          <button onClick={() => { }} className="rounded-full bg-red-500 p-1 text-white"><svg fill="currentColor" className="w-3 h-3 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg></button><div className="mb-4">
          </div>
        </div>
        <button onClick={() => { }} className="bg-blue-500 text-white rounded py-1.5 px-4 mb-4">New level +</button>
        <div className="flex items-center space-x-2">
          <button className="bg-blue-500 rounded px-4 py-1.5 text-white">Save</button>
          <button className="bg-red-500 rounded px-4 py-1.5 text-white">Delete</button>
        </div>
      </Modal>

      <button onClick={() => { setIsOpen(true) }} className="bg-blue-500 text-white px-4 rounded py-1.5 mb-4">Create +</button>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-3">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Profit/hr
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Detail
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-3 ${key === brandData.length - 1
              ? ""
              : "border-b border-stroke dark:border-strokedark"
              }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.visitors}</p>
            </div>

            <div className="items-center justify-center p-2.5 flex xl:p-5">
              <button onClick={() => { setIsOpen2(true) }} className="bg-blue-500 text-white px-4 rounded py-1.5 max-w-fit mx-auto">Detail</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableEarn;
