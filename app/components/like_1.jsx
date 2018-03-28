import "./like.css";
import "../util/jsonp.js";
import React,{Component} from "react";

export default class More extends React.Component{
	constructor(props){
		super(props);

		this.state={
			list:[]
		};
	}

	init(){
		jsonp(this.props.source,"","callback", data => {
			if(data.status){
				this.setState({
						list: data.data
					});
			}
		});
	}
	componentDidMount(){
		this.init();
	}

	render(){

		return (
<div id="like">
				<p>猜你喜欢</p>
				{
					this.state.list.map((item,index) => {
						return <div className="like_content" key={index}>
									<div className="like_link">
										<a href={ item.url }>
											<img src={ item.icon } alt=""/>
										</a>
									</div>
									<div className="like_desc">
										<span>
											{ item.desc }		
										</span>
									</div>
									<div className="like_price">
										<span>¥{ item.price }</span>
										<div><a href={ item.more }>看相似</a></div>
									</div>
								</div>
					})
				}
			</div>
			);
	}
}