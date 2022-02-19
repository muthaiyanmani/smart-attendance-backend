import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Controller, Get, HttpCode, HttpException, HttpStatus, Inject, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IStudentService } from "@infrastructure/database/student/i.student.service";
import { Student } from "@infrastructure/database/student/student.entity";
import { GetStudentResponse } from "./get-student-response";

@ApiTags('students')
@Controller('students')
export class GetStudentController {
    constructor(
        @Inject('IStudentService') private readonly studentService: IStudentService,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Get(':id')
    @HttpCode(200)
    async execute(@Param('id') id: string): Promise<GetStudentResponse> {
        const student = await this.studentService.findById(id);
        if(!student)
            throw new HttpException('Student Not Found',HttpStatus.BAD_REQUEST);
            
        const response = this.mapper.map(student, GetStudentResponse,Student );
        return response;
    }
}