import { IUseCase } from "core/common/interfaces/useCase.interface";
import { UpdateEntityInput } from "./update-entity.input.dto";
import { UpdateEntityOutput } from "./update-entity.output.dto";
import { IEntityRepository } from "../../infra/entity.repository";

export class UpdateEntityUseCase
  implements IUseCase<UpdateEntityInput, UpdateEntityOutput>
{
  constructor(
    private entityRepository: IEntityRepository<UpdateEntityInput, UpdateEntityOutput>,
  ) {}
  async execute(input: UpdateEntityInput): Promise<UpdateEntityOutput> {
    return await this.entityRepository.update(input);
  }
}
