import { Constructor } from "./mixin";

export function motorMixin<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    private _motor: string;

    constructor(...args: any[]) {
      super(...args);
      this._motor = "";
    }

    setMotor(motor: string): void {
      this._motor = motor;
    }

    getMotor(): string {
      return this._motor;
    }
  };
}
