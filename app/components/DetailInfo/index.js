import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
import Star from "../Star/index";

class DetailInfo extends React.Component{

  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render(){
    const data = this.props.data;
    return (
      <div className="detail-info-container">
        <div className="info-container clear-fix">
          <div className="info-img-container float-left">
            <img src={data.img}/>
          </div>
          <div className="info-content">
            <h1>{data.title}</h1>
            <div className="star-container">
              <Star star={data.star}/>
              <span className="price">￥{data.price}</span>
            </div>
            <p className="sub-title">{data.subTitle}</p>
          </div>
          <p dangerouslySetInnerHTML={{__html:data.desc}} className="info-desc"></p>
        </div>
      </div>
    )
  }
}

export default DetailInfo
