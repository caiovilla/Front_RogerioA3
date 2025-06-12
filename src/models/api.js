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

    static async getProductClient(id){
        const search = await fetch(`${this.url}/produtos/cliente/${id}`,{
            method:"GET"
        })

        .then(res => res.json())
        .then(res =>{
            console.log(res)
            return res
        })
        .catch (err => console.log(err))
    
        return search
        
    }

    static async deleteProduct(id){
        const del = await fetch(`${this.url}/produtos/${id}`,{
            method:"DELETE"
        })

        .then(res=> res.json())
        .then(res=>{
            console.log(res)
            return res
        })
        .catch (err=> console.log(err))
        
        window.location.reload()
        return del
    }

}
