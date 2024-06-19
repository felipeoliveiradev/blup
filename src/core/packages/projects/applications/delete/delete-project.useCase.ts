import { IUseCase } from "core/common/interfaces/useCase.interface";
import { DeleteProjectInput } from "./delete-project.input.dto";
import { DeleteProjectOutput } from "./delete-project.output.dto";
import { IProjectRepository } from "../../infra/project.repository";

export class DeleteProjectUseCase
  implements IUseCase<DeleteProjectInput, DeleteProjectOutput>
{
  constructor(
    private projectRepository: IProjectRepository<DeleteProjectInput, DeleteProjectOutput>,
  ) {}
  async execute(input: DeleteProjectInput): Promise<DeleteProjectOutput> {
    return await this.projectRepository.delete(input);
  }
}
