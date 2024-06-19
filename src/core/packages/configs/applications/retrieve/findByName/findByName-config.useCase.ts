import { IUseCase } from "core/common/interfaces/useCase.interface";
import { FindByNameConfigInput } from "./findByName-config.input.dto";
import { IConfigRepository } from "../../../infra/config.repository";
import { FindByNameConfigOutput } from "./findByName-config.output.dto";

export class FindByNameConfigUseCase
  implements IUseCase<FindByNameConfigInput, FindByNameConfigOutput>
{
  constructor(
    private configRepository: IConfigRepository<FindByNameConfigInput, FindByNameConfigOutput>,
  ) {}
  async execute(input: FindByNameConfigInput): Promise<FindByNameConfigOutput> {
    return await this.configRepository.findByName(input);
  }
}
 