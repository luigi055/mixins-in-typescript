import Car from "./car";
import Vehicle from "../../vehicle";

describe("Testing vehicle", () => {
  it("should set the max capacity to 400 kilograms", () => {
    const car = new Car(400);

    expect(car.getMaxCapacity()).toBe(400);
  });
  it("should be instance of Vehicle", () => {
    const car = new Car();

    expect(car).toBeInstanceOf(Vehicle);
  });

  it("should set 4 wheels", () => {
    const vehicle = new Car();

    vehicle.setWheels(4);

    expect(vehicle.getWheels()).toBe(4);
  });

  it("should set 4 seats", () => {
    const vehicle = new Car();

    vehicle.setSeats(4);

    expect(vehicle.getSeats()).toBe(4);
  });

  it("should set the motor type", () => {
    const car = new Car();

    car.setMotor("1200cc");

    expect(car.getMotor()).toBe("1200cc");
  });
});
