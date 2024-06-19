import { IUseCase } from "core/common/interfaces/useCase.interface";
import { FindAllEntityInput } from "./findAll-entity.input.dto";
import { FindAllEntityOutput } from "./findAll-entity.output.dto";
import { IEntityRepository } from "../../../infra/entity.repository";

export class FindAllEntityUseCase
  implements IUseCase<FindAllEntityInput, FindAllEntityOutput>
{
  constructor(
    private entityRepository: IEntityRepository<FindAllEntityInput, FindAllEntityOutput>,
  ) {}
  async execute(input: FindAllEntityInput): Promise<FindAllEntityOutput> {
    return await this.entityRepository.findAll(input);
  }
}
