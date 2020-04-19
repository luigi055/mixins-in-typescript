import { Constructor } from "./mixin.d";

export function wheelsMixin<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    private _wheels: number;

    constructor(...args: any[]) {
      super(...args);
      this._wheels = 0;
    }

    setWheels(wheels: number): void {
      this._wheels = wheels;
    }
    getWheels(): number {
      return this._wheels;
    }
  };
}
