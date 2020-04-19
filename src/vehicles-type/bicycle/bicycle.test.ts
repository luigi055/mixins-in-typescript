import Bycicle from "./bicycle";
import Vehicle from "../../vehicle";

describe("Testing vehicle", () => {
  it("should be instance of Vehicle", () => {
    const bycicle = new Bycicle();

    expect(bycicle).toBeInstanceOf(Vehicle);
  });

  it("should set 4 wheels", () => {
    const vehicle = new Bycicle();

    vehicle.setWheels(1);

    expect(vehicle.getWheels()).toBe(1);
  });

  it("should set 1 seats", () => {
    const vehicle = new Bycicle();

    vehicle.setSeats(1);

    expect(vehicle.getSeats()).toBe(1);
  });
});
