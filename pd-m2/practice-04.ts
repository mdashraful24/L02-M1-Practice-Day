interface Developer<T, B = null> {
    id: number;
    name: string;
    position: string;
    salary: number;
    address: {
        country: string;
        division: string;
        city: string;
        postalCode: string;
    };
    device: {
        name: string;
        brand: string;
        model: string;
        price: number;
    };
    othersData: T;
    bike?: B;
};

interface juniorDevOthersInfo {
    smartWatch: boolean;
    brand?: string;
    model?: string;
    price?: number;
    features?: {
        stopWatch: boolean;
        heartRate: boolean;
        stepCount: boolean;
    }
}

interface seniorDevOthersInfo {
    smartWatch: boolean;
    brand: string;
    model: string;
    price: number;
    features: {
        stopWatch: boolean;
        heartRate: boolean;
        stepCount: boolean;
        callSupport: boolean;
        cameraSupport: boolean;
    }
}

interface BikeInfo {
    name: string;
    brand: string;
    model: string;
    price: number;
    engineCapacity: string;
    mileage: number;
    features: {
        abs: boolean;
        discBrake: boolean;
        electricStart: boolean;
    }
}

const juniorDeveloper: Developer<juniorDevOthersInfo> = {
    id: 123,
    name: "Mr. X",
    position: "Junior Developer",
    salary: 15000,
    address: {
        country: "Bangladesh",
        division: "Dhaka",
        city: "Dhaka",
        postalCode: "DP1200"
    },
    device: {
        name: "Laptop",
        brand: "DCL",
        model: "DCL1234",
        price: 52000
    },
    othersData: {
        smartWatch: false
    },
    bike: null
};

const seniorDeveloper: Developer<seniorDevOthersInfo, BikeInfo> = {
    id: 123,
    name: "Mr. R",
    position: "Senior Developer",
    salary: 50000,
    address: {
        country: "Bangladesh",
        division: "Dhaka",
        city: "Dhaka",
        postalCode: "DP1200"
    },
    device: {
        name: "Laptop",
        brand: "MacBook",
        model: "MacBook Pro M2",
        price: 150000
    },
    othersData: {
        smartWatch: true,
        brand: "Apple",
        model: "Apple Watch Series 9",
        price: 50000,
        features: {
            stopWatch: true,
            heartRate: true,
            stepCount: true,
            callSupport: true,
            cameraSupport: false
        }
    },
    bike: {
        name: "R15",
        brand: "Yamaha",
        model: "V4",
        price: 550000,
        engineCapacity: "155cc",
        mileage: 40,
        features: {
            abs: true,
            discBrake: true,
            electricStart: true
        }
    }
};

console.log(juniorDeveloper);
console.log(seniorDeveloper);
