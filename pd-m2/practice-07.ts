const UserRoles = {
    admin: "admin",
    editor: "editor",
    viewer: "viewer"
} as const;

const canEdit = (role: keyof typeof UserRoles) => {
    if (role === UserRoles.admin || role === UserRoles.editor) {
        return true;
    } else return false;
};

const result = canEdit("admin");
console.log(result);
