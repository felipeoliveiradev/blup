import { IUseCase } from "core/common/interfaces/useCase.interface";
import { CreateBankInput } from "./create-bank.input.dto";
import { CreateBankOutput } from "./create-bank.output.dto";
import { IBankRepository } from "../../infra/bank.repository";

export class CreateBankUseCase
  implements IUseCase<CreateBankInput, CreateBankOutput>
{
  constructor(
    private bankRepository: IBankRepository<CreateBankInput, CreateBankOutput>,
  ) {}
  async execute(input: CreateBankInput): Promise<CreateBankOutput> {
    return await this.bankRepository.create(input);
  }
}
