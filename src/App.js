export default function Board() {
  return (
    <>
    <div className="title">Memory Game</div>
    <div className="status">game status: </div>
    <Square />

    </>
  );
}
function Square() {
  return <button className="square">Image</button>
}
