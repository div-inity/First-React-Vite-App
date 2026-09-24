import { useState } from 'react'
import './App.css'
import { Field } from './components/Field'
import { Cell } from './components/Cell'

function App() {
  let size = 3;
  const [pick, setPick] = useState('x');
  const [cells, setCells] = useState(() => Array.from({ length: 9 }, (_, i) => ({ val: null, koor: [], index: i })));

  function toStep(index) {
    console.log(index, cells)
  }
  function Click (cell) {
    //console.log(cell)
    if (cell.val) return;
    setCells(cells.map(c =>
      (c.index === cell.index) ? { ...c, val: pick } : c
    ));
    toStep(cell.koor);
    setPick((pick === 'x') ? 'o' : 'x');
  }

  return (
    <section>
      <h2>Очередь {pick}</h2>
      <Field>
        {Array.from({length: size}).map((_, row) => (
          <div className='row' key={row}>
            {cells.slice(row * size, row * size + size).map((cell, col) => {
              const i = cell.index;
              cell.koor = [row, col]
              //console.log(cells[i].koor)
              return (
                <Cell index={i} key={i} koor={cell.koor} val={cell.val} onClick={() => Click(cell)}/>
              )
            })}
          </div>
        ))
        }
      </Field>
    </section>
  )  
}

export default App

