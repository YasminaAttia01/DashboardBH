import "./Program.css";
export default function Program({ number, pieces, theorique }) {
  return (
    <div className="program-container">
      <div className="program-line">
        <div>Programme : </div>
        <div>{number}</div>
      </div>
      <div className="program-line">
        <div>fabriqués :</div> <div>{pieces}</div>
      </div>
      <div className="program-line">
        <div>théorique : </div>
        <div>{theorique}</div>
      </div>
    </div>
  );
}
