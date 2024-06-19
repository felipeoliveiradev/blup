import { IUseCase } from "core/common/interfaces/useCase.interface";
import { UpdateSetupOutput } from "./update-setup.input.dto";
import { UpdateSetupInput } from "./update-setup.output.dto";
import { ISetupRepository } from "../../infra/setup.repository";

export class UpdateSetupUseCase
  implements IUseCase<UpdateSetupInput, UpdateSetupOutput>
{
  constructor(
    private setupRepository: ISetupRepository<UpdateSetupInput, UpdateSetupOutput>,
  ) {}
  async execute(input: UpdateSetupInput): Promise<UpdateSetupOutput> {
    return await this.setupRepository.update(input);
  }
}
