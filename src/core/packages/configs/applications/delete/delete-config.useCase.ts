import { IUseCase } from "core/common/interfaces/useCase.interface";
import { DeleteConfigOutput } from "./delete-config.input.dto";
import { DeleteConfigInput } from "./delete-config.output.dto";
import { IConfigRepository } from "../../infra/config.repository";

export class DeleteConfigUseCase
  implements IUseCase<DeleteConfigInput, DeleteConfigOutput>
{
  constructor(
    private configRepository: IConfigRepository<DeleteConfigInput, DeleteConfigOutput>,
  ) {}
  async execute(input: DeleteConfigInput): Promise<DeleteConfigOutput> {
    return await this.configRepository.delete(input);
  }
}
