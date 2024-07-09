/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StatusWhereUniqueInput } from "./StatusWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { StatusUpdateInput } from "./StatusUpdateInput";

@ArgsType()
class UpdateStatusArgs {
  @ApiProperty({
    required: true,
    type: () => StatusWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StatusWhereUniqueInput)
  @Field(() => StatusWhereUniqueInput, { nullable: false })
  where!: StatusWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => StatusUpdateInput,
  })
  @ValidateNested()
  @Type(() => StatusUpdateInput)
  @Field(() => StatusUpdateInput, { nullable: false })
  data!: StatusUpdateInput;
}

export { UpdateStatusArgs as UpdateStatusArgs };