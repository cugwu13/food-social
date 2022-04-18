import './post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faUserPlus } from '@fortawesome/free-solid-svg-icons';

export default function Post() {
    return (
        <div className="post-container">
            <div className="row-1">
                <img
                    src="/assets/profilePic/pic1.jpeg"
                    alt="profile"
                    className="profile-pic"
                />
                <textarea placeholder="What's happening?" rows="3"></textarea>
            </div>
            <div className="row-2">
                <div className="tag-user">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Tag User</span>
                </div>
                <div className="add-media">
                    <FontAwesomeIcon icon={faImage} />
                    <span>Add Photo</span>
                </div>
            </div>
            <div className="row-3">
                <button id="create-post">Post</button>
            </div>
        </div>
    );
}
