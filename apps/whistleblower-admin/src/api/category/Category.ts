import { Report } from "../report/Report";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  reports?: Array<Report>;
};
