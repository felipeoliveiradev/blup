import { IUseCase }         from "core/common/interfaces/useCase.interface";
import { DeleteInfoOutput } from "./delete-info.input.dto";
import { DeleteInfoInput }  from "./delete-info.output.dto";
import { IInfoRepository }  from "../../infra/info.repository";

export class DeleteInfoUseCase
  implements IUseCase<DeleteInfoInput, DeleteInfoOutput>
{
  constructor(
    private infoRepository: IInfoRepository<DeleteInfoInput, DeleteInfoOutput>,
  ) {}
  async execute(input: DeleteInfoInput): Promise<DeleteInfoOutput> {
    return await this.infoRepository.delete(input);
  }
}
