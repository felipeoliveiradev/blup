import { IUseCase } from "core/common/interfaces/useCase.interface";
import { FindAllBankInput } from "./findAll-bank.input.dto";
import { FindAllBankOutput } from "./findAll-bank.output.dto";
import { IBankRepository } from "../../../infra/bank.repository";

export class FindAllBankUseCase
  implements IUseCase<FindAllBankInput, FindAllBankOutput>
{
  constructor(
    private bankRepository: IBankRepository<FindAllBankInput, FindAllBankOutput>,
  ) {}
  async execute(input: FindAllBankInput): Promise<FindAllBankOutput> {
    return await this.bankRepository.findAll(input);
  }
}
