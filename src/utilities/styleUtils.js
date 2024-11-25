export const getDepartmentClass = (dept) => {
    switch (dept) {
        case "Web Development":
            return "web";
        case "Game Development":
            return "game";
        default:
            return "default";
    }
};