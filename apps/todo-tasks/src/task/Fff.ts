import { ApiProperty } from "@nestjs/swagger";
import { CommentCreateInput } from "../comment/base/CommentCreateInput";
import { Type } from "class-transformer";

class Fff {
    @ApiProperty({
        required: true,
        type: () => CommentCreateInput
    })
    @Type(() => CommentCreateInput)
    dfdf!: CommentCreateInput;

    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    sdfsdf!: string;
}

export { Fff as Fff };