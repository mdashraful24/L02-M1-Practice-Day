type AreaOfNum = {
    height: number;
    width: number;
};

type AreaOfString = {
    height: string;
    width: string;
};

type Area<T> = {
    [key in keyof T]: T[key];
};

const area1: Area<{ height: string; width: string; }> = {
    height: "50",
    width: "40"
};
