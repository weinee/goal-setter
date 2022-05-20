import React from "react";
import { useDispatch } from "react-redux";
import { FaTimes, FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { deleteGoal, updateGoal } from "../features/goals/goalSlice";

const GoalItem = ({ goal, handleCheck }) => {
  const dispatch = useDispatch();

  return (
    <div className={"goal"}>
      {goal && goal.status === "pending" ? (
        <FaRegCircle className={"check"} size={18} onClick={handleCheck} />
      ) : (
        <FaRegCheckCircle className={"check"} size={18} onClick={handleCheck} />
      )}
      {goal && goal.status === "pending" ? (
        <h2 className={"wordwrap"}>{goal.text}</h2>
      ) : (
        <h2 className={"wordwrap"}>
          <s>{goal.text}</s>
        </h2>
      )}
      <FaTimes
        className={"delete-goal"}
        size={18}
        onClick={() => dispatch(deleteGoal(goal._id))}
      />
    </div>
  );
};

export default GoalItem;
