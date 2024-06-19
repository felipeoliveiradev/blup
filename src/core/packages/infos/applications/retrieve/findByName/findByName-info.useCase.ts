import { IUseCase } from "core/common/interfaces/useCase.interface";
import { FindByNameInfoOutput } from "./findByName-info.input.dto";
import { FindByNameInfoInput } from "./findByName-info.output.dto";
import { IInfoRepository } from "../../../infra/info.repository";

export class FindByNameInfoUseCase
  implements IUseCase<FindByNameInfoInput, FindByNameInfoOutput>
{
  constructor(
    private infoRepository: IInfoRepository<FindByNameInfoInput, FindByNameInfoOutput>,
  ) {}
  async execute(input: FindByNameInfoInput): Promise<FindByNameInfoOutput> {
    return await this.infoRepository.findByName(input);
  }
}
 