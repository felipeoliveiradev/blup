import { Component }      from "../../../core/component";
import { GluegunToolbox } from "gluegun";
export class DatabaseHeadComponent extends Component<GluegunToolbox> {
  constructor(props: GluegunToolbox) { super(props) }
  handle(){
    const { print } = this.props;
    print.divider()
    print.info('We need some information')
    print.info('From your database.')
    print.info('Please answer the questions below.')
    print.divider()
  }
}