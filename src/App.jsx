import { useState } from 'react'

import './App.css'

import ListOfCards from './components/ListOfCards.jsx'
import ListOfCardsLow from './components/ListOfCardsLow.jsx'
import ListOfCardsHigh from './components/ListOfCardsHigh.jsx'
import ButtonShow from './components/ButtonShow.jsx'
import Form from './components/Form.jsx'

const courseMassive = [
  {id: 0, name: 'Многозадачность в Python. Многопроцессное программирование.', description: 'Все о многопроцессном программировании на Python в теории и на практике от А до Я. Создание и управление процессами, работа с пулом процессов, межпроцессное взаимодействие. Курс полностью раскрывает тему процессной многозадачности.', level:'0'},
  {id: 1, name: 'Поколение Python: ООП', description: 'Курс продолжает серию "Поколение Python" и рассказывает о концепции объектно-ориентированного программирования на языке Python', level:'82'},
  {id: 2, name: 'Поколение Python: курс для профессионалов', description: 'Курс продолжает серию "Поколение Python" и рассказывает о дополнительных возможностях языка Python, а тренировочные задачи помогают закрепить каждую тему.', level:'100'},
  {id: 3, name: 'Машинное обучение', description: 'Слушатели курса узнают, как выглядят большие данные, научатся их обрабатывать: восстанавливать пропущенные значения, удалять аномалии, предсказывать значения признаков. Также слушатели научатся анализировать модели искусственного интеллекта, находить их сильные и слабые стороны, аргументировать свою точку зрения в вопросах, связанных с искусственным интеллектом.', level:'11'},
  {id: 4, name: 'Figma для слайдов', description: 'Попробуйте создать электронную презентацию с помощью графического редактора! Figma – бесплатный онлайновый графический редактор, который используют дизайнеры для профессиональных задач, но начать работать в нем можно без специальных навыков. Нужны только браузер, интернет и умение видеть гармонию.', level:'32'}
]

function App() {
  const [show, setShow] = useState('Показать список курсов');
  const onClick = () => {
    setShow(show === 'Показать список курсов' ? 'Убрать список' : 'Показать список курсов');
    setShow2(show2 === 'Убрать список' ? 'Курсы, уровень прохождения которых меньше 50%' : 'Курсы, уровень прохождения которых меньше 50%');
    setShow3(show3 === 'Убрать список' ? 'Курсы, уровень прохождения которых больше или равен 50%' : 'Курсы, уровень прохождения которых больше или равен 50%');
  };

  const [show2, setShow2] = useState('Курсы, уровень прохождения которых меньше 50%');
  const onClick2 = () => {
    setShow(show === 'Убрать список' ? 'Показать список курсов' : 'Показать список курсов');
    setShow2(show2 === 'Курсы, уровень прохождения которых меньше 50%' ? 'Убрать список' : 'Курсы, уровень прохождения которых меньше 50%');
    setShow3(show3 === 'Убрать список' ? 'Курсы, уровень прохождения которых больше или равен 50%' : 'Курсы, уровень прохождения которых больше или равен 50%');
  };

  const [show3, setShow3] = useState('Курсы, уровень прохождения которых больше или равен 50%');
  const onClick3 = () => {
    setShow(show === 'Убрать список' ? 'Показать список курсов' : 'Показать список курсов');
    setShow2(show2 === 'Убрать список' ? 'Курсы, уровень прохождения которых меньше 50%' : 'Курсы, уровень прохождения которых меньше 50%');
    setShow3(show3 === 'Курсы, уровень прохождения которых больше или равен 50%' ? 'Убрать список' : 'Курсы, уровень прохождения которых больше или равен 50%');
  };

  const [array, setArray] = useState(courseMassive);
  const onAddClick = () => {
    const newArray = [...array, {id: array[array.length - 1].id + 1, name: value, description: value2, level: value3}]
    setArray(newArray);
    setValue('');
    setValue2('');
    setValue3('');
  }

  // const [arrayDel, setCards] = useState(array);
    const handleDeleteCard = (cardId) => {
      const updatedArray = array.filter(item => item.id !== cardId);
      setArray(updatedArray);
  }

  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
  }

  const [value2, setValue2] = useState('');
  const onChange2 = (e) => {
    setValue2(e.target.value);
  }

  const [value3, setValue3] = useState(0);
  const onChange3 = (e) => {
    setValue3(e.target.value);
  }
  return (
    <div className='all'>
      <div>
        <ButtonShow onClick={onClick} show={show} />
        {show === 'Убрать список' ? <ListOfCards array={array} func={handleDeleteCard}/> : ''}
      </div>
      
      <div>
        <ButtonShow onClick={onClick2} show={show2} />
        {show2 === 'Убрать список' ? <ListOfCardsLow array={array} func={handleDeleteCard}/> : ''}
      </div>

      <div>
        <ButtonShow onClick={onClick3} show={show3} />
        {show3 === 'Убрать список' ? <ListOfCardsHigh array={array} func={handleDeleteCard} /> : ''}
      </div>

      <Form name={value} 
        description={value2} 
        level={value3} 
        onChange={onChange}
        onChange2={onChange2}
        onChange3={onChange3}
        onClick={onAddClick}
        />
    </div>
  );
}

export default App
