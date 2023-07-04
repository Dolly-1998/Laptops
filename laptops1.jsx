import React,{Component} from "react";
import queryString from "query-string";
import { Link } from "react-router-dom";
import LeftPanelOptions from "./leftPanelOptions";
class Laptops1 extends Component{
    filterParams=(arr,queryParams)=>{
        let {brand,ram,processor,hardDisk,rating}=queryParams;
        arr=this.filterParam(arr,"brand",brand);
        arr=this.filterParam(arr,"ram",ram);
        arr=this.filterParam(arr,"processor",processor);
        arr=this.filterParam(arr,"hardDisk",hardDisk);
        arr=this.filterParam(arr,"rating",rating);  
        return arr;
        }   
        
        filterParam=(arr,name,values)=>{
          if(!values) return arr;
          let valuesArr=values.split(",");
          let arr1=arr.filter(a=>valuesArr.find(val=>val===a[name]));
          return arr1;
        }
        addToQueryString=(str,paramName,paramValue)=>paramValue?
        str?`${str}&${paramName}=${paramValue}`:`${paramName}=${paramValue}`:str;
       
       makeSearchString=(options)=>{
        let {brand,ram,processor,hardDisk,rating}=options;
      let searchStr="";
      searchStr=this.addToQueryString(searchStr,"brand",brand);
      searchStr=this.addToQueryString(searchStr,"ram",ram);
      searchStr=this.addToQueryString(searchStr,"processor",processor);
      searchStr=this.addToQueryString(searchStr,"hardDisk",hardDisk);
      searchStr=this.addToQueryString(searchStr,"rating",rating);
      return searchStr;
       }
       handleOptionChange=(options)=>{
      this.callURL("/all/1",options);
       }
       callURL=(URL,options)=>{
        let searchString=this.makeSearchString(options);
        this.props.history.push({
          pathname:URL,search:searchString,
        });
       }
       makeAllOptions=(arr)=>{
        let json={};
        json.brand=this.getDifferentValues(arr,"brand");
        json.ram=this.getDifferentValues(arr,"ram");
        json.processor=this.getDifferentValues(arr,"processor");
        json.hardDisk=this.getDifferentValues(arr,"hardDisk");
        json.rating=this.getDifferentValues(arr,"rating");
        return json;
       }
       getDifferentValues=(arr,name)=>arr.reduce((acc,curr)=>acc.find(val=>val===curr[name])?acc:[...acc,curr[name]],[]);
      
           render(){
    const {laptops}=this.props;
    let {page}=this.props.match.params;
   let queryParams=queryString.parse(this.props.location.search);
  
   let l1=this.filterParams(laptops,queryParams);
    let pageNum=+page;
    let searchString=this.makeSearchString(queryParams);
   
    let size=3;
        let startIndex=(pageNum-1)*size;
    let endIndex=l1.length>(startIndex+size-1)?startIndex+size-1:l1.length-1;
    let l2=l1.length>3?l1.filter((m,index)=>index>=startIndex && index<=endIndex):l1;
  let allOptions=this.makeAllOptions(laptops);
    return(
        <div className="container">
<div className="row">
    <div className="col-3 border bg-light">
<LeftPanelOptions options={queryParams}
 onOptionChange={this.handleOptionChange}
 allOptions={allOptions}
 />
    </div>
    <div className="col-9">
        
    <h6>Showing {startIndex+1} to {endIndex+1} of {l1.length}</h6>
    <h6>Filter:{searchString}</h6>
{l2.map((n)=>
           <div className="col-4 border bg-light" key={n.model}>
            Model:<Link to={`/laptop/${n.model}`}>{n.model}</Link><br/>
            Brand:<Link to={`/all/1?brand=${n.brand}`}>{n.brand}</Link><br/>
            RAM:<Link to={`/all/1?ram=${n.ram}`}>{n.ram}</Link><br/>
            Processor:<Link to={`/all/1?processor=${n.processor}`}>{n.processor}</Link><br/>
            Hard Disk:<Link to={`/all/1?hardDisk=${n.hardDisk}`}>{n.hardDisk}</Link><br/>
            Rating:<Link to={`/all/1?rating=${n.rating}`}>{n.rating}</Link><br/>
           </div>
           )}
  </div>
  
  <div className="row">
            <div className="col-2">{startIndex>0?<Link to={`/all/${pageNum-1}?${searchString}`}>Prev</Link>:""}</div>
            <div className="col-8"></div>
            <div className="col-2">{endIndex<l1.length-1?<Link  to={`/all/${pageNum+1}?${searchString}`}>Next</Link>:""}</div>
           </div>
        
    </div>           </div>
    )
}
}
export default Laptops1;