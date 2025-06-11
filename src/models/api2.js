export class ApiRequest2 {
    static url = "http://localhost:3000/api"
    static token = localStorage.getItem("@token")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }
    static async login(data) {
        const user = await fetch(`${this.url}/clientes/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                localStorage.setItem("@token", res.token)
                localStorage.setItem("@id", res.cliente.id)
                setTimeout(() => window.location.replace("../../telaprincipal.html"))
            })
            .catch(err => console.log(err))
        return user
    }
}