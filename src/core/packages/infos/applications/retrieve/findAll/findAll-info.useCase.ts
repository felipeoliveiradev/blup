import { IUseCase }          from "core/common/interfaces/useCase.interface";
import { FindAllInfoOutput } from "./findAll-info.input.dto";
import { FindAllInfoInput }  from "./findAll-info.output.dto";
import { IInfoRepository }   from "../../../infra/info.repository";

export class FindAllInfoUseCase
  implements IUseCase<FindAllInfoInput, FindAllInfoOutput>
{
  constructor(
    private infoRepository: IInfoRepository<FindAllInfoInput, FindAllInfoOutput>,
  ) {}
  async execute(input: FindAllInfoInput): Promise<FindAllInfoOutput> {
    return await this.infoRepository.findAll(input);
  }
}
