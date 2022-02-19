import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Body, Controller, HttpCode, HttpException, HttpStatus, Inject, Param, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IStudentService } from "@infrastructure/database/student/i.student.service";
import { Student } from "@infrastructure/database/student/student.entity";
import { UpdateStudentRequest } from "./update-student-request";

@ApiTags('students')
@Controller('students')
export class UpdateStudentController {
    constructor(
        @Inject('IStudentService') private readonly studentService: IStudentService,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Put(':id')
    @HttpCode(204)
    async execute(@Param('id') id: string, @Body() request: UpdateStudentRequest): Promise<void> {
        const isExists = await this.studentService.isExistsById(id);
        if(!isExists)
            throw new HttpException('Student Not Found',HttpStatus.BAD_REQUEST);
            
        const student = this.mapper.map(request, Student, UpdateStudentRequest);
        student.setId(id);
        await this.studentService.updateById(id, student);
    }
}