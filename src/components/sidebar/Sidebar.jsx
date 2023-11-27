import "./sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SchoolIcon from '@mui/icons-material/School';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";


export default function sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeedIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <ChatBubbleIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Chat</span>
                </li>
                <li className="sidebarListItem">
                    <PlayCircleIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <GroupAddIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <BookmarkIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <HelpOutlineIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Help</span>
                </li>
                <li className="sidebarListItem">
                    <HomeRepairServiceIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <EventNoteIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <SchoolIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Course</span>
                </li>
                <li className="sidebarListItem">
                    <AddIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText"><Link className="Link" to="/register">Add account</Link></span>
                </li>
                <li className="sidebarListItem">
                    <LogoutIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText"><Link className="Link" to="/login">Logout</Link></span>
                </li>
               

            </ul>
            <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
            <li className="sidebarFriend">
                <img className="sidebarImg" src="./assets/person/2.jpeg" alt=""/>
                <span className="sidebarImgName">Jhon</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarImg" src="./assets/person/2.jpeg" alt=""/>
                <span className="sidebarImgName">Jhon</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarImg" src="./assets/person/2.jpeg" alt=""/>
                <span className="sidebarImgName">Jhon</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarImg" src="./assets/person/2.jpeg" alt=""/>
                <span className="sidebarImgName">Jhon</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarImg" src="./assets/person/2.jpeg" alt=""/>
                <span className="sidebarImgName">Jhon</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarImg" src="./assets/person/2.jpeg" alt=""/>
                <span className="sidebarImgName">Jhon</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarImg" src="./assets/person/2.jpeg" alt=""/>
                <span className="sidebarImgName">Jhon</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarImg" src="./assets/person/2.jpeg" alt=""/>
                <span className="sidebarImgName">Jhon</span>
            </li>
            

          
        </ul>
        
            
        </div>
    </div>
  )
}
