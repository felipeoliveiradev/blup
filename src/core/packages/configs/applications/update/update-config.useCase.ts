import { IUseCase } from "core/common/interfaces/useCase.interface";
import { UpdateConfigOutput } from "./update-config.input.dto";
import { UpdateConfigInput } from "./update-config.output.dto";
import { IConfigRepository } from "../../infra/config.repository";

export class UpdateConfigUseCase
  implements IUseCase<UpdateConfigInput, UpdateConfigOutput>
{
  constructor(
    private configRepository: IConfigRepository<UpdateConfigInput, UpdateConfigOutput>,
  ) {}
  async execute(input: UpdateConfigInput): Promise<UpdateConfigOutput> {
    return await this.configRepository.update(input);
  }
}
