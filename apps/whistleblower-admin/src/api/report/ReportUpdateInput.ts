import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StatusWhereUniqueInput } from "../status/StatusWhereUniqueInput";

export type ReportUpdateInput = {
  title?: string | null;
  description?: string | null;
  reportedBy?: string | null;
  reportedAt?: Date | null;
  category?: CategoryWhereUniqueInput | null;
  status?: StatusWhereUniqueInput | null;
};
