import { IUseCase } from "core/common/interfaces/useCase.interface";
import { CreateProjectInput } from "./create-project.input.dto";
import { IProjectRepository } from "../../infra/project.repository";
import { CreateProjectOutput } from "./create-project.output.dto";

export class CreateProjectUseCase
  implements IUseCase<CreateProjectInput, CreateProjectOutput>
{
  constructor(
    private projectRepository: IProjectRepository<CreateProjectInput, CreateProjectOutput>,
  ) {}
  async execute(input: CreateProjectInput): Promise<CreateProjectOutput> {
    return await this.projectRepository.create(input);
  }
}
