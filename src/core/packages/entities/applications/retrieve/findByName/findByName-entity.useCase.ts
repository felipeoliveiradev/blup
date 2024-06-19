import { IUseCase } from "core/common/interfaces/useCase.interface";
import { FindByNameEntityInput } from "./findByName-entity.input.dto";
import { FindByNameEntityOutput } from "./findByName-entity.output.dto";
import { IEntityRepository } from "../../../infra/entity.repository";

export class FindByNameEntityUseCase
  implements IUseCase<FindByNameEntityInput, FindByNameEntityOutput>
{
  constructor(
    private entityRepository: IEntityRepository<FindByNameEntityInput, FindByNameEntityOutput>,
  ) {}
  async execute(input: FindByNameEntityInput): Promise<FindByNameEntityOutput> {
    return await this.entityRepository.findByName(input);
  }
}
 