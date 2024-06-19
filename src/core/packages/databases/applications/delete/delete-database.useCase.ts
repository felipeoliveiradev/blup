import { IUseCase } from "core/common/interfaces/useCase.interface";
import { DeleteDatabaseOutput } from "./delete-database.input.dto";
import { DeleteDatabaseInput } from "./delete-database.output.dto";
import { IDatabaseRepository } from "../../infra/database.repository";

export class DeleteDatabaseUseCase
  implements IUseCase<DeleteDatabaseInput, DeleteDatabaseOutput>
{
  constructor(
    private databaseRepository: IDatabaseRepository<DeleteDatabaseInput, DeleteDatabaseOutput>,
  ) {}
  async execute(input: DeleteDatabaseInput): Promise<DeleteDatabaseOutput> {
    return await this.databaseRepository.delete(input);
  }
}
