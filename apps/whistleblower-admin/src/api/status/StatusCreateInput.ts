import { ReportCreateNestedManyWithoutStatusesInput } from "./ReportCreateNestedManyWithoutStatusesInput";

export type StatusCreateInput = {
  status?: string | null;
  reports?: ReportCreateNestedManyWithoutStatusesInput;
};
