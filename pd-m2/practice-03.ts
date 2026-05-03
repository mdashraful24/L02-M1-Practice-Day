type GenericArray<T> = Array<T>;

const userList: GenericArray<({ name: string, age: number })> = [
    {
        name: "Ratul",
        age: 25
    },
    {
        name: "Men",
        age: 30
    }
];