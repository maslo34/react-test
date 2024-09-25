import React from 'react';
import { useState } from 'react';

import iconDel from '../icons/icons_body_delete.png';

function Addtask({ handlerNewTaskClick }) {
  return (
    <>
      <input
        type="text"
        className="todo-input"
        placeholder="Add your items"
      ></input>
      <img
        src="https://icon-icons.com/downloadimage.php?id=81521&root=1154/PNG/48/&file=1486564407-plus-green_81521.png"
        alt="+"
        onClick={handlerNewTaskClick}
      ></img>
    </>
  );
}

function RenderTasks({ data, handlerCompleteTask, handlerDeleteTask }) {
  console.log('render', data);
  const listTask = data.map((task) => {
    const newClass = task.complete ? 'complete' : 'notComplete';
    return (
      <li
        className={newClass}
        key={task.id}
        data-id={task.id}
        onClick={handlerCompleteTask}
      >
        <p>{task.value}</p>
        <img src={iconDel} onClick={handlerDeleteTask}></img>
      </li>
    );
  });
  return <ul>{listTask}</ul>;
}

export default function ToDoList() {
  const [taskId, setTaskId] = useState(0);
  const [taskList, setTaskList] = useState([]);

  function createNewTask() {
    const input = document.querySelector('input');
    if (input.value.length === 0) {
      return;
    }
    const newTask = {
      value: input.value,
      id: taskId,
      complete: false,
    };
    setTaskId(taskId + 1);
    const newTaskList = [...taskList, newTask];
    setTaskList(newTaskList);
    input.value = '';
    input.focus()
  }

  function completeTask(e) {
    const completeTaskId = Number(e.target.dataset.id);
    const newTaskList = [...taskList];
    newTaskList.map((task) => {
      if (task.id === completeTaskId) {
        task.complete = !task.complete;
      }
    });
    setTaskList(newTaskList);
  }

  function changeTask() {}
  const op = {
    value: 'awfwaf',
    id: 4,
    complete: false,
  };
  function deleteTask(e) {
    const deleteTaskId = Number(e.target.parentElement.dataset.id);
    const copyTaskList = [...taskList];
    const newTaskList = copyTaskList.filter((task) => task.id !== deleteTaskId);
    console.log('new task', newTaskList);
    setTaskList(newTaskList);
  }
  return (
    <>
      <div className="todo-headen">
        <h2>ToDo List</h2>
        <img
          src="https://icon-icons.com/downloadimage.php?id=191634&root=3106/PNG/32/&file=test_tasks_list_clipboard_todo_icon_191634.png"
          alt=""
        ></img>
      </div>
      <div className="todo-body">
        <Addtask handlerNewTaskClick={createNewTask} />
      </div>
      <div className="tasks-list">
        <h5>SetAlertMessage</h5>
        {console.log('befor render', taskList)}
        <RenderTasks
          data={taskList}
          handlerCompleteTask={completeTask}
          handlerChangeTask={changeTask}
          handlerDeleteTask={deleteTask}
        />
      </div>
    </>
  );
}

// function Square({ value, onSquareClick }) {
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }

// function Board({ xIsNext, squares, onPlay }) {
//   function handleClick(i) {
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     if (xIsNext) {
//       nextSquares[i] = 'X';
//     } else {
//       nextSquares[i] = 'O';
//     }
//     onPlay(nextSquares);
//   }

//   const winner = calculateWinner(squares);
//   let status;
//   if (winner) {
//     status = 'Winner: ' + winner;
//   } else {
//     status = 'Next player: ' + (xIsNext ? 'X' : 'O');
//   }

//   return (
//     <>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//     </>
//   );
// }

// export default function Game() {
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const [currentMove, setCurrentMove] = useState(0);
//   const xIsNext = currentMove % 2 === 0;
//   const currentSquares = history[currentMove];

//   function handlePlay(nextSquares) {
//     const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
//     setHistory(nextHistory);
//     setCurrentMove(nextHistory.length - 1);
//   }

//   function jumpTo(nextMove) {
//     setCurrentMove(nextMove);
//   }

//   const moves = history.map((squares, move) => {
//     let description;
//     if (move > 0) {
//       description = 'Go to move #' + move;
//     } else {
//       description = 'Go to game start';
//     }
//     return (
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}>{description}</button>
//       </li>
//     );
//   });

//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
//       </div>
//       <div className="game-info">
//         <ol>{moves}</ol>
//       </div>
//     </div>
//   );
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }
