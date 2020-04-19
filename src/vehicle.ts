class Vehicle {
  constructor(private _maxCapacityInKilograms: number = 0) {}

  setMaxCapacity(capacityInKilograms: number): void {
    this._maxCapacityInKilograms = capacityInKilograms;
  }

  getMaxCapacity(): number {
    return this._maxCapacityInKilograms;
  }
}

export default Vehicle;
