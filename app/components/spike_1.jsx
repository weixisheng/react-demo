import "./spike.css";
import "../util/jsonp.js";
import React,{Component} from 'react';
export default class Spike extends React.Component{
	constructor(props) {
		super(props);
		this.state = {hours:"00",minutes:"00",seconds:"00",stores:[],more:""};
	}
	formatTime(times=0){
		let h = Math.floor(times / (60*60)),
		m = Math.floor(times / 60) % 60,
		s = times % 60,
		pad = (t) => {
			return t.toString().replace(/^(\d)$/,"0$1");
		};
		h = pad(h);
		m = pad(m);
		s = pad(s);
		return {hours:h,minutes:m,seconds:s};
	}
	init(){
		let getData = () => {
			let p = new Promise((resolve, reject) => {
			jsonp(this.props.source,"","callback", data => {
			if(data.status){
				this.setState({stores:data.data,more:data.more});
				resolve(+data.times);
			}
			else{
				reject(data.msg);
			}
		});
		});
			return p;
		};
		getData().then( times => {
			let timer = setInterval(() => {
				let {hours,minutes,seconds} = this.formatTime(times--);
				if(times<0){
					clearInterval(timer);
					timer = null;
				}
				this.setState({hours,minutes,seconds});
			}, 1000);
		});

	}
	componentDidMount(){
		this.init();
	}
	render(){
			return (
			<div id="spike">
				<div className="spike_header">
					<i></i>
					<span className="spike_title">限时抢购</span>
					<div className="spike_time">
						<span>{this.state.hours}</span>:<span>{this.state.minutes}</span>:<span>{this.state.seconds}</span>
					</div>
					<div className="spike_more fr">
						<i className="fr"></i>
						<a href={this.state.more}>
							<span>更多秒杀</span>
						</a>
					</div>
					<div style={{clear:"both"}}></div>
				</div>
				<ul className="spike_content">
					{
						this.state.stores.map((item,index) => {
							return <li key={index}>
										<a href={item.url}>
											<div>
												<img src={item.icon} />
											</div>
											<p>¥{item.sprice}</p>
											<p className="real-price">¥{item.price}</p>
										</a>
									</li>
						})
					}
				</ul>
			</div>
		);
	}
}