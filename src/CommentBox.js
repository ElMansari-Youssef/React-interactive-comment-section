import { useEffect, useState } from "react";
import Header from './Header';
import CommentParagraph from './CommentParagraph';
import Score from './Score';
import AddComment from "./AddComment";





const CommentBox = () => {

    let [data, setData] = useState([]);
    let [replyingTo, setreplyingTo] = useState(null);

    useEffect(() => {
        let url = 'http://localhost:8000/comments'
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data)
            )
    }, [])

    let handleReplyClick = (id) => {
        setreplyingTo(id)
    }

    return (
        <div className="test">

            {/* {console.log(data.map(item => item.replies.map(reply => reply.content )))} */}


            {data.map((data) => (

                <div className="CommentContainer">

                    <div className="CommentBoxStyle" key={data.id}>

                        <Score data={data} />

                        <div className="HeaderAndCommentStyle">

                            <Header data={data} onReplyClick={() => handleReplyClick(data.id)} />
                            <CommentParagraph data={data} />


                        </div>




                    </div>

                    <div className="replies2">

                        {data.replies && data.replies.map(reply =>

                            <div  >

                                <div className="CommentBoxStyle " key={reply.id}>

                                    <Score data={reply} />

                                    <div className="HeaderAndCommentStyle " >

                                        <Header data={reply} onReplyClick={() => handleReplyClick(reply.id)} />

                                        <CommentParagraph data={reply} />

                                    </div>
                                </div>

                                {replyingTo === reply.id && (
                                    <AddComment />
                                )}

                            </div>


                        )}
                    </div>

                    {replyingTo === data.id && (
                        <AddComment />
                    )}

                 

                </div>


            ))}
        </div>
    );
}

export default CommentBox;