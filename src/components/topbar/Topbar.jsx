import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Link ,Navigate, useLinkClickHandler} from "react-router-dom";


export default function Topbar() {
    
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo"><Link className="Link" to="/">FACEBOOK</Link></span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <SearchIcon className="searchIcon"/>
                <input placeholder="search for friends post or videos" className="searchInput"/>
                

            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink"><Link className="Link" to="/">Homepage</Link></span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <PersonIcon/>
                    <span className="topbarIconBadge">1</span>


                </div>
                <div className="topbarIconItem">
                    <ChatIcon/>
                    <span className="topbarIconBadge">2</span>

                </div>
                <div className="topbarIconItem">
                    <NotificationsActiveIcon/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <div className="TopbarImgContainer" onClick={<Navigate to="/profile/1"/>}> 
            <img  src="./assets/profile.jpeg" alt="" className="topbarImg" /> 
            </div>
        </div>
    </div>
  )
}
