import { Module } from '@nestjs/common';
import { ParserService } from './parser.service';

@Module({
  imports: [],
  providers: [ParserService],
  exports: [ParserService],
})
export class ParserModule {}
