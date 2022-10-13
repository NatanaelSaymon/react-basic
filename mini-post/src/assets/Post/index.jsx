import style from './style.module.css'

export function Post({ image, title, description }) {
    return(
        <article className={style.card}>
            <a href="#">
                <img src={image} alt={title} />
                <h2>{title}</h2>
                <p>{description}</p>
            </a>    
        </article>
    )
}