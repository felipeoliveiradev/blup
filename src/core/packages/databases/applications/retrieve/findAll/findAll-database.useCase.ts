import { IUseCase } from "core/common/interfaces/useCase.interface";
import { FindAllDatabaseOutput } from "./findAll-database.input.dto";
import { FindAllDatabaseInput } from "./findAll-database.output.dto";
import { IDatabaseRepository } from "../../../infra/database.repository";

export class FindAllDatabaseUseCase
  implements IUseCase<FindAllDatabaseInput, FindAllDatabaseOutput>
{
  constructor(
    private databaseRepository: IDatabaseRepository<FindAllDatabaseInput, FindAllDatabaseOutput>,
  ) {}
  async execute(input: FindAllDatabaseInput): Promise<FindAllDatabaseOutput> {
    return await this.databaseRepository.findAll(input);
  }
}
