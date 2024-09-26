import {
  createGoalController,
  deleteGoalController,
  getGoalController,
  listGoalController,
  updateGoalController,
} from "@/controllers/goals/goals.controller";
import { patchGoalSchema, postGoalSchema } from "@/schema/schema";
import validate from "@/validator/validate";
import { Router } from "express";

const goalRouter = Router();

goalRouter
  .route("/goals")
  .get(listGoalController)
  .post(validate(postGoalSchema), createGoalController);
goalRouter
  .route("/goals/:id")
  .get(getGoalController)
  .patch(validate(patchGoalSchema), updateGoalController)
  .delete(deleteGoalController);

export default goalRouter;
