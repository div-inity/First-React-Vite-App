export function Cell ({val, koor, index, onClick}) {
  return (
    <div className="cell" koor={koor} onClick={onClick}>
      Koor: {koor[0] + ", " + koor[1]}<br/>
      Val: {val}<br/>
      Index: {index}
    </div>
  )
}
