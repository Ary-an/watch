import React, { Component } from "react";
import classes from "./App.module.css";
import Header from './Components/header';
import ProductData from "./Components/productData";
import ProductDetails from "./Components/productDetails";

class App extends Component{

  state = {
    Data : ProductData,
    currentImagePos : 0,
    featureBtn : 0  ,
    showHeartBeat : false
  }
 
  onColorClick = (pos) =>{  
    this.setState({
        currentImagePos : pos
    }) 
  }
  
  onFeatureBtnClick = (pos) =>{
    let updateValue = false
    console.log(pos);
    
    if(pos === 1) {
      updateValue = true;
    }
    this.setState({showHeartBeat : updateValue});
  }


  render(){
    
    return (
      <div className={classes.App}>
        <Header />
        <ProductDetails
        data = {this.state.Data} 
        currentImage= {ProductData.colorOptions[this.state.currentImagePos].imageUrl}
        currentImagePos = {this.state.currentImagePos}
        onColorClick ={this.onColorClick}
        onFeatureBtnClick = {this.onFeatureBtnClick}
        showHeartBeat = {this.state.showHeartBeat}
         />
      </div>
    );
  }  
}

export default App;
