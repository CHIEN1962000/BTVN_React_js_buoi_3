import './App.css';
import style from "./styles.module.css";
import React, {useState} from 'react';


function App() {
  const [time, setTime] = useState('')
  const dk = true;
  // const textStyle = (dk == true) ? style.textBlue : style.textRed;
  const [textStyle, setTextStyle] = useState('')

  const onClick1 = (e) => {
    setTime('night');
    setTextStyle(style.textBlue)
  };
  const onClick2 = (e) => {
    setTime('day');
    setTextStyle(style.textRed)
  };

  console.log("dk= ",setTime);
  return (
    <div>
      <h2>Bài tập về nhà 1</h2>
        <div className={style.bao}>
          <div className={style.chia}>
            <div className={style.LeftSide}>Sidebar</div>
            <div className={style.RightSide}>Content</div>
          </div>
        </div>

      <h2>Bài tập về nhà 2</h2>
        <div className={style.bao}>
          <div className={style.chia1}>
              <button className={style.btn} onClick={onClick1}>Night</button>
              <button className={style.btn} onClick={onClick2}>Day</button>
              <div className={textStyle}>{time}</div>
          </div>
        </div>
    </div>
  );
}

export default App;
