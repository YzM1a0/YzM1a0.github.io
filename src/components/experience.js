import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Subtitle from './subtitle';
import * as style from './experience.module.css';

const Experience = () => {
    return (
        <div>
            <Subtitle title="Experiences" />
            
            <div className={style.container}>
                <div>
                    <StaticImage className='logo' src="../images/nudt.png" alt="NUDT_2" />
                </div>
                <div className={style.infocontainer}>
                    <span className={style.subinfo}>2024.09 - present</span>
                    <br />
                    <span className={style.maininfo}>National University of Defense Technology, <i>Ph.D student of Computer Science.</i></span>
                </div>
            </div>

            <div className={style.container}>
                <div>
                    <StaticImage className='logo' src="../images/baidu.png" alt="BAIDU" />
                </div>
                <div className={style.infocontainer}>
                    <span className={style.subinfo}>2024.06 - 2024.09</span>
                    <br />
                    <span className={style.maininfo}>Baidu Inc., <i>Internship in Basic Search Strategy.</i></span>
                </div>
            </div>

            <div className={style.container}>
                <div>
                    <StaticImage className='logo' src="../images/nudt.png" alt="NUDT" />
                </div>
                <div className={style.infocontainer}>
                    <span className={style.subinfo}>2021.09 - 2024.06</span>
                    <br />
                    <span className={style.maininfo}>National University of Defense Technology, <i>Master of Computer Science.</i></span>
                </div>
            </div>

            <div className={style.container} style={{marginBottom: '10px'}}>
                <div>
                    <StaticImage className='logo' src="../images/dlut.png" alt="DLUT" />
                </div>
                <div className={style.infocontainer}>
                    <span className={style.subinfo}>2017.09 - 2021.06</span>
                    <br />
                    <span className={style.maininfo}>Dalian University of Technology, <i>Bachelor of Software Engineering.</i></span>
                </div>
            </div>
        </div>
    )
}

export default Experience;