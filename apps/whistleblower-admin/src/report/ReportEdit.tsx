import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { StatusTitle } from "../status/StatusTitle";

export const ReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="reportedBy" source="reportedBy" />
        <DateTimeInput label="reportedAt" source="reportedAt" />
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <ReferenceInput source="status.id" reference="Status" label="status">
          <SelectInput optionText={StatusTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
