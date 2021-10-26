import { IsNotEmpty, IsString } from "class-validator";

export class CreateFatherDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}
