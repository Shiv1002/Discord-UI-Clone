import React from 'react'
import discordLogo from "/discord_main_logo.svg";
import "./App.css"
import Imagine_place from "./components/Main/Imagine_place";
import Navbar from "./components/Main/Navbar";
import Invite_only from "./components/Main/Invite_only";
import Footer from "./components/Main/Footer";
import Haning_out_easy from "./components/Main/Haning_out_easy";
import Few_to_fandom from "./components/Main/Few_to_fandom";
import Reliable_tech from "./components/Main/Reliable_tech";

export default function Main() {
  return (
    <div id="main" className="font-semibold w-full border-0 " >
          <Navbar logo={discordLogo} />
          <Imagine_place />
          <Invite_only />
          <Haning_out_easy />
          <Few_to_fandom />
          <Reliable_tech />
          <Footer logo={discordLogo} />
    </div>
  )
}
