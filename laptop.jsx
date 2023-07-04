import React,{Component} from "react";
class Laptop extends Component{
    render(){
        const {laptops}=this.props;
        const {model}=this.props.match.params;
        let laptop=laptops.find((n)=>n.model===model);
        return(
            <div className="container text-center">
                <h4>Model:{model}</h4>
                <img src={laptop.image}>

                </img>
                <h6>Brand:{laptop.brand}</h6>
                <h6>RAM:{laptop.ram}</h6>
                <h6>Processor:{laptop.processor}</h6>
                <h6>Hard Disk:{laptop.hardDisk}</h6>
                <h6>Rating:{laptop.rating}</h6>

            </div>
        )
        }
}
export default Laptop;