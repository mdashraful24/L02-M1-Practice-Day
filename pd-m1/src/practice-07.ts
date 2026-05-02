// ! Union & intersection types


// Union (|)

type UserRole = 'admin' | 'manager' | 'user';

const getDashboard = (role: UserRole) => {
    if (role === "admin") {
        return "Admin Dashboard";
    } else if (role === "manager") {
        return "Manager Dashboard";
    } else {
        return "User Dashboard";
    }
};

getDashboard("admin");
getDashboard("guest");
getDashboard(123);


// Intersection (&)

type Employee = {
    id: number;
    name: string;
    phoneNo: string;
};

type Manager = {
    designation: string;
    teamSize: number;
};

type EmployeeManager = Employee & Manager

const MiltonShaheb: EmployeeManager = {
    id: 123,
    name: "Milton Shaheb",
    phoneNo: "01734567890",
    designation: "Employee & Manager",
    teamSize: 3
}
