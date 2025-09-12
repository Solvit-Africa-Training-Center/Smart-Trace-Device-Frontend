// ItemsGrid.tsx
import React from "react";
import homei from "../assets/images/home.jpg";
import LostItemCard from "../hooks/useItem";
import { useLostItems } from "../context/ItemContext";

const LostItem: React.FC = () => {
  const { lostItems, loading } = useLostItems();

  if (loading) {
    return (
      <div className="lg:w-3/4 flex items-center justify-center h-64">
        <div className="text-gray-600">Loading items...</div>
      </div>
    );
  }

    return (
      <div>
        <div
          className="h-screen flex flex-col items-center justify-center gap-10 py-20 px-4 md:px-16 lg:px-60 text-center text-white bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${homei})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="  text-white  ">
            <h1 className=" font-bold text-size-2xl">Verify Before You Buy </h1>
            <p className=" text-size-lg">
              Reporting your lost or stolen device helps protect everyone by
              making it harder to resell and easier for a finder to return it to
              you.
            </p>{" "}
          </div>
        </div>

        <div className="w-full p-8">
          <div className="max-w-7xl mx-auto mb-8 space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">
                {" "}
                Browse Items Lost Reported{" "}
              </h1>
              <input
                placeholder="Browse Items Lost"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <p>
              Statistics show 85% of lost property (phones, bags, pets, luggage,
              etc.) is in honest hands. Let Lostings help you find the
              property/item(s) you have lost. Be smart and submit your lost
              property with our lost and found department toady!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6  items-center justify-items-center place-items-center mx-auto">
            {lostItems.map((item) => (
              <div className="w-full max-w-sm" key={item.id}>
                <LostItemCard title="Item Lost" item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default LostItem;
