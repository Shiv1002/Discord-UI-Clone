import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Dashboard from "./components/Dashboard/Dashboard"
import FriendsPage from "./components/Dashboard/FriendsPage";
import Stage from "./components/Dashboard/StageDiscovery";
import Nitro from "./components/Dashboard/Nitro";
import Server1 from "./components/Dashboard/servers/Server1";
import Friends from "./components/Dashboard/addfriend/friend-navbar/Friends";
import Online from "./components/Dashboard/addfriend/friend-navbar/Online";
import Pending from "./components/Dashboard/addfriend/friend-navbar/Pending";
import Blocked from "./components/Dashboard/addfriend/friend-navbar/Blocked";
import AddFriend from "./components/Dashboard/addfriend/friend-navbar/AddFriend";
import AllFriends from "./components/Dashboard/addfriend/friend-navbar/AllFriends";
import Dash from "./components/Dashboard/Dash";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} loader={<h1>hellp</h1>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} >
          <Route path="" element={<Dash />}>
            <Route path="friends"  >
              <Route path="" element={<FriendsPage  url="friends" />} >
                {/* <Route path="" element={<Online/>}></Route> */}
                <Route path="online" element={<Online />} ></Route>
                <Route path="allFriends" element={<AllFriends />}></Route>
                <Route path="pending" element={<Pending />}></Route>
                <Route path="blocked" element={<Blocked />}></Route>
                <Route path="addFriends" element={<AddFriend />}></Route>
              </Route>
            </Route>
            <Route path="stageDiscovery" element={<Stage url="stage discovery"/>} />
            <Route path="nitro" element={<Nitro url="nitro" />}></Route>
          </Route>
          <Route path="servers-1">
            <Route index element={<Server1 />} />
          </Route>

        </Route>
        <Route path="*" element={<div className="flex flex-col bg-orange-500 h-screen  text-white"> <span className="text-7xl font-semibold text-center">Error!</span><span className="text-center text-3xl">Page may no longer exist</span> </div>} />
      </Routes>

    </Router>


  );
}

{/*  */ }

export default App;
