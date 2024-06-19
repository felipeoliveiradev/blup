import { IUseCase }         from "core/common/interfaces/useCase.interface";
import { UpdateInfoOutput } from "./update-info.input.dto";
import { UpdateInfoInput }  from "./update-info.output.dto";
import { IInfoRepository }  from "../../infra/info.repository";

export class UpdateInfoUseCase
  implements IUseCase<UpdateInfoInput, UpdateInfoOutput>
{
  constructor(
    private infoRepository: IInfoRepository<UpdateInfoInput, UpdateInfoOutput>,
  ) {}
  async execute(input: UpdateInfoInput): Promise<UpdateInfoOutput> {
    return await this.infoRepository.update(input);
  }
}
