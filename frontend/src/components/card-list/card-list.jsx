import "./card-list.styles.css";
import { Card } from "../card/card";
//
export const CardList = (props) => {
  //
  console.log("card-list line 4 : ".toUpperCase(), props.monsters);
  //
  return (
    //
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
    //
  );
  //
};
