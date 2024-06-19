import { IUseCase } from "core/common/interfaces/useCase.interface";
import { CreateSetupInput } from "./create-setup.input.dto";
import { CreateSetupOutput } from "./create-setup.output.dto";
import { ISetupRepository } from "../../infra/setup.repository";

export class CreateSetupUseCase
  implements IUseCase<CreateSetupInput, CreateSetupOutput>
{
  constructor(
    private SetupRepository: ISetupRepository<CreateSetupInput, CreateSetupOutput>,
  ) {}
  async execute(input: CreateSetupInput): Promise<CreateSetupOutput> {
    return await this.SetupRepository.create(input);
  }
}
