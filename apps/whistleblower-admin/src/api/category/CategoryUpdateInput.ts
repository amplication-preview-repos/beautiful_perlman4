import { ReportUpdateManyWithoutCategoriesInput } from "./ReportUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  reports?: ReportUpdateManyWithoutCategoriesInput;
};
