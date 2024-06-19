import { IUseCase } from "core/common/interfaces/useCase.interface";
import { FindAllModuleInput } from "./findAll-module.input.dto";
import { FindAllModuleOutput } from "./findAll-module.output.dto";
import { IModuleRepository } from "../../../infra/module.repository";

export class FindAllModuleUseCase
  implements IUseCase<FindAllModuleInput, FindAllModuleOutput>
{
  constructor(
    private moduleRepository: IModuleRepository<FindAllModuleInput, FindAllModuleOutput>,
  ) {}
  async execute(input: FindAllModuleInput): Promise<FindAllModuleOutput> {
    return await this.moduleRepository.findAll(input);
  }
}
