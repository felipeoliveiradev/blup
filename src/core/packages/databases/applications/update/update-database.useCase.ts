import { IUseCase } from "core/common/interfaces/useCase.interface";
import { UpdateDatabaseOutput } from "./update-database.input.dto";
import { UpdateDatabaseInput } from "./update-database.output.dto";
import { IDatabaseRepository } from "../../infra/database.repository";

export class UpdateDatabaseUseCase
  implements IUseCase<UpdateDatabaseInput, UpdateDatabaseOutput>
{
  constructor(
    private databaseRepository: IDatabaseRepository<UpdateDatabaseInput, UpdateDatabaseOutput>,
  ) {}
  async execute(input: UpdateDatabaseInput): Promise<UpdateDatabaseOutput> {
    return await this.databaseRepository.update(input);
  }
}
