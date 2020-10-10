import React from "react";
import CurrentTask from "../CurrentTask/CurrentTask.component";
import ProgressTask from "../ProgressTask/ProgressTask.component";
import CompletedTask from "../CompletedTask/Completed.component";

import "./Board.css";

function Board(props) {
  const { updateBoard, boards,selectedBoardName } = props;

  return (
    <div className="board">
      <CurrentTask boards={boards} updateBoard={updateBoard} selectedBoardName={selectedBoardName} />
      <ProgressTask boards={boards} updateBoard={updateBoard} selectedBoardName={selectedBoardName}/>
      <CompletedTask boards={boards} updateBoard={updateBoard} selectedBoardName={selectedBoardName}/>
    </div>
  );
}

export default Board;
