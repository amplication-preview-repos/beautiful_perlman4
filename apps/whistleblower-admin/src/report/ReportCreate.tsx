import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { StatusTitle } from "../status/StatusTitle";

export const ReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
