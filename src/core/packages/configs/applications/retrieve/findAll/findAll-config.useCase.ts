import { IUseCase } from "core/common/interfaces/useCase.interface";
import { FindAllConfigInput } from "./findAll-config.input.dto";
import { FindAllConfigOutput } from "./findAll-config.output.dto";
import { IConfigRepository } from "../../../infra/config.repository";

export class FindAllConfigUseCase
  implements IUseCase<FindAllConfigInput, FindAllConfigOutput>
{
  constructor(
    private configRepository: IConfigRepository<FindAllConfigInput, FindAllConfigOutput>,
  ) {}
  async execute(input: FindAllConfigInput): Promise<FindAllConfigOutput> {
    return await this.configRepository.findAll(input);
  }
}
