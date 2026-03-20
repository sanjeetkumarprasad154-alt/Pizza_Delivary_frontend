import React from 'react';
import { FiPercent } from 'react-icons/fi';

const offers = [
  { title: 'First Order', discount: '50% OFF', code: 'FIRST50', valid: 'Today only' },
  { title: 'Weekend Special', discount: '30% OFF', code: 'WEEKEND30', valid: 'Sat-Sun' },
  { title: 'Combo Deal', discount: 'Buy 1 Get 1', code: 'BOGO', valid: 'Limited time' }
];

const OffersStrip = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 overflow-hidden">
      <div className="relative flex whitespace-nowrap animate-infinite-scroll">
        {/* First set */}
        <div className="flex">
          {offers.map((offer, index) => (
            <div key={index} className="flex items-center mx-6">
              <FiPercent className="mr-2 flex-shrink-0" />
              <span className="font-semibold">{offer.title}:</span>
              <span className="mx-1">{offer.discount}</span>
              <span className="mx-2 text-yellow-200">|</span>
              <span className="font-mono">{offer.code}</span>
              <span className="mx-2 text-yellow-200">|</span>
              <span>{offer.valid}</span>
            </div>
          ))}
        </div>
        {/* Second set (identical) */}
        <div className="flex">
          {offers.map((offer, index) => (
            <div key={`dup-${index}`} className="flex items-center mx-6">
              <FiPercent className="mr-2 flex-shrink-0" />
              <span className="font-semibold">{offer.title}:</span>
              <span className="mx-1">{offer.discount}</span>
              <span className="mx-2 text-yellow-200">|</span>
              <span className="font-mono">{offer.code}</span>
              <span className="mx-2 text-yellow-200">|</span>
              <span>{offer.valid}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infiniteScroll 20s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default OffersStrip;