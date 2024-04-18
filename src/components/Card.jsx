import style from '../css/Card.module.css'

function Card(props) {
    return(
        <>
        <div className={style.card}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>Пройдено {props.level}%</p>
            <button className={style.button} onClick={props.onClick}>
                Удалить карточку
            </button>
        </div>
        </>
    )
}

export default Card