export class ApiRequest{
    static url = "http://localhost:3000/api"
    static token = localStorage.getItem("@token")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }
    static async userRegister(data){
        const response = await fetch(`${this.url}/clientes/register`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)
        })
        const newUser = await response.json()
        setTimeout(()=>{
            window.location.replace("../../index.html")

        }, 1000)
        return newUser
    } 
}