import { IUseCase } from "core/common/interfaces/useCase.interface";
import { FindByNameSetupInput } from "./findByName-setup.input.dto";
import { ISetupRepository } from "../../../infra/setup.repository";
import { FindByNameSetupOutput } from "./findByName-setup.output.dto";

export class FindByNameSetupUseCase
  implements IUseCase<FindByNameSetupInput, FindByNameSetupOutput>
{
  constructor(
    private setupRepository: ISetupRepository<FindByNameSetupInput, FindByNameSetupOutput>,
  ) {}
  async execute(input: FindByNameSetupInput): Promise<FindByNameSetupOutput> {
    return await this.setupRepository.findByName(input);
  }
}
 