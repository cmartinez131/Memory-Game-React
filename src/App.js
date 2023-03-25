export default function Board() {


  function handleClick(i) {

  }

  return (
    <>
    <div className="title">Memory Game</div>
    <div className="status">game status: </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
    

    </>
  );
}
function Square() {
  return <button className="square">Image</button>
}

