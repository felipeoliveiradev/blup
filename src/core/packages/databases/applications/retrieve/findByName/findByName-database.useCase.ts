import { IUseCase } from "core/common/interfaces/useCase.interface";
import { FindByNameDatabaseOutput } from "./findByName-database.input.dto";
import { FindByNameDatabaseInput } from "./findByName-database.output.dto";
import { IDatabaseRepository } from "../../../infra/database.repository";

export class FindByNameDatabaseUseCase
  implements IUseCase<FindByNameDatabaseInput, FindByNameDatabaseOutput>
{
  constructor(
    private databaseRepository: IDatabaseRepository<FindByNameDatabaseInput, FindByNameDatabaseOutput>,
  ) {}
  async execute(input: FindByNameDatabaseInput): Promise<FindByNameDatabaseOutput> {
    return await this.databaseRepository.findByName(input);
  }
}
 