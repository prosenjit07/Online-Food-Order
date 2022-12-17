import Pencake from "../images/cake.jpg";
import Chola from "../images/chhola.jpg";
import Idli from "../images/idli.jpg";
import Dosa from "../images/dosa.jpg";
import MasalaDosa from "../images/masala.jpg";
import Paneer from "../images/paneer.jpg";
import Gujrati from "../images/gujrati.jpeg";
import { Cake } from "@mui/icons-material";

export const MenuList = [
  {
    name: "Pen Cake",
    description:
      "price: 300tk. A cake made for graduation day in bluish theme with a graduation hat, book and a pen.",
    image: Pencake,
    price: 300,
  },
  
  {
    name: "Paneer",
    description:
      "price: 700 tk. It is a fresh acid-set cheese common and made from cow or buffalo milk",
    image: Paneer,
    price: 400,
  },
 
  {
    name: "Idli Sambhar",
    description:
      "Price: 800 tk. Idli sambar is a breakfast where fluffy soft idli is served with hot sambar (spicy vegetable lentil stew),",
    image: Idli,
    price: 300,
  },
  {
    name: "Masala Dosa",
    description:
      "Price: 550 tk. It is made from rice, lentils, Urad dal, Chana dal, fenugreek, puffed rice, Toor dal, dry red chilli and served with potato curry, chutneys, and sambar",
    image: MasalaDosa,
    price: 100,
  },
 
  {
    name: "Chola",
    description:
      "Price: 650 tk. Chola is high in protein and makes a fantastic swap for meat during a veggie lover and vegetarian abstains from food.",
    image: Chola,
    price: 250,
  },
  {
    name: "Indian Platter",
    description:
      "Price: 1000 tk. Baked cheese, such as brie or camembert, topped with herbs and olive oil.",
    image: Gujrati,
    price: 500,
  },
];
