import { Component }      from "../../../core/component";
import { GluegunToolbox } from "gluegun";
export class InitialHeadComponent extends Component<GluegunToolbox> {
  constructor(props: GluegunToolbox) { super(props) }
  handle(){
    const { print } = this.props;
    print.divider()
    print.info('Hello, we will start the project creation process.')
    print.info('To do this we need some information.')
    print.info('Please answer the questions below.')
    print.divider()
  }
}