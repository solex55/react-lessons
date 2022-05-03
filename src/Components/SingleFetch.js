import React, {useState, useEffect} from 'react'
import axios from 'axios'

function SingleFetch() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    useEffect(() => {
        axios
            .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])
    return (
        <div>
            <input 
                type='text'
                value={id}
                onChange={e => setId(e.target.value) }
            />
            <div>{post.title}</div>
        </div>
    )
}

export default SingleFetch
