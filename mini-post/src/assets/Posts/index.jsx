import { posts } from '../../posts.json'
import { Post } from '../Post'
import style from './style.module.css'

export function Posts() {
    return(
        <section className={style.container}>
            {posts.map( post => {
                return <Post image={post.image} title={post.title} description={post.description}/>
            })}
        </section>
    )
}