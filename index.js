import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import MindGame from './components/mindGame';
import HomeScreen3 from './components/homeScreen3';
import Form from './components/form';
import MainComponent1 from './components/mainComponent1';
import Products from './SectionA/products';
import Quiz from './SectionA/quiz';
import MainComp from './mainComp';
import MainAssess from './components/mainAssess';
import CustomerSystem from './components/customerSystem';
import Country from './components/country';
import Check from './components/check';
import Product from './components/product';
import MyNewForm from './myNewForm';
import MyForm2 from './myForm2';
import ProductComp from './productComp';
import { BrowserRouter, Switch } from "react-router-dom";
import MyPortal from './myPortal';
import MyCourseApp from './myCourseApp';
import LaptopApp from './laptopApp';
import MainCompo from './masterComponent';
import MasterComponent from './masterComponent';
import Company from './components/company';
import JobSys from './jobSys';
import MobileApp from './mobileApp';
import Main from './main';
import Assess from './assess';
import MainComp2 from './mainComp2';
import PriceData from './components/priceData';
import Billing from './billing';
import PizzaApp from './pizzaApp';
import Function from './function';
import Employes from './employes';
import ProductStore from './productStore';
import Persons from './persons';
import PersonsApp from './personsApp';
import SportsApp from './sportsApp';
import Section from './section';
import EmpPortal from './empPortal';
import MyPortal1 from './myPortal1';
import Welcome from './welcome';
import LaptopsApp1 from './laptopsApp1';
import JXCompany from './jxCompany';
import JobSys1 from './jobSys1';
import BooksApp from './booksApp';
import News from './news';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <BrowserRouter>
    <Switch>
    <LaptopsApp1 />
    </Switch>
    </BrowserRouter>
      
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
