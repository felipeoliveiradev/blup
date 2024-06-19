import { CreateEntityInput } from "./create-entity.input.dto";
import { CreateEntityOutput } from "./create-entity.output.dto";
import { IEntityRepository } from "../../infra/entity.repository";
import { IUseCase } from "../../../../common/interfaces/useCase.interface";

export class CreateEntityUseCase
  implements IUseCase<CreateEntityInput, CreateEntityOutput>
{
  constructor(
    private EntityRepository: IEntityRepository<CreateEntityInput, CreateEntityOutput>,
  ) {}
  async execute(input: CreateEntityInput): Promise<CreateEntityOutput> {
    return await this.EntityRepository.create(input);
  }
}
