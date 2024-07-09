/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Report } from "./Report";
import { ReportCountArgs } from "./ReportCountArgs";
import { ReportFindManyArgs } from "./ReportFindManyArgs";
import { ReportFindUniqueArgs } from "./ReportFindUniqueArgs";
import { CreateReportArgs } from "./CreateReportArgs";
import { UpdateReportArgs } from "./UpdateReportArgs";
import { DeleteReportArgs } from "./DeleteReportArgs";
import { Category } from "../../category/base/Category";
import { Status } from "../../status/base/Status";
import { ReportService } from "../report.service";
@graphql.Resolver(() => Report)
export class ReportResolverBase {
  constructor(protected readonly service: ReportService) {}

  async _reportsMeta(
    @graphql.Args() args: ReportCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Report])
  async reports(@graphql.Args() args: ReportFindManyArgs): Promise<Report[]> {
    return this.service.reports(args);
  }

  @graphql.Query(() => Report, { nullable: true })
  async report(
    @graphql.Args() args: ReportFindUniqueArgs
  ): Promise<Report | null> {
    const result = await this.service.report(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Report)
  async createReport(@graphql.Args() args: CreateReportArgs): Promise<Report> {
    return await this.service.createReport({
      ...args,
      data: {
        ...args.data,

        category: args.data.category
          ? {
              connect: args.data.category,
            }
          : undefined,

        status: args.data.status
          ? {
              connect: args.data.status,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Report)
  async updateReport(
    @graphql.Args() args: UpdateReportArgs
  ): Promise<Report | null> {
    try {
      return await this.service.updateReport({
        ...args,
        data: {
          ...args.data,

          category: args.data.category
            ? {
                connect: args.data.category,
              }
            : undefined,

          status: args.data.status
            ? {
                connect: args.data.status,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Report)
  async deleteReport(
    @graphql.Args() args: DeleteReportArgs
  ): Promise<Report | null> {
    try {
      return await this.service.deleteReport(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Category, {
    nullable: true,
    name: "category",
  })
  async getCategory(
    @graphql.Parent() parent: Report
  ): Promise<Category | null> {
    const result = await this.service.getCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Status, {
    nullable: true,
    name: "status",
  })
  async getStatus(@graphql.Parent() parent: Report): Promise<Status | null> {
    const result = await this.service.getStatus(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}