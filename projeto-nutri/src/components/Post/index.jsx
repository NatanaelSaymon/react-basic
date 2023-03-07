import styles from './styles.module.css'

export function Post(props){
    return(
        <article className={styles.card}>
            <img src={props.post.capa} alt={props.post.titulo} />
            <h2>{props.post.titulo}</h2>
            <p>{props.post.subtitulo}</p>
        </article>
    )
}