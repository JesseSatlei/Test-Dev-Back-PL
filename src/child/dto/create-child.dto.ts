import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateChildDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    @IsNotEmpty()
    father_id: number;
}