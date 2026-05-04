const UserRoles = {
    admin: "Admin",
    editor: "EDITOR",
    viewer: "viewer"
} as const;

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
    if (role === UserRoles.admin || role === UserRoles.editor) {
        return true;
    } else return false;
};

const result = canEdit("Admin");
console.log(result);
