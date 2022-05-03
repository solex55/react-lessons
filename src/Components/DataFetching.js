import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')

    //effect is used to fetch data from url end point, using axios to get data
    //for data to be fetched only once on useEffect use empty dependent list []
    useEffect(() => {
        axios
            .get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data)
                setError('')
            })
            .catch(error => {
                setError('url issues /No data on device')
            })

    }, [])

    return (
        <div>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>
                            {post.title}
                            {error ? error : null}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DataFetching
