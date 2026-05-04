type RichPeoplesVehicle = {
    bike: string;
    car: string;
    ship: string;
};

type CheckVehicle<T> = T extends keyof RichPeoplesVehicle ? true : false;

type HasBike = CheckVehicle<"bike">;
