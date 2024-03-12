import ActionEvent from "./ActionEvent";

export default interface ActionListener {
  actionPerformed(event: ActionEvent): void;
}
