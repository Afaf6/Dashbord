
import './App.css';
import Header from './Commponent/Header/Header';
import Followers from './Commponent/Followers/Followers';
import { useEffect, useState } from 'react';
import Overview from './Commponent/Overview/Overview';
import Headeroverview from './Commponent/headeroverview';
import Facebook from '../public/Images/icon-facebook.svg';
import Twitter from '../public/Images/icon-twitter.svg';
import Instagram from '../public/Images/icon-instagram.svg';
import Youtube from '../public/Images/icon-youtube.svg';
import UpIcon from '../public/Images/icon-up.svg';
import DownIcon from '../public/Images/icon-down.svg';

function App() {

  const [ArrayOfObject, setArrayOfObject] = useState([

    { backgroundColor : "blue",
      id: 1,
      platform: Facebook,
      username: "@nathanf",
      value: 1987,
      metric: "Followers",
      icon: UpIcon,
      change: "12 Today"
  },
  { backgroundColor : "blue",
      id:2,
      platform: Twitter,
      username: "@nathanf",
      value: 1044,
      metric: "Followers",
      icon: UpIcon,
      change: "99 Today"
  },
  {  backgroundColor : "blue",
      id:3,
      platform: Instagram,
      username: "@realnathanf",
      value: 11000,
      metric: "Followers",
      icon: UpIcon,
      change: "1099 Today"
  },
  {  backgroundColor :"mmmm",
      id:4,
      platform: Youtube,
      username: "Nathan F.",
      value: 8239,
      metric: "Subscribers",
      icon: DownIcon,
      change: "144 Today"
  }
  ]);

  // useEffect (() =>{
  //     function CallApi (){
  //         fetch("http://localhost:3000/followers")
          
  //         .then ((response) => {return response.json(); })

  //         .then((finalResult) => {
  //             setArrayOfObject(finalResult);
  //         });
  //     } CallApi(); [] }) ;

      const [ArrayOfengagement, setArrayOfengagement] = useState([

      {
          id:1,
          platform: Facebook,
          metric: "Page Views",
          value: 87,
          icon: UpIcon,
          change: "3%"
      },
      {
          id : 2,
          platform : Facebook,
          metric : "Likes",
          value : 52,
          icon : DownIcon,
          change: "-2%"
      },
      {
          id:3,
          platform: Instagram,
          metric: "Likes",
          value: 5462,
          icon: UpIcon,
          change: "2257%"
      },
      {
          id:4,
          platform: Instagram,
          metric: "Profile Views",
          value: 52000,
          icon: UpIcon,
          change: "1375%"
      },
      {
          id:5,
          platform: Twitter,
          metric: "Retweets",
          value: 117,
          icon: UpIcon,
          change: "303%"
      },
      {
          id:6,
          platform: Twitter,
          metric: "Likes",
          value: 507,
          icon: UpIcon,
          change: "553%"
      },
      {
          id:7,
          platform: Youtube,
          metric: "Likes",
          value: 107,
          icon: DownIcon,
          change: "19%"
      },
      {
          id:8,
          platform: Youtube,
          metric: "Total Views",
          value: 1407,
          icon: DownIcon,
          change: "12%"
      }
      ])
      // useEffect (() => {
      //     function CallApi (){
      //       fetch("http://localhost:3000/engagement")
      //       .then ((response) =>{return response.json(); })
      
      //       .then((finnal) =>{
      //         setArrayOfengagement(finnal);
      //       });
      //     } CallApi(); [] }) ;    
      

  return (
    <>
    <div id="patern">
      
    </div>
    <div id='dachbord'>
     <Header/>
     <div id="stylfollow">
      {ArrayOfObject.map((follower) => {
        return (
           <Followers
            key = {follower.id}
            backgroundColor = {follower.bordcolor}
            platform = {follower.platform}
            username = {follower.username}
            value = {follower.value}
            metric = {follower.metric}
            icon = {follower.icon}
            change = {follower.change}
           ></Followers>
        );
      })}
     </div>
     <>
     <Headeroverview></Headeroverview>
      <div id="overviewstyle">
      {ArrayOfengagement.map((overview) =>{
        return (
          <Overview
           key = {overview.id}
           platform = {overview.platform}
            value = {overview.value}
            metric = {overview.metric}
            icon = {overview.icon}
            change = {overview.change}
          ></Overview>
        )
      })}
     </div>
     </>
    
    </div>
    </>
    
  )
}

export default App
