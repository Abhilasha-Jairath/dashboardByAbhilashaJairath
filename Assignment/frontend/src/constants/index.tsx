import earning from "../assets/images/earning.png";
import order from "../assets/images/order.png";
import balance from "../assets/images/balance.png";
import sales from "../assets/images/sales.png";
import abstract from "../assets/images/table1.jpg";
import illustration from "../assets/images/table2.jpg";
import Kabukans from "../assets/images/table3.jpg";


export const WIDGETCARD_DATA = [
  {
    imgSrc: earning,
    cardHeading: "Earning",
    amount: "$198k",
    rateOfInterest: "37.8%",
    time: "this month",
    isProfitable: true,
  },
  {
    imgSrc: order,
    cardHeading: "Orders",
    amount: "$2.4k",
    rateOfInterest: "2%",
    time: "this month",
    isProfitable: false,
  },
  {
    imgSrc: balance,
    cardHeading: "Balance",
    amount: "$2.4k",
    rateOfInterest: "2%",
    time: "this month",
    isProfitable: false,
  },
  {
    imgSrc: sales,
    cardHeading: "Total Sales",
    amount: "$89k",
    rateOfInterest: "11%",
    time: "this week",
    isProfitable: true,
  },
];

export const OVERVIEW_DATA = [
  {
    name: "Jan",
    barValue: 6400,
  },
  {
    name: "Feb",
    barValue: 4398,
  },
  {
    name: "Mar",
    barValue: 9800,
  },
  {
    name: "Apr",
    barValue: 7908,
  },
  {
    name: "May",
    barValue: 8800,
  },
  {
    name: "Jun",
    barValue: 4800,
  },
  {
    name: "Jul",
    barValue: 7300,
  },
  {
    name: "Aug",
    barValue: 8300,
    activebar:true,
  },
  {
    name: "Sep",
    barValue: 7300,
  },
  {
    name: "Oct",
    barValue: 5300,
  },
  {
    name: "Nov",
    barValue: 7300,
  },
  {
    name: "Dec",
    barValue: 6300,
  },
];

export const CUSTOMER_DATA = [
  { name: "Group A", value: 200 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];
export const COLORS = ["#F33697", "lightgrey", "rgb(78,30,250)"];

export const PRODUCT_DETAILS = [
  {
    productImg: abstract,
    productName: "Abstract 3D",
    productDescription: "Random Text",
    productStock: "32 in stock",
    productPrice: "$45.99",
    productTotalSales: "20",
  },
  {
    productImg: illustration,
    productName: "Sarphens Illustration",
    productDescription: "Random Text",
    productStock: "32 in stock",
    productPrice: "$45.99",
    productTotalSales: "20",
  },
  {
    productImg: Kabukans,
    productName: "Kabukans Pac",
    productDescription: "Random Text",
    productStock: "32 in stock",
    productPrice: "$45.99",
    productTotalSales: "20",
  },
];
