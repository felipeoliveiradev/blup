import { IUseCase } from "core/common/interfaces/useCase.interface";
import { FindByNameBankInput } from "./findByName-bank.input.dto";
import { FindByNameBankOutput } from "./findByName-bank.output.dto";
import { IBankRepository } from "../../../infra/bank.repository";

export class FindByNameBankUseCase
  implements IUseCase<FindByNameBankInput, FindByNameBankOutput>
{
  constructor(
    private bankRepository: IBankRepository<FindByNameBankInput, FindByNameBankOutput>,
  ) {}
  async execute(input: FindByNameBankInput): Promise<FindByNameBankOutput> {
    return await this.bankRepository.findByName(input);
  }
}
 