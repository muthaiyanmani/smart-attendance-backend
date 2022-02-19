import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Body, Controller, HttpCode, Inject, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IStudentService } from "@infrastructure/database/student/i.student.service";
import { Student } from "@infrastructure/database/student/student.entity";
import { CreateStudentRequest } from "./create-student-request";

@ApiTags('students')
@Controller('students')
export class CreateStudentController {
    constructor(
        @Inject('IStudentService') private readonly studentService: IStudentService,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Post()
    @HttpCode(201)
    async execute(@Body() request: CreateStudentRequest): Promise<any> {

        const student = this.mapper.map(request, Student, CreateStudentRequest);
        const result = await this.studentService.insert(student);
        return {id:result.id};
    }
}