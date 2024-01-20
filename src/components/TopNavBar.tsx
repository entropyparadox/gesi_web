import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Tab } from './Tab';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const tab = [
  { id: 1, text: 'Overview', path: '/overview' },
  { id: 2, text: 'Energy system', path: '/energy' },
  { id: 3, text: 'P2X', path: '/p2x' },
  { id: 4, text: 'P2X-Balancing', path: '/balancing/p2x' },
  { id: 5, text: 'P2H-Conversion', path: '/conversion/p2h' },
  { id: 6, text: 'P2G-Conversion', path: '/conversion/p2g' },
  // { id: 7, text: 'Summary', path: '/summary' },
];

export const TopNavBar = () => {
  const { pathname } = useLocation();
  const {push} = useHistory();
  return (
    <div className="w-screen border-b-2 sticky top-0 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 py-4 w-full text-xl font-semibold cursor-pointer" onClick={()=>push('/')}>
        GESI Energy Scenario Analytics
      </div>
      {!pathname.startsWith('/info') && (
        <div className="border-t-2 ">
          <Swiper
            slidesPerView="auto"
            spaceBetween={30}
            slidesOffsetBefore={0}
            slidesOffsetAfter={0}
            freeMode={true}
            className="px-4 pt-6 max-w-screen-2xl menu"
          >
            {tab.map((e) => (
              <SwiperSlide className="w-auto" key={e.id}>
                <Tab
                  className=""
                  text={e.text}
                  to={e.path}
                  selected={pathname === e.path}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};
