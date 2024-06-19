import { IUseCase } from "core/common/interfaces/useCase.interface";
import { DeleteEntityInput } from "./delete-entity.input.dto";
import { DeleteEntityOutput } from "./delete-entity.output.dto";
import { IEntityRepository } from "../../infra/entity.repository";

export class DeleteEntityUseCase
  implements IUseCase<DeleteEntityInput, DeleteEntityOutput>
{
  constructor(
    private entityRepository: IEntityRepository<DeleteEntityInput, DeleteEntityOutput>,
  ) {}
  async execute(input: DeleteEntityInput): Promise<DeleteEntityOutput> {
    return await this.entityRepository.delete(input);
  }
}
