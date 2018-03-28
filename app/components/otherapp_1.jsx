import "./otherapp.css";
import "../util/jsonp.js";
import React,{Component } from "react";

export default class Otherapp extends React.Component{
	constructor(props){
		super(props);
		this.state={
			apps:[]
		};
	}
	init(){
		jsonp(this.props.source,"","callback",data=>{
			if(data.status){
				this.setState({apps:data.data});
			}
		});
	}

	componentDidMount(){
		this.init();
	}
	render(){
		return (
			<div>
				<ul className="oapp">
					{
						this.state.apps.map((app,index) => {
							return <li key={index }>
										<a href={ app.url }>
											<div className="app_icon">
												<img src={ app.icon } alt={app.title}/>
											</div>
											<span>{ app.title }</span>
										</a>
									</li>
						})
					}
				</ul>
			</div>
			)
	}
}