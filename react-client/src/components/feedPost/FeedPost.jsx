import './feedPost.css';

export default function FeedPost() {
    return (
        <div className="feed-post-container">
            <div className="feed-post-row-1">
                <img
                    src="./assets/profilePic/pic1.jpeg"
                    alt="profile"
                    className="profile-pic"
                />
                <div>
                    <span className="feed-post-username">Bob Meyers</span>
                    <span className="feed-post-time-ago">2d</span>
                </div>
            </div>
            <div className="feed-post-row-2">
                <p>
                    Wow! Look at this amazing dish that I made last night! It
                    was to die for!!
                </p>
            </div>
            <div className="feed-post-row-3">
                <img
                    src="./assets/feedPic/pic1.jpg"
                    alt="fried chicken and macaroni salad"
                    className="feed-pic"
                />
            </div>
        </div>
    );
}
