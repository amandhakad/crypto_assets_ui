import React from 'react';

import TrendingAsset from './TrendingAsset';

// something we receive from api (fetching locally here)
import { data } from './../../data/trending_assets';

// heading icon
const activity = require('./../../assets/activity.svg').default;

function TrendingList() {

  return (
    <>
      <div className="app xl:px-[5%] lg:px-[5%] sm:px-[5%] px-[60px] lg:mt-40 mt:20">
        <h4 className="my-12 text-white font-semibold"><img src={activity} alt="Icon" className="inline-block pr-3" />Trending Assets</h4>
         <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-16 lg:gap-12 md:gap-8 sm:gap-6 xs:gap-2" style={{height: '350px'}}>
          {data.list.map((single, index) => <TrendingAsset meta={data.metadata} data={single} key={index} />)}
        </div>
      </div>
    </>
  );
}

export default TrendingList;
