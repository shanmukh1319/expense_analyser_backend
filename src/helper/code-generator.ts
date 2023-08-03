

export class CodeGenerator{
    getCode(prefix:string){
        try{
            let code = Math.random().toString().substr(2, 4)
            code = prefix+"-"+code
            return code
        }
        catch{

        }
    }
}