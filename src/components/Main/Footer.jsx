import React from 'react'
import "../../App.css"
import x_icon from "/twitter_icon.svg"
import instagram_icon from "/instagram_icon.svg"
import facebok_icon from "/facebook_icon.svg"
import youtube_icon from "/youtube_icon.svg"
import tiktok_icon from "/tiktok_icon.svg"

import usa_flag from "/usa_flag.png"

export default function Footer({ logo }) {

    return (
        <footer className="bg-slate-800 text-white text-sm w-full ">
            
            <div className="footer-container  w-9/12 mx-auto py-10 overflow-hidden">
                <div className="footer-link-container flex  justify-between ">
                    <div className='basis-1/5 '>
                        <div className="  text-white">
                            <select name="" id="" className="bg-transparent" >
                                <option value="" className="" data-image={usa_flag}>  English, USA </option>
                                <option value=""> india </option>
                            </select>
                            <div id="social-links" className='flex py-5 justify-between '>
                                <button ><i><img src={x_icon} alt="X" className="" /></i></button>
                                <button ><i><img src={instagram_icon} alt="Insta" className="" /></i></button>
                                <button ><i><img src={facebok_icon} alt="meta" className="" /></i></button>
                                <button ><i><img src={youtube_icon} alt="youtube" className="" /></i></button>
                                <button ><i><img src={tiktok_icon} alt="tiktok" className="" /></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="navigation-links flex flex-col">
                        <label htmlFor="">Product</label>
                        <a href="">Download</a>
                        <a href="">Nitro</a>
                        <a href="">Status</a>
                        <a href="">App Directory</a>
                    </div>
                    <div className="navigation-links flex flex-col">
                        <label htmlFor="">Company</label>
                        <a href="">About</a>
                        <a href="">Jobs</a>
                        <a href="">Brand</a>
                        <a href="">Newsroom</a>
                    </div>
                    <div className="navigation-links flex flex-col">
                        <label htmlFor="">Resources</label>
                        <a href="">College</a>
                        <a href="">Support</a>
                        <a href="">Safety</a>
                        <a href="">Blog</a>
                        <a href="">Feedback</a>
                        <a href="">Developers</a>
                        <a href="">StreamKit</a>
                        <a href="">Creators</a>
                        <a href="">Community</a>
                        <a href="">Official 3rd Party Merch</a>
                    </div>
                    <div className="navigation-links flex flex-col">
                        <label htmlFor="">Policies</label>
                        <a href="">Terms</a>
                        <a href="">Privacy</a>
                        <a href="">Cookie Settings</a>
                        <a href="">Guidelines</a>
                        <a href="">Acknowledgements</a>
                        <a href="">Licenses</a>
                        <a href="">Company Information</a>
                    </div>
                </div>

                <hr />
                <div className="flex justify-between py-5">
                    <img src={logo} alt="discordLogo" />
                    <button className="btn btn-primary">Sign up</button>
                </div>
            </div>
        </footer>
    )
}
