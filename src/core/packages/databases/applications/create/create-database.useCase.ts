import { IUseCase } from "../../../../../core/common/interfaces/useCase.interface";
import { CreateDatabaseInput } from "./create-database.input.dto";
import { CreateDatabaseOutput } from "./create-database.output.dto";
import { IDatabaseRepository } from "../../infra/database.repository";

export class CreateDatabaseUseCase
  implements IUseCase<CreateDatabaseInput, CreateDatabaseOutput>
{
  constructor(
    private databaseRepository: IDatabaseRepository<CreateDatabaseInput, CreateDatabaseOutput>,
  ) {}
  async execute(input: CreateDatabaseInput): Promise<CreateDatabaseOutput> {
    return await this.databaseRepository.create(input);
  }
}
