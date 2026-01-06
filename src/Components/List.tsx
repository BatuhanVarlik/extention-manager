"use client";
import { Extension } from "@/app/types/types";
import React from "react";
interface ListProps {
  extensions: Extension[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
  activeFilter: () => void;
  inactiveFilter: () => void;
  noFilter: () => void;
  Filter: string;
}
function List({
  extensions,
  onRemove,
  onToggle,
  activeFilter,
  inactiveFilter,
  noFilter,
  Filter,
}: ListProps) {
  return (
    <div>
      <div className="flex flex-col gap-1 align-middle justify-center">
        <div className="flex flex-col items-center p-4 gap-4 sm:justify-between sm:mb-4 sm:mt-4 sm:flex-row">
          <h2 className="text-2xl font-bold">Extensions List</h2>
          <div className="flex gap-2 lg:gap-4">
            <button
              onClick={() => noFilter()}
              className={`px-4 rounded-2xl ${
                Filter === "All"
                  ? "bg-red-700 text-neutral-0 dark:text-black transition delay-50"
                  : "bg-neutral-0 dark:bg-neutral-800 dark:text-white text-black"
              }`}
            >
              All
            </button>
            <button
              onClick={() => {
                activeFilter();
              }}
              className={`rounded-2xl pl-3 pr-3 ${
                Filter === "Active"
                  ? "bg-red-700 dark:text-black text-neutral-0 transition delay-50"
                  : "bg-neutral-0 dark:bg-neutral-800 dark:text-white text-black"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => inactiveFilter()}
              className={`rounded-2xl pl-3 pr-3 ${
                Filter === "Inactive"
                  ? "bg-red-700 dark:text-black text-neutral-0 transition delay-50"
                  : "bg-neutral-0 dark:bg-neutral-800 dark:text-white text-black"
              }`}
            >
              Inactive
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {extensions.map((extension) => (
            <div
              key={extension.id}
              className=" border dark:border-neutral-700 rounded-2xl bg-white p-4 m-2 dark:bg-neutral-800"
            >
              <div className="flex gap-4 mb-4">
                <img
                  className="w-16 h-16 rounded-sm "
                  src={extension.logo}
                  alt=""
                />
                <div className="flex flex-col">
                  <h3 className="font-bold">{extension.name}</h3>
                  <p className="text-gray-600 dark:text-neutral-100 text-sm mb-4">
                    {extension.description}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button
                  className="bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:border-neutral-600 text-black border border-neutral-200 rounded-2xl py-1 px-2 mt-2"
                  onClick={() => onRemove(extension.id)}
                >
                  Remove
                </button>
                <button
                  className={`w-12 h-6 flex items-center ${
                    extension.isActive
                      ? "bg-red-600  px-4 py-2 rounded-2xl transition"
                      : "bg-gray-600   px-4 py-2 rounded-2xl transition"
                  }`}
                  onClick={() => onToggle(extension.id)}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
                      extension.isActive ? "translate-x-3" : "-translate-x-3"
                    }`}
                  ></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default List;
