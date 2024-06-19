import { IUseCase } from "core/common/interfaces/useCase.interface";
import { UpdateProjectInput } from "./update-project.input.dto";
import { UpdateProjectOutput } from "./update-project.output.dto";
import { IProjectRepository } from "../../infra/project.repository";

export class UpdateProjectUseCase
  implements IUseCase<UpdateProjectInput, UpdateProjectOutput>
{
  constructor(
    private projectRepository: IProjectRepository<UpdateProjectInput, UpdateProjectOutput>,
  ) {}
  async execute(input: UpdateProjectInput): Promise<UpdateProjectOutput> {
    return await this.projectRepository.update(input);
  }
}
