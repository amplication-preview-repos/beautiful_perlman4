import { ReportUpdateManyWithoutStatusesInput } from "./ReportUpdateManyWithoutStatusesInput";

export type StatusUpdateInput = {
  status?: string | null;
  reports?: ReportUpdateManyWithoutStatusesInput;
};
