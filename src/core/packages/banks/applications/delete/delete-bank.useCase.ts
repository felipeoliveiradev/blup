import { IUseCase } from "core/common/interfaces/useCase.interface";
import { DeleteBankInput } from "./delete-bank.input.dto";
import { DeleteBankOutput } from "./delete-bank.output.dto";
import { IBankRepository } from "../../infra/bank.repository";

export class DeleteBankUseCase
  implements IUseCase<DeleteBankInput, DeleteBankOutput>
{
  constructor(
    private bankRepository: IBankRepository<DeleteBankInput, DeleteBankOutput>,
  ) {}
  async execute(input: DeleteBankInput): Promise<DeleteBankOutput> {
    return await this.bankRepository.delete(input);
  }
}
