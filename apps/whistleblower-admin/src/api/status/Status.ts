import { Report } from "../report/Report";

export type Status = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status: string | null;
  reports?: Array<Report>;
};
