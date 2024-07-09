import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  reportedBy?: SortOrder;
  reportedAt?: SortOrder;
  categoryId?: SortOrder;
  statusId?: SortOrder;
};
