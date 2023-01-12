import React, { Component } from 'react';

const CellText = ({children}: {children:any}) => (<span className="align-middle text-white">{children}</span>);

const CellChange = ({text}: {text: string}) => (<span className={`text-xs custom-change align-middle pl-2.5 ${text.charAt(0)==="+" ? "text-positive-green" : "text-negative-red"}`}>{text}</span>);

const CellPairItem = ({src, index}:{src:string, index: number}) => (<div className="inline-block align-middle cursor-pointer" key={index}>
                              <img src={src} style={{marginRight: '5px', marginLeft: '5px'}} alt="Pair Item" />
                            </div>);


export class Cell extends Component<{style?: any, children?: any, fit?: string},{}> {
  static Text = CellText;
  static Change = CellChange;
  static PairItem = CellPairItem;

  render() {
    // receiving styles so this component works flexibly with inline css
    const style = this.props.style;
    const children = this.props.children;

    const fit = this.props.fit ?? "full";
    const widthHandle = fit==="content" ? {outer: {width: 'fit-content'}, inner: {paddingLeft: '10px', paddingRight: '10px'}} : { outer: { width: "83.333333%" }, inner: {}};

    return (
      <span 
        className={`block mx-auto rounded-full text-sm leading-8 p-px font-semibold bg-gradient-to-b from-border-grad-one to-border-grad-two`}
        style={{...style, ...widthHandle.outer}}
        >
        <span className={`block rounded-full bg-dark-shade h-10 w-full`} style={{...widthHandle.inner}}>
          {children}
        </span>
      </span>);
  }
  
};

export const CellCaption = (props: {text: string, style?:any}) => {
  const text = props.text;

  // receiving styles so this component works flexibly with inline css
  const style = props.style;

  return (
    <span className="text-cell-caption font-semibold text-xs leading-8 py-2"
      style={{...style}}
      >
      {text}
    </span>)
}

export const CellGap = (props: any) => {
  const style = props.style;
  return (<span className="block pt-2" style={{...style}} ></span>);
}