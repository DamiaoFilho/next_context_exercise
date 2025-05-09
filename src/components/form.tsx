


export default function Form(){
    return(
        <div className="flex flex-col items-center bg-gray-500 rounded-md w-100 h-50">
            <h1 className="font-bold p-4">Faça seu cadastro!</h1>
            <form className="flex flex-col items-center gap-4 w-[75%] h-[100%] justify-around" action="">
                <input className="text-white border-white" type="text" placeholder="Nome" />
                <button 
                className="w-[100%] bg-green-500 p-2 rounded-md"    
                type="submit">Login</button>
            </form>
        </div>
    )
}