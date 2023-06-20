export let p = []

export function setMenu(permissions) {
    if (!permissions || !permissions.length) {
        let user = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : {}
        permissions = user.permission
    }
    permissions.forEach(v => { v.path = "/manage" + v.path })
    p = permissions
}
