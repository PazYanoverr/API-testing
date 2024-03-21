/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Task as PrismaTask,
  Comment as PrismaComment,
} from "@prisma/client";
import { Comment } from "../../comment/base/Comment";
import { Task } from "./Task";

export class TaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TaskCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskCountArgs>
  ): Promise<number> {
    return this.prisma.task.count(args);
  }

  async tasks<T extends Prisma.TaskFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskFindManyArgs>
  ): Promise<PrismaTask[]> {
    return this.prisma.task.findMany(args);
  }
  async task<T extends Prisma.TaskFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskFindUniqueArgs>
  ): Promise<PrismaTask | null> {
    return this.prisma.task.findUnique(args);
  }
  async createTask<T extends Prisma.TaskCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskCreateArgs>
  ): Promise<PrismaTask> {
    return this.prisma.task.create<T>(args);
  }
  async updateTask<T extends Prisma.TaskUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskUpdateArgs>
  ): Promise<PrismaTask> {
    return this.prisma.task.update<T>(args);
  }
  async deleteTask<T extends Prisma.TaskDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskDeleteArgs>
  ): Promise<PrismaTask> {
    return this.prisma.task.delete(args);
  }

  async findComments(
    parentId: string,
    args: Prisma.CommentFindManyArgs
  ): Promise<PrismaComment[]> {
    return this.prisma.task
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .comments(args);
  }
  async AddComment(args: Comment): Promise<Task> {
    throw new Error("Not implemented");
  }
  async TaskCompleted(args: number): Promise<Task> {
    throw new Error("Not implemented");
  }
}
