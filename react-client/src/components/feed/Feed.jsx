import './feed.css';
import FeedPost from '../feedPost/FeedPost';

export default function Feed() {
    return (
        <div className="feed-container">
            <FeedPost />
            <FeedPost />
            <FeedPost />
        </div>
    );
}
