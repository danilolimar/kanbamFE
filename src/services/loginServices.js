export const loginService = (user) => {
    if (user.user === "admin") {
        return {status: 200, data: {nivel: 0, name: "Nome Admin"}}
    }
    else if (user.user === "supervisor") {
        return {status: 200, data: {nivel: 1, name: "Nome Supervisor"}}
    }
    else if (user.user === "colaborador") {
        return {status: 200, data: {nivel: 2, name: "Nome Colaborador"}}
    }
    else {
        const retorno = {
            status: 404,
            message: "Usuário/Senha não conferem"
        }
        return retorno
    }
}