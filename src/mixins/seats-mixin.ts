import { Constructor } from "./mixin.d";

export function seatsMixin<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    private _seats: number = 0;

    constructor(...args: any[]) {
      super(...args);
      this._seats = 0;
    }

    public setSeats(seats: number): void {
      this._seats = seats;
    }

    public getSeats(): number {
      return this._seats;
    }
  };
}
