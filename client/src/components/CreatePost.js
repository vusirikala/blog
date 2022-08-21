import React, {useState} from 'react';
import axios from 'axios';

function CreatePost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        axios.post("http://localhost:4000/createpost", {title, content}).then((response) => {
            console.log(response.body);
        });
        setTitle("");
        setContent("");
    }
    
    return (<form onSubmit={handleSubmit}> 
        <label class="form-label">Title</label>
        <input type="text" class="form-control col-md-4" placeholder="Enter title" onChange={e => setTitle(e.target.value)} name="title" value={title}></input>
        <label class="form-label">Content</label>
        <textarea rows="5" class="form-control col-md-4" placeholder="Enter content" onChange={e => setContent(e.target.value)} name="content" value={content}></textarea>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>);
}

export default CreatePost;
