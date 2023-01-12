import React from 'react';

import {Cell, CellCaption, CellGap} from './ColumnUIComponents';

const curve_helper = require('./../../assets/curve_helper.svg').default;

type SingleAsset = {
  title: string,
  logo: string,
  logoGrad: {first: string, second: string}
  price: { 
    current: string,
    change: string
  },
  tvl: {
    value: string
  },
  pairs: string[]
}

type Meta = {
  currency: string
}


function TrendingAsset(props: {data: SingleAsset, meta: Meta}) {

  const data = props.data;
  const currency = props.meta.currency;

  return (
    <div className="relative min-w-[220px] md:my-2 sm:my-4 my-8 max-w-[300px] mx-auto">
      <div className="absolute w-fit inset-x-0 mx-auto z-10 rounded-full -top-8 p-px bg-gradient-to-b from-border-grad-one to-border-grad-two">
        <div className="w-full h-full p-4 rounded-full" style={{background: `linear-gradient(to bottom, ${data.logoGrad.first}, ${data.logoGrad.second})`}}>
          <img src={data.logo} className="text-center w-[38px] cursor-pointer" alt={data.title} />
        </div>
      </div>
      <img src={curve_helper} alt="svg" className="w-full" />
      <div className="bg-gradient-to-b from-border-grad-one to-border-grad-two pl-px pr-px pb-px " style={{borderBottomLeftRadius: '18px', borderBottomRightRadius: '18px'}}>
        <div className="text-center h-full custom-bg" style={{borderBottomLeftRadius: '18px', borderBottomRightRadius: '18px'}}>
          <CellCaption text={data.title} />
          <CellGap />
          <Cell>
            <Cell.Text>{currency}{data.price.current}</Cell.Text>
            <Cell.Change text={data.price.change} />
          </Cell>
          <CellCaption text="Price" />
          <Cell>
            <Cell.Text>{currency}{data.tvl.value}</Cell.Text>
          </Cell>
          <CellCaption text="TVL" />
          <Cell fit="content">
            {data.pairs.map((src, index) => (
              <Cell.PairItem src={src} index={index} />
            ))}
          </Cell>
          <CellCaption text="Popular Pairs" />
          <CellGap />
        </div>
      </div>
    </div>
  );
}

export default TrendingAsset;
