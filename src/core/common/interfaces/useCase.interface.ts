export interface IUseCase<IN, OUT> {
  execute(input: IN): Promise<OUT>;
}
