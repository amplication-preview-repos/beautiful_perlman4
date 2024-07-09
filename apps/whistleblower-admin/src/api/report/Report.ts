import { Category } from "../category/Category";
import { Status } from "../status/Status";

export type Report = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  reportedBy: string | null;
  reportedAt: Date | null;
  category?: Category | null;
  status?: Status | null;
};
