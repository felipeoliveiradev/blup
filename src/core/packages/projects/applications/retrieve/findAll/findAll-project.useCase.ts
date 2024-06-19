import { IUseCase } from "core/common/interfaces/useCase.interface";
import { FindAllProjectInput } from "./findAll-project.input.dto";
import { FindAllProjectOutput } from "./findAll-project.output.dto";
import { IProjectRepository } from "../../../infra/project.repository";

export class FindAllProjectUseCase
  implements IUseCase<FindAllProjectInput, FindAllProjectOutput>
{
  constructor(
    private projectRepository: IProjectRepository<FindAllProjectInput, FindAllProjectOutput>,
  ) {}
  async execute(input: FindAllProjectInput): Promise<FindAllProjectOutput> {
    return await this.projectRepository.findAll(input);
  }
}
