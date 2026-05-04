type User = {
    id: number;
    name: string;
    address: {
        city: string;
    };
};

type ProductInfo = {
    brand: string;
}

const user: User = {
    id: 123,
    name: "Ratul",
    address: {
        city: "Dhaka"
    }
};

const product: ProductInfo = {
    brand: "HP"
};

const getPropertyFromObj = <K>(obj: K, key: keyof K) => {
    return obj[key];
};

const result1 = getPropertyFromObj(user, "name");

const result2 = getPropertyFromObj(product, "brand");

console.log(result1);
console.log(result2);
