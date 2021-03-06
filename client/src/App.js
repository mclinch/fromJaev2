import React, { Component } from 'react';
import update from "immutability-helper"
import Navbar from "./components/navbar.js"
import Featured from "./components/featuredProducts.js"
import NewArrival from "./components/newArrivals.js"
import Instagram from "./components/Instagram.js"
import Footer from "./components/Footer.js"
import API from "./utils/API.js"
import './App.css';
	
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			cart: [] //price, quantity, imgUrl, product_name  			
		}
		
	}


	componentDidMount(){
		this.getAll();
	}	

	getAll(){
		API.searchAll()
			.then(res => console.log(res))
				.catch(err => console.log(err))
	}

	get totalPrice(){
		if (this.state.cart.length ===0){
			return 0
		} else {
			let sumCart = this.state.cart
			let sum = sumCart.reduce((a,b)=>{return a.price+b.price},0)
			return sum
		}
	}

	get totalQuantity(){
		return this.state.cart.length
	}

/*	addToCart(event, item){
		event.preventDefault()
		let addItem = item
		this.setState((state)=> update(state, {cart:{$push:[item]}}))
	}

	removeFromCart(event, item){
		event.preventDefault()
		let removedItem = item
		this.setState(prevState=>({
			cart: prevState.cart.filter(cart =>{return cart !== removedItem})
		}))
	}	
*/

    handleAddToCart(event){
        console.log("add to cart button works")
    }

  	render() {
	    return (
		    <div id="page">

		        <header>
		      		<Navbar totalPrice={this.totalPrice} totalQuantity={this.totalQuantity} cart={this.state.cart}/>
		        </header>

				<section id="home" className="padbot0">		
					<div className="flexslider top_slider">
						<ul className="slides">
							<li className="slide1">	
							</li>
						</ul>
					</div>
				</section>
		        
		        <Featured handleAddToCart={this.handleAddToCart}/>

		        <NewArrival/>

		        <hr className="container"/>

		        <Instagram/>

		        <Footer/>
		    </div>  
	    );
  }
}

export default App;
