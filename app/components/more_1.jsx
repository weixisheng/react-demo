import "./more.css";

import "../lib/swiper.min.css";
import "../util/jsonp.js";
import "../lib/swiper.min.js";
import React,{Component} from "react";

export default class More extends React.Component{
	constructor(props){
		super(props);

		this.state={
			imgs1:[],
			imgs2:[]
		};
	}

	init(){
		jsonp(this.props.source,"","callback", data => {
			if(data.status){
				this.setState({
						imgs1: data.data.slice(0,5),
						imgs2: data.data.slice(5,7),
					});
				    new Swiper ('.more_bottom .swiper-container', {
					    loop: true,
					    pagination: '.swiper-pagination',
					    paginationClickable: true,
					    autoplay : 2000,
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
<div id="more">
				<div className="more_top">
					{
						this.state.imgs1.map((item, index) => {
							if(index<3){
								return <div className="more_link" key={index}>
										<a href={item.url}>
											<img src={item.icon} alt=""/>
										</a>
									</div>
							}
							else{
								return <div className="more_link half" key={index}>
										<a href={item.url}>
											<img src={item.icon} alt=""/>
										</a>
									</div>
							}
						})
					}
				</div>
				<div className="more_bottom">
					<div className="swiper-container">
						<div className="swiper-wrapper">
							{
								this.state.imgs2.map((item,index) => {
									return  <div className="swiper-slide" key={index}>
												<a href={item.url}>
													<img src={item.icon} alt=""/>
												</a>
											</div>
								})
							}
						</div>
						<div className="swiper-pagination"></div>
					</div>
				</div>
			</div>
			);
	}
}