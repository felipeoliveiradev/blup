export class Component<P extends {} = {}> {
  constructor(props: P) {
    this.props = props;
  }
  readonly props: Readonly<P>;
  handle(): void {}
}