import { IUseCase } from "../../../../../core/common/interfaces/useCase.interface";
import { CreateInfoOutput } from "./create-info.input.dto";
import { CreateInfoInput } from "./create-info.output.dto";
import { IInfoRepository } from "../../infra/info.repository";

export class CreateInfoUseCase
  implements IUseCase<CreateInfoInput, CreateInfoOutput>
{
  constructor(
    private infoRepository: IInfoRepository<CreateInfoInput, CreateInfoOutput>,
  ) {}
  async execute(input: CreateInfoInput): Promise<CreateInfoOutput> {
    return await this.infoRepository.create(input);
  }
}
