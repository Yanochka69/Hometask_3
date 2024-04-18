import style from '../css/Form.module.css'

function Form(props) {
    return(
        <div className={style.form}>
            <h3>Заполните форму для добавления нового курса</h3>
            <h5>Название курса:</h5>
            <input className={style.input} type="text" value={props.name} onChange={props.onChange}/> 
            <h5>Описание курса:</h5>
            <textarea className={style.textarea} value={props.description} onChange={props.onChange2} cols="30" rows="10"></textarea>
            <h5>Уровень прохождения курса (в процентах):</h5>
            <input className={style.input} type="number" min='0' value={props.level} onChange={props.onChange3}/><br />
            <button className={style.button} onClick={props.onClick}>
                Добавить
            </button>
        </div>
    )
}

export default Form