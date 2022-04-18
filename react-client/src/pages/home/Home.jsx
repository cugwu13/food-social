import './home.css';
import Navbar from '../../components/navbar/Navbar';
import SideMenu from '../../components/sideMenu/SideMenu';
import Post from '../../components/post/Post';
import Feed from '../../components/feed/Feed';

export default function Home() {
    return (
        <div className="home-container">
            <Navbar id="navbar" />
            <div className="content-container">
                <div className="side-menu-container">
                    <SideMenu id="side-menu" />
                </div>
                <div className="post-feed-container">
                    <Post id="post" />
                    <Feed />
                </div>
            </div>
        </div>
    );
}
