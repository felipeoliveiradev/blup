import { IUseCase } from "core/common/interfaces/useCase.interface";
import { CreateConfigInput } from "./create-config.input.dto";
import { CreateConfigOutput } from "./create-config.output.dto";
import { IConfigRepository } from "../../infra/config.repository";

export class CreateConfigUseCase
  implements IUseCase<CreateConfigInput, CreateConfigOutput>
{
  constructor(
    private ConfigRepository: IConfigRepository<CreateConfigInput, CreateConfigOutput>,
  ) {}
  async execute(input: CreateConfigInput): Promise<CreateConfigOutput> {
    return await this.ConfigRepository.create(input);
  }
}
