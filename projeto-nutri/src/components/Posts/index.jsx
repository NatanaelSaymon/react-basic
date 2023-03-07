import { useState, useEffect } from 'react'
import api from '../../services/api'
import { Post } from '../Post'
import styles from './styles.module.css'

export function Posts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        
        async function loadPosts() {
            const response = await api.get('/rn-api/?api=posts')
            setPosts(response.data)
            console.log(response.data)
        }

        loadPosts()
        setLoading(false)

    }, [])

    if(loading){
        return <div>Loading...</div>
    }

    return(
        <div className={styles.container}>
            {posts.map( post => <Post post={post} key={post.id}/>)}
        </div>
    )
}