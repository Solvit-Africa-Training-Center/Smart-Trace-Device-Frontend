// ItemsGrid.tsx
import React from "react";
import homei from "../assets/images/image1-24.jpg";
import LostItemCard from "../hooks/useItem";
// LostItemsContext.tsx
import type { LostItem} from "../type/type";
import imag1 from '../assets/images/Frame.png'
import imag2 from'../assets/images/Frame 401 (2).png'
import imag3 from '../assets/images/imag1.jpg'
import imag4 from '../assets/images/Frame 401 (4).png'
import imag5 from '../assets/images/Frame 401.png'
import imag6 from "../assets/images/Tablet.jpg";
import imag7 from "../assets/images/mouse.jpg";
import imag8 from "../assets/images/laptop.jpg";
import imag9 from "../assets/images/phonen.jpg";

  const FoundItem: React.FC = () => {
  

    const lostItems: LostItem[] = [
      {
        id: 1,
        title: "White i POD",
        location: "JFK Terminal 8, Jamaica, New York, USA",
        image: imag5,
        type: "ipod",
      },
      {
        id: 2,
        title: "Laptop Lenovo i7",
        location: "JFK Terminal 8, Jamaica, New York, USA",
        image: imag1,
        type: "laptop",
      },
      {
        id: 3,
        title: "I Phone 7 plus",
        location: "JFK Terminal 8, Jamaica, New York, USA",
        image: imag3,
        type: "phone",
      },
      {
        id: 4,
        title: "White Tablet",
        location: "JFK Terminal 8, Jamaica, New York, USA",
        image: imag6,
        type: "tablet",
      },
      {
        id: 5,
        title: "Mouse",
        location: "JFK Terminal 8, Jamaica, New York, USA",
        image: imag7,
        type: "wallet",
      },
      {
        id: 6,
        title: "Phone",
        location: "JFK Terminal 8, Jamaica, New York, USA",
        image: imag9,
        type: "charger",
      },
      {
        id: 7,
        title: "Adapter",
        location: "JFK Terminal 8, Jamaica, New York, USA",
        image: imag4,
        type: "adapter",
      },
      {
        id: 8,
        title: "Telphone Spark",
        location: "JFK Terminal 8, Jamaica, New York, USA",
        image: imag2,
        type: "camera",
      },
      {
        id: 8,
        title: "Laptop",
        location: "JFK Terminal 8, Jamaica, New York, USA",
        image: imag8,
        type: "camera",
      },
    ];

 

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
       <div className="  text-white grid gap-5  ">
          <h1 className=" font-bold text-size-2xl">
            Looking for Your Device?
          </h1>
          <p className=" text-size-md">
            Reporting your lost or stolen device helps protect everyone by
            making it harder to resell and easier for a finder to return it to
            you.
          </p>{" "}
          </div>
      </div>

      <div className="w-full p-8">
        <div className="max-w-7xl mx-auto mb-8 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold"> Browse Found Items </h1>
            <input
              placeholder="Search Found Items"
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
              <LostItemCard
                title="Item Found"
                item={item}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoundItem;
