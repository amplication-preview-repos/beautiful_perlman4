import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";

export type StatusWhereInput = {
  id?: StringFilter;
  status?: StringNullableFilter;
  reports?: ReportListRelationFilter;
};
