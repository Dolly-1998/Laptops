import React,{Component} from "react";
class LeftPanelOptions extends Component{
    handleChange=(e)=>{
        let {currentTarget:input}=e;
        let options={...this.props.options};
        if(input.type==="checkbox"){

            options[input.name]=this.updateCB(options[input.name],input.checked,input.value);
        
        }
        else{
           options[input.name]=input.value;
        }
        this.props.onOptionChange(options);
    }
    updateCB=(str,check,value)=>{
    let inputArr=str?str.split(","):[];
    if (check) inputArr.push(value);
    else {
        let index=inputArr.findIndex((n)=>n===value);
        if(index>=0) inputArr.splice(index,1);
    }
    return inputArr.join(",");
    }
       
    makeCB=(arr,values,name,label)=>{
return(
<React.Fragment>
    <label className="form-check-label font-weight-bold">{label}</label>
    {arr.map((n)=>
    <div className="form-check" key={n}>
        <input className="form-check-input" value={n}
        type="checkbox" name={name}
        checked={values.find((val)=>val===n)}
        onChange={this.handleChange}
        />
        <label className="form-check">{n}</label>
    </div>
    )}
</React.Fragment>
)    
}  

render(){
 let {brand="",ram="",processor="",hardDisk="",rating=""}=this.props.options;
 let {allOptions}=this.props;  
    return(
 
 <div className="container">
<div className="row border bg-light">

    <div className="col-12">
        {this.makeCB(allOptions.brand,brand.split(","),"brand","Select Brand")}
    </div>
    <div className="col-12">
        {this.makeCB(allOptions.ram,ram.split(","),"ram","Select RAM")}
    </div>
    <div className="col-12">
        {this.makeCB(allOptions.processor,processor.split(","),"processor","Select Processor")}
    </div><br/>
    <div className="col-12">
        {this.makeCB(allOptions.hardDisk,hardDisk.split(","),"hardDisk","Select Hard Disk")}
    </div><br/>
    <div className="col-12">
        {this.makeCB(allOptions.rating,rating.split(","),"rating","Select Rating")}
    </div><br/>

</div>
        </div>
    )
}
}
export default LeftPanelOptions;