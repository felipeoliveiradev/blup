import { IUseCase } from "core/common/interfaces/useCase.interface";
import { DeleteSetupOutput } from "./delete-setup.input.dto";
import { DeleteSetupInput } from "./delete-setup.output.dto";
import { ISetupRepository } from "../../infra/setup.repository";

export class DeleteSetupUseCase
  implements IUseCase<DeleteSetupInput, DeleteSetupOutput>
{
  constructor(
    private setupRepository: ISetupRepository<DeleteSetupInput, DeleteSetupOutput>,
  ) {}
  async execute(input: DeleteSetupInput): Promise<DeleteSetupOutput> {
    return await this.setupRepository.delete(input);
  }
}
