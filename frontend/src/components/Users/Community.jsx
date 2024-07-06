// DiscussionEntry.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReply,
  faSearch,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import image01 from "../../assets/Discussion_Ellipse2.png";
import ProfileBoy from "../../assets/Profile.webp";
import Notification from "./Notification";
import ToggleProfile from "./ToggleProfile";
import { useMediaQuery } from "react-responsive";
const DiscussionEntry = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 450 });
  const isTablet = useMediaQuery({ maxWidth: 768 });

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const closeProfile = () => {
    setShowProfile(false);
  };

  const entries = [
    {
      id: 1,
      name: "Andrew Smith",
      date: "11 July, 2024",
      content: "Here's a sample entry for the discussion platform",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Andrew Smith",
      date: "11 July, 2024",
      content: "Here's a sample entry for the discussion platform",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Andrew Smith",
      date: "11 July, 2024",
      content: "Here's a sample entry for the discussion platform",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "Andrew Smith",
      date: "11 July, 2024",
      content: "Here's a sample entry for the discussion platform",
      avatar: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div className="p-4">
      <div className={`flex justify-center ${isMobile ? 'p-2' : 'py-2'}`}>
        <div className={`bg-white px-2 rounded-3xl ${isMobile ? 'py-2 w-full mx-2' : 'py-2 w-5/6 mr-3'} shadow-xl`}>
          <div className='w-full flex flex-row justify-between'>
            <div className="flex items-center bg-slate-200 rounded-full px-4 py-2 w-52">
              <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
            <div className="flex items-center space-x-2 md:space-x-10 md:mr-10">
              <Link onClick={toggleNotifications}>
                <FontAwesomeIcon icon={faBell} className="text-gray-700 text-3xl" />
              </Link>
              <Link onClick={toggleProfile}>
                <img src={ProfileBoy} alt="Profile" className="w-10 h-10 rounded-full" />
              </Link>
              {showProfile && (<ToggleProfile closeProfile={closeProfile} />)}
              {showNotifications && (<Notification />)}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 mb-4">
        <div className="flex space-x-10 bg-white p-3 rounded-full">
          <button className="text-gray-600 ml-1">Recent</button>
          <button className="text-gray-600">Popular</button>
          <button className="text-gray-600 mr-1">Last Reply</button>
        </div>

        <div className="flex bg-white p-3 rounded-full">
          <button className="text-gray-600">By Category:</button>
          <select className="text-sm focus:outline-none">
            <option>General</option>
            <option>Security</option>
            <option>Privacy</option>
          </select>
        </div>
      </div>
      {entries.map((entry) => (
        <div key={entry.id} className="flex bg-blue-50 p-4 rounded-lg mb-4">
          <img
            src={image01}
            alt={entry.name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{entry.name}</h2>
            <p>{entry.content}</p>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-sm text-gray-500">{entry.date}</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2">
              <FontAwesomeIcon icon={faReply} /> Reply
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscussionEntry;
