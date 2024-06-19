import { IUseCase } from "core/common/interfaces/useCase.interface";
import { FindByNameModuleInput } from "./findByName-module.input.dto";
import { IModuleRepository } from "../../../infra/module.repository";
import { FindByNameModuleOutput } from "./findByName-module.output.dto";

export class FindByNameModuleUseCase
  implements IUseCase<FindByNameModuleInput, FindByNameModuleOutput>
{
  constructor(
    private moduleRepository: IModuleRepository<FindByNameModuleInput, FindByNameModuleOutput>,
  ) {}
  async execute(input: FindByNameModuleInput): Promise<FindByNameModuleOutput> {
    return await this.moduleRepository.findByName(input);
  }
}
 