import { Request, Response, NextFunction } from "express";
import prisma from "@/lib/client";
import CustomError from "@/utils/custom-error";

export const listGoals = async (req: Request, res: Response, next: NextFunction) => {
  const goals = await prisma.goals.findMany();

  if (goals.length === 0) {
    return next(new CustomError("No goals found!", 404));
  }

  return res.status(200).json(goals);
};

export const getGoal = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const goal = await prisma.goals.findUnique({ where: { id } });

  if (!goal) {
    return next(new CustomError(`No goals found with in ID of ${id} is found on the server`, 404));
  }

  return res.status(200).json(goal);
};

export const createGoal = async (req: Request, res: Response, next: NextFunction) => {
  const { text } = req.body;

  const newGoal = await prisma.goals.create({ data: { text } });

  return res.status(201).json(newGoal);
};

export const updateGoal = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { text } = req.body;

  const updatedGoal = await prisma.goals.update({
    where: { id },
    data: { text },
  });

  if (!updatedGoal) {
    return next(new CustomError(`No goals found with in ID of ${id} is found on the server`, 404));
  }

  res.status(200).json(updatedGoal);
};

export const deleteGoal = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const deletedGoal = await prisma.goals.delete({ where: { id } });

  if (!deletedGoal) {
    return next(new CustomError(`No goals found with in ID of ${id} is found on the server`, 404));
  }
  res.status(204).json(null);
};
