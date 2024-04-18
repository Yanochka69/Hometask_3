import style from '../css/ButtonShow.module.css'

function ButtonShow(props) {
    return(
        <button className={style.button} onClick={props.onClick}>
            {props.show}
        </button>
    )
}

export default ButtonShow