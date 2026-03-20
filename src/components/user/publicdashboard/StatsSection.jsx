import React from "react";
import { FiUsers, FiClock, FiStar, FiHeart } from "react-icons/fi";

const stats = [
  {
    value: "10K+",
    label: "Happy Customers",
    icon: <FiUsers className="text-2xl md:text-3xl" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    value: "30 min",
    label: "Avg Delivery",
    icon: <FiClock className="text-2xl md:text-3xl" />,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    value: "50+",
    label: "Toppings",
    icon: <FiStar className="text-2xl md:text-3xl" />,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
  {
    value: "24/7",
    label: "Support",
    icon: <FiHeart className="text-2xl md:text-3xl" />,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
];

const StatsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 relative z-10">
      {/* ❌ removed -mt-10 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bgColor} rounded-xl shadow-md p-5 text-center hover:shadow-lg transition-all duration-300 border ${stat.borderColor}`}
          >
            <div className="flex flex-col items-center space-y-2">
              <div className={`${stat.color} bg-white p-3 rounded-full shadow-sm`}>
                {stat.icon}
              </div>

              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-800">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;