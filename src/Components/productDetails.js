import React from "react"
import classes from "./productDetails.module.css"

const ProductDetails =  (props) =>{
    const date = new Date();
    const featureBtns  = props.data.featureList.map((item,pos)=>{
        const classArry = [classes.featureBtns];
        if(pos ===  1 && props.showHeartBeat) {
            classArry.push(classes.activeBtn)
        }
        else if(pos ===  0 && !props.showHeartBeat) {
            classArry.push(classes.activeBtn)
        }
        return(

            <button 
             key={pos} 
             className={classArry.join(" ")}
             onClick={() => props.onFeatureBtnClick(pos)}>{item}</button>
        )
    });

    const colorOptions = props.data.colorOptions.map((item,pos) =>{
        const classArry = [];
        if(pos ===  props.currentImagePos) {
            classArry.push(classes.activeColorOption)
        }
        return(
            <img  
               src={item.imageUrl} 
               alt={item.styleName} 
               key={pos} 
               className={classArry.join(" ")}
               onClick={() => props.onColorClick(pos)}></img>
        )
    })
    return (
        <div className={classes.conatiner}>
        <div className={classes.leftConatiner}>
            <img className={classes.previewImg} src ={props.currentImage} alt="watch-image"></img>
            
            {
                props.showHeartBeat 
                ?
                <div className={classes.heart}>
                <img src={props.data.heartImage} alt="heart-beat" />
                <p>72</p> 
                </div>
                :
                <p className={classes.time}>{`${date.getHours()} ${date.getMinutes()}`}</p> 
                
 
            }
          
        </div>

        <div className={classes.rightConatiner}>
            <h1 className={classes.productHeading}> {props.data.title} </h1>      
            <p className={classes.description}>  {props.data.description} </p>  

            <h3>Select Color</h3>
            <div className={classes.colorOption}>
                {colorOptions}
            </div>

            <h3>Features</h3>
            <div className={classes.features}>
                {featureBtns}
            </div>
            <button className={classes.buyBtn}> Buy Now</button>
        </div>
     </div>

    )
}

export default ProductDetails;