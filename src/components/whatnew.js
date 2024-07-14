import React from "react";
import IsMobile from "../utils/ismobile";
import IsDesktop from "../utils/isdesktop";
import Subtitle from "./subtitle";
import * as style from './publication.module.css'

const Whatnew = () => {
    return (
        <div>
            <Subtitle title="What's New" color="red"></Subtitle>
            <ul className={style.contrainer} style={{lineHeight:1.3}}>
                <li>
                    <span style={{fontWeight:'bold'}}>[Mar, 2023]</span> 🎉 One paper got accepted for <a style={{color:'#000'}} href="https://www.ecai2024.eu/" target="_blank">ECAI 2024</a>.
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[Jun, 2024]</span> 🎉 I received the Outstanding Graduate Student of Hunan Province.
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[Oct, 2023]</span> 🎉 I received the National Scholarship for Master Student of P.R. China.
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[Mar, 2023]</span> 🎉 One paper got accepted for <a style={{color:'#000'}} href="https://www.2023.ieeeicme.org/index.php" target="_blank">ICME 2023</a>.
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[Sep 1, 2021]</span> 🎉 I received the First-Class Freshman Scholarship of NUDT. 
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>[Jun 1, 2021]</span> 🎉 I received the Outstanding Graduates of DLUT. 
                </li>
            </ul>
        </div>
    )
}

export default Whatnew;