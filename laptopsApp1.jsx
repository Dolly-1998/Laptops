import React,{Component} from "react";
import LaptopsNav from "./laptopsNav";
import { Route , Redirect , Switch } from "react-router-dom";
import Laptops1 from "./laptops1";
import Laptop from "./laptop";
class LaptopsApp1 extends Component{

    state = {
        brands: ["Acer", "Apple", "Dell", "HP"],
        categories: ["brand", "processor", "ram", "rating", "hardDisk"],
        laptops: [
          {
            model: "AX4581",
            brand: "Acer",
            ram: "4GB",
            hardDisk: "500GB",
            rating: "3",
            processor: "i3",
            image:
              "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt01.jpeg",
          },
          {
            model: "HB2881",
            brand: "HP",
            ram: "4GB",
            hardDisk: "250GB",
            rating: "4",
            processor: "i3",
            image:
              "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt02.jpeg",
          },
          {
            model: "DM811",
            brand: "Dell",
            ram: "4GB",
            hardDisk: "1TB",
            rating: "3",
            processor: "i3",
            image:
              "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt03.jpeg",
          },
          {
            model: "AP629",
            brand: "Acer",
            ram: "6GB",
            hardDisk: "1TB",
            rating: "2",
            processor: "i3",
            image:
              "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt04.jpeg",
          },
          {
            model: "AT820",
            brand: "Acer",
            ram: "8GB",
            hardDisk: "1TB",
            rating: "4",
            processor: "i5",
            image:
              "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt01.jpeg",
          },
          {
            model: "HK008",
            brand: "HP",
            ram: "6GB",
            hardDisk: "250GB",
            rating: "3",
            processor: "i5",
            image:
              "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt02.jpeg",
          },
          {
            model: "MAir11",
            brand: "Apple",
            ram: "4GB",
            hardDisk: "128GB",
            rating: "4",
            processor: "i5",
            image:
              "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt03.jpeg",
          },
          {
            model: "MPro24X",
            brand: "Apple",
            ram: "8GB",
            hardDisk: "256GB",
            rating: "4",
            processor: "i7",
            image:
              "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt04.jpeg",
          },
          {
            model: "DL390",
            brand: "Dell",
            ram: "6GB",
            hardDisk: "500GB",
            rating: "3",
            processor: "i3",
            image:
              "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt01.jpeg",
          },
          {
            model: "AM954",
            brand: "Acer",
            ram: "8GB",
            hardDisk: "1TB",
            rating: "3",
            processor: "i7",
            image:
              "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt02.jpeg",
          },
          {
            model: "AB234",
            brand: "Acer",
            ram: "4GB",
            hardDisk: "250GB",
            rating: "2",
            processor: "i3",
            image:
              "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt03.jpeg",
          },
          {
            model: "HC874",
            brand: "HP",
            ram: "8GB",
            hardDisk: "1TB",
            rating: "1",
            processor: "i7",
            image:
              "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt04.jpeg",
          },
          {
            model: "AN2015M",
            brand: "Acer",
            ram: "8GB",
            hardDisk: "1TB",
            rating: "4",
            processor: "i5",
            image:
              "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt01.jpeg",
          },
          {
            model: "AB235P",
            brand: "Acer",
            ram: "4GB",
            hardDisk: "500GB",
            rating: "3",
            processor: "i5",
            image:
              "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt02.jpeg",
          },
          {
            model: "HV5612",
            brand: "HP",
            ram: "8GB",
            hardDisk: "1TB",
            rating: "5",
            processor: "i7",
            image:
              "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt03.jpeg",
          },
          {
            model: "HJ9803",
            brand: "HP",
            ram: "6GB",
            hardDisk: "500GB",
            rating: "4",
            processor: "i3",
            image:
              "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt04.jpeg",
          },
        ],
      };
    
render(){
    const {laptops,categories,brands}=this.state;
    return(
    <div className="container">
       <LaptopsNav brands={brands}/>
       <Switch>
   <Route path="/all/:page" render={(props)=><Laptops1 {...props} laptops={laptops}/>} />
   <Route path="/laptop/:model" render={(props)=><Laptop {...props} laptops={laptops}/>} />
   <Redirect from="/" to="/all/1" />
       </Switch>
    </div>
    )
}
}
export default LaptopsApp1;