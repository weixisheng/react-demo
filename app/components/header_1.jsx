import "./header.css";
import "../lib/swiper.min.css";
import "../lib/swiper.min.js";
import "../util/jsonp.js";
import React,{Component } from "react";

export default class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			imgs:[]
		};
	}
	init(){
		jsonp(this.props.source,"","callback", data=>{
			if(data.status){
						this.setState({
							imgs:data.data
						});
						new Swiper('#header .swiper-container', {
					    loop: true,
					    pagination: '.swiper-pagination',
					    paginationClickable: true,
					    autoplay : 3000,
						autoplayDisableOnInteraction : false,		    
					});
			}
		});
	}
	componentDidMount(){
		this.init();
	}
	render(){
		return (
			<div id="header">
				<div className="swiper-container">
					<div className="swiper-wrapper">
						{
							this.state.imgs.map((item,index) => {
								return <div className="swiper-slide" key={index} >
			    						<img className="img" src={item} />
			    				   </div>
							})
						}
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</div>
			)
	}
}