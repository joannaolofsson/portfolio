import React from 'react';
import {
  FaLightbulb, FaRegCalendarAlt, FaSearch, FaListUl, FaRocket, FaSyncAlt,
  FaHeart, FaTree, FaBullhorn, FaChartBar, FaStar, FaCompass,
  FaBrain, FaTrophy, FaBalanceScale, FaHourglassHalf, FaFire,
  FaLeaf, FaToolbox, FaFireAlt
} from 'react-icons/fa';

export type CardDeckCard = {
  id: string;
  icon: JSX.Element;
}
export const initialCards: CardDeckCard[] = [
  {id: 'Creative', icon: <FaLightbulb />},
  {id: 'Disciplined', icon: <FaRegCalendarAlt />},
  {id: 'Curious', icon: <FaSearch />},
  {id: 'Organized', icon: <FaListUl />},
  {id: 'Risk-taker', icon: <FaRocket />},
  {id: 'Adaptable', icon: <FaSyncAlt />},
  {id: 'Empathetic', icon: <FaHeart />},
  {id: 'Resilient', icon: <FaTree />},
  {id: 'Assertive', icon: <FaBullhorn />},
  {id: 'Analytical', icon: <FaChartBar />},
  {id: 'Charismatic', icon: <FaStar />},
  {id: 'Independent', icon: <FaCompass />},
  {id: 'Open-minded', icon: <FaBrain />},
  {id: 'Ambitios', icon: <FaTrophy />},
  {id: 'Honest', icon: <FaBalanceScale />},
  {id: 'Patient', icon: <FaHourglassHalf />},
  {id: 'Determined', icon: <FaFire />},
  {id: 'Humble', icon: <FaLeaf />},
  {id: 'Resourceful', icon: <FaToolbox />},
  {id: 'Passionate', icon: <FaFireAlt />},
];
