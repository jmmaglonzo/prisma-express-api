import asyncHandler from "@/utils/async-handler";
import {
  createGoal,
  deleteGoal,
  getGoal,
  listGoals,
  updateGoal,
} from "@/services/goals/goals.service";

export const listGoalController = asyncHandler(listGoals);

export const getGoalController = asyncHandler(getGoal);

export const createGoalController = asyncHandler(createGoal);

export const updateGoalController = asyncHandler(updateGoal);

export const deleteGoalController = asyncHandler(deleteGoal);
