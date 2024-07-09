import { ReportCreateNestedManyWithoutCategoriesInput } from "./ReportCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  reports?: ReportCreateNestedManyWithoutCategoriesInput;
};
