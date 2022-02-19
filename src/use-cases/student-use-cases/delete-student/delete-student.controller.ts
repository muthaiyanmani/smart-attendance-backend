import { Controller, Delete, HttpCode, HttpException, HttpStatus, Inject, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IStudentService } from "@infrastructure/database/student/i.student.service";

@ApiTags('students')
@Controller('students')
export class DeleteStudentController {
    constructor(
        @Inject('IStudentService') private readonly studentService: IStudentService,
    ) { }

    @Delete(':id')
    @HttpCode(204)
    async execute(@Param('id') id: string): Promise<void> {
        const isExists = await this.studentService.isExistsById(id);
        if (!isExists)
            throw new HttpException('Student Not Found', HttpStatus.BAD_REQUEST);

        await this.studentService.deleteById(id);
    }
}