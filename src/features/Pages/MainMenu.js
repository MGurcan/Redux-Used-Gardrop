import React from "react";
 import '../../styles/MainMenu.css'
/*
import tshirt from '../images/tshirt.png';
import dress from '../images/dress.png';
import pp from '../images/pp.jpg'; */
import { Link } from 'react-router-dom'

/* import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'



import FeatureButtonCategorize from './SecondaryComponents/FeatureButtonCategorize';
import FeatureButtonLastWearTime from "./SecondaryComponents/FeatureButtonLastWearTime";
import FeatureButtonIronInfo from "./SecondaryComponents/FeatureButtonIronInfo";
import FeatureButtonMakeCombines from "./SecondaryComponents/FeatureButtonMakeCombines"; */


import { useSelector } from "react-redux";
const MainMenu = () => {

const userInfo = useSelector((state) => state.userInfo)
console.log(userInfo.userName)

    return (

        <div className="container">

            <h1 className="head-title">Gardrop</h1>
            <nav className="nav-bar">
                <h3>Welcome {userInfo.userName}!</h3>
                <h3>  Good to see you!</h3>
                <ul>
                    <li className="active">
                        <Link to="/main-menu">Main Menu</Link>
                    </li>
                    <li>
                        <Link to="/my-gardrop">My Gardrop</Link>
                    </li>
                </ul>
            </nav>

 {/*            <div className="description-bar">
                <div className="who-we-are">
                    <h2>Who We Are</h2>
                    <img src={tshirt} alt="tshirt image" width={100} height={100}></img>
                    <p className="who-we-are-paragraph">
                        We are here to help you make better combines without opening your gardrops.
                    </p>

                    <a href="#aboutus"><button className="button-direct-details">To learn more about us, click!</button></a>

                </div>

                <div className="what-we-are-providing">
                    <h2>What we are providing</h2>
                    <img src={dress} alt="dress image" width={100} height={100}></img>
                    <p className="features-paragraph">
                        We provide you many opportunities to categorize and classify your clothes, accessories etc.
                    </p>
                    <a href="#features"><button className="button-direct-details">For detailed information, and classifying options click!</button></a>
                </div>



            </div>
            <div className="about-us" id="aboutus">

                <div className="about-us-paragraph">
                    <h2> About Us </h2>
                    <p id="about-us-paragraph">
                        Hello there! My name is Mehmet Gurcan. I study at TOBB ETU Cs.
                        I like positive people. Please be positive. Hope you benefit this app. Cya!! <br></br>
                        Hello there! My name is Mehmet Gurcan. I study at TOBB ETU Cs.
                        I like positive people. Please be positive. Hope you benefit this app. Cya!! <br></br>
                        Hello there! My name is Mehmet Gurcan. I study at TOBB ETU Cs.
                        I like positive people. Please be positive. Hope you benefit this app. Cya!! <br></br>
                    </p>


                    <div className="social-media">
                        <a href="https://www.instagram.com/mmgurcan/"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/mehmet-g%C3%BCrcan-00418b227/"><FaLinkedin /></a>
                        <a href="https://github.com/MGurcan"><FaGithub /></a>
                    </div>
                </div>
                <img src={pp} alt="pp" id="profil-photo"></img>


            </div>  

            <div className="features" id="features">
                <h1> Features</h1>

                <div className="feature categorize">
                    <FeatureButtonCategorize />
                </div>

                <div className="feature last-wear-time">
                    <FeatureButtonLastWearTime />
                </div>

                <div className="feature iron-info">
                    <FeatureButtonIronInfo />
                </div>

                <div className="feature make-combine">
                    <FeatureButtonMakeCombines />
                </div>

            </div> */}
        </div>
    );
};

export default MainMenu;