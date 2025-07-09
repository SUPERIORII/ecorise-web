const image1 = "./images/03a6acdf091c4972ac8bcc3e65d010de.jpg";
const image2 = "./images/images/img-1.jpg";
const image3 = "./images/91925a99b7054ef8c69f04d4e05d488d.jpg";
// images


// assets/03a6acdf091c4972ac8bcc3e65d010de.jpg
export const multipleImages = [
  {
    id: 1,
    image: image1,
  },
  { id: 2, image: image2 },
  {
    id: 3,
    image: image3,
  },
];
import {
  FaChevronCircleRight,
  FaLowVision,
  FaMapSigns,
  FaPumpSoap,
} from "react-icons/fa";


export const aboutUsInfo = [
  { id: 1, title: "our purpose", icon: <FaLowVision />, className: "purpose" },
  { id: 2, title: "our mission", icon: <FaMapSigns />, className: "mission" },
  { id: 3, title: "our vision", icon: <FaPumpSoap />, className: "vision" },
];

export const navLinks = [
  { id: "2", text: "About Us", url: "about-us" },
  { id: "3", text: "Projects", url: "projects" },
  { id: "4", text: "Resources", url: "resources" },
  { id: "5", text: "News", url: "news" },
  { id: "6", text: "Get Involved", url: "get-involved" },
];

export const accountUserOPtions = [
  {
    id: 1,
    text: "dashboard",
    icon: <LayoutDashboard size={16} />,
    href: "dashboard",
  },
  { id: 2, text: "my account", icon: <User size={16} />, href: "account" },
  { id: 3, text: "logout", icon: <LogOut size={16} />, href: "logout" },
];
export const guestUserOPtions = [
  { id: 1, text: "login", icon: <LogIn size={16} />, href: "login" },
];

export const SingleImages = {
  id: 1,
  image: "../src/assets/03a6acdf091c4972ac8bcc3e65d010de.jpg",
};


export const profilePictures = [
  {
    id: 1,
    name: "Morris Kanneh",
    rank: "Environmentalist",
    img: `../src/assets/profilePictures/img-1.jpg`,
  },
  {
    id: 2,
    name: "James Brown",
    rank: "Secretary",
    img: `../src/assets/profilePictures/img-7.jpg`,
  },
  {
    id: 3,
    name: "Sekou M. Nyei",
    rank: "Scientists",
    img: `x`,
  },
  {
    id: 4,
    name: "Victoria katauche",
    rank: "Bio Chemist",
    img: `../src/assets/profilePictures/img-10.jpg`,
  },
];

export const organization = [
  {
    id: 1,
    name: "UNICEF",
    img: `../src/assets/logo.png`,
  },
  {
    id: 2,
    name: `UNITED BROTHERS INTERNET CAFE & PRINTING SERVICES`,
    img: `../src/assets/logo.png`,
  },
  {
    id: 3,
    name: "WORLD HEALTH ORGANIZATION",
    img: `../src/assets/logo.png`,
  },
  {
    id: 4,
    name: "GREENPEACE",
    img: `../src/assets/logo.png`,
  },
];

export const contents = [
  { id: 1, content: "user", icon: <FaChevronCircleRight /> },
  { id: 2, content: "project", icon: <FaChevronCircleRight /> },
  { id: 3, content: "news", icon: <FaChevronCircleRight /> },
  { id: 4, content: "resources", icon: <FaChevronCircleRight /> },
];

// <AiFillMail className="icon" />
// <AiOutlineWhatsApp className="icon" />

import { AiFillFacebook, AiFillMail, AiOutlineWhatsApp } from "react-icons/ai";
import { LayoutDashboard, LogIn, LogOut, User } from "lucide-react";
export const socialIcon = [
  { id: 1, url: "https://www.facebook.com", icon: <AiFillFacebook /> },
  { id: 2, url: "https://www.facebook.com", icon: <AiFillMail /> },
  { id: 3, url: "https://www.facebook.com", icon: <AiOutlineWhatsApp /> },
];
