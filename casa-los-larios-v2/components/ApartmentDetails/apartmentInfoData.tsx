import {
  FaSwimmingPool,
  FaPlane,
  FaBed,
  FaMapSigns,
  FaParking,
  FaPaw,
  FaCocktail,
} from "react-icons/fa";
import React from "react";
import styles from './ApartmentDetails.module.css'

interface Restaurant {
  name: string;
  type: string;
  priceLevel: string;
  url: string;
}

interface ApartmentInfoItem {
  icon: React.ComponentType;
  title: string;
  description: JSX.Element | JSX.Element[];
}

const restaurantData: Restaurant[] = [
  {
    name: "Cafetería Concierto",
    type: "English Pub",
    priceLevel: "$",
    url: "https://www.facebook.com/conciertooriginal/",
  },
  {
    name: "Arroceria el Sarmiento",
    type: "Paella",
    priceLevel: "$$",
    url: "https://arroceriaelsarmiento.com",
  },
  {
    name: "Restaurante Punta Prima",
    type: "Fusion, Modern",
    priceLevel: "$$$",
    url: "https://www.restaurantepuntaprima.com/",
  },
  {
    name: "GONG",
    type: "Fusion, Modern",
    priceLevel: "$$$",
    url: "https://www.facebook.com/gongrestaurantspain/",
  },
];

const restaurantDescriptions: JSX.Element[] = restaurantData.map(
  (restaurant, index) => (
    <React.Fragment key={index}>
      <a href={restaurant.url} target="_blank" rel="noopener noreferrer">
        {restaurant.name}
      </a>
      {`, ${restaurant.type} ${restaurant.priceLevel}`}
      <br />
    </React.Fragment>
  )
);

const apartmentInfo: ApartmentInfoItem[] = [
  {
    icon: FaBed,
    title: "ACCOMMODATION",
    description: (
      <>
        2 Bedrooms
        <br />
        1 Queen Size
        <br />
        4 Single Beds
        <br />
        2 Bathrooms
        <br />
        Large Terrace
        <br />
        Smart TV
        <br />
        Highspeed WIFI
      </>
    ),
  },
  {
    icon: FaMapSigns,
    title: "DISTANCES",
    description: (
      <>
        <div className={styles.distanceItem}>
          <b>La Zenia Boulevard</b>
          <p>10 minute walk</p>
        </div>
        <div className={styles.distanceItem}>
          <b>Torrevieja</b>
          <p>10 minute drive</p>
        </div>
        <div className={styles.distanceItem}>
          <b>Nearest Beach</b>
          <p>20 minute walk</p>
        </div>
        <div className={styles.distanceItem}>
          <b>Sunday Market</b>
          <p>2 minute walk</p>
        </div>
      </>
    ),
  },
  {
    icon: FaPlane,
    title: "NEARBY AIRPORTS",
    description: (
      <>
        <div className={styles.distanceItem}>
          <b>Murcia International Airport (Corvera)</b>
          <p>55KM</p>
        </div>
        <div className={styles.distanceItem}>
          <b>Alicante Airport (ALC)</b>
          <p>70KM</p>
        </div>
        <div className={styles.distanceItem}>
          <b>Valencia Airport (VLC)</b>
          <p>212KM</p>
        </div>
        <div className={styles.distanceItem}>
          <b>Easy car rental and taxi services</b>
        </div>
      </>
    ),
  },
  {
    icon: FaPaw,
    title: "PETS",
    description: (
      <>Pet-friendly with nearby parks and beaches for your furry friends.</>
    ),
  },
  {
    icon: FaParking,
    title: "PARKING",
    description: <>Public & Private parking Free of cost</>,
  },
  {
    icon: FaSwimmingPool,
    title: "SEASIDE",
    description: (
      <>
        Stunning pool with ranging depths
        <br />
        Public beaches nearby
      </>
    ),
  },
  {
    icon: FaCocktail,
    title: "RESTAURANTS WE RECOMMEND",
    description: <>{restaurantDescriptions}</>,
  },
];

export default apartmentInfo;
