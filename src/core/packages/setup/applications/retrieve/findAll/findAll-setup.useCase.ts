import { IUseCase } from "core/common/interfaces/useCase.interface";
import { FindAllSetupInput } from "./findAll-setup.input.dto";
import { FindAllSetupOutput } from "./findAll-setup.output.dto";
import { ISetupRepository } from "../../../infra/setup.repository";

export class FindAllSetupUseCase
  implements IUseCase<FindAllSetupInput, FindAllSetupOutput>
{
  constructor(
    private setupRepository: ISetupRepository<FindAllSetupInput, FindAllSetupOutput>,
  ) {}
  async execute(input: FindAllSetupInput): Promise<FindAllSetupOutput> {
    return await this.setupRepository.findAll(input);
  }
}
