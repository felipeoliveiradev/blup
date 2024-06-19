import { IUseCase } from "core/common/interfaces/useCase.interface";
import { UpdateBankInput } from "./update-bank.input.dto";
import { UpdateBankOutput } from "./update-bank.output.dto";
import { IBankRepository } from "../../infra/bank.repository";

export class UpdateBankUseCase
  implements IUseCase<UpdateBankInput, UpdateBankOutput>
{
  constructor(
    private bankRepository: IBankRepository<UpdateBankInput, UpdateBankOutput>,
  ) {}
  async execute(input: UpdateBankInput): Promise<UpdateBankOutput> {
    return await this.bankRepository.update(input);
  }
}
