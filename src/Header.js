import AddComment from "./AddComment";

const Header = ({ data, onReplyClick }) => {

    return ( 
        <div className="HeaderContainer">

            <div className="ImgUsernameCreatedAtContainer">

                <img src={data.user.image.png} alt="profile Image" />
                <p className="Username">{data.user.username}</p>
                <p className="CreatedAt">{data.createdAt}</p>
                
                
            </div>

            <button onClick={onReplyClick}> <i className="fa-solid fa-reply"></i> Reply</button>
        </div>
     );
}
 
export default Header;

