import React from "react";
import Layout from "../components/layout";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../styles/gallery.css";
import { programs } from "../data/programs";
// import coverimage from "../images/cet-cover.png";

export default function Progrms() {
    return (
        <Layout page="programs">
            <div className="main-container mb-4 mb-md-0">
                <div className="coverimg">
                    <div className="gal-head m-auto ms-4 ms-md-5 mb-3 mb-md-4">Talks and Programs</div>
                </div>
                <div className="gal-container">
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                        <Masonry>
                            {programs.map((item, key) => {
                                return (
                                    <div key={key} className="gal-space">
                                        <div className="myDIV">
                                            <img src={item.src} alt={item.desc} className="gal-img"></img>
                                            {/* <div className="overlay">
                                                <div className="text-wrap">
                                                    <h4 className="img-desc">{item.desc}</h4>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                );
                            })}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </Layout>
    );
}
