import { IUseCase } from "core/common/interfaces/useCase.interface";
import { FindByNameProjectInput } from "./findByName-project.input.dto";
import { FindByNameProjectOutput } from "./findByName-project.output.dto";
import { IProjectRepository } from "../../../infra/project.repository";

export class FindByNameProjectUseCase
  implements IUseCase<FindByNameProjectInput, FindByNameProjectOutput>
{
  constructor(
    private projectRepository: IProjectRepository<FindByNameProjectInput, FindByNameProjectOutput>,
  ) {}
  async execute(input: FindByNameProjectInput): Promise<FindByNameProjectOutput> {
    return await this.projectRepository.findByName(input);
  }
}
 