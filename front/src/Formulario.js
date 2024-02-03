function Formulario({botao, eventKeyboard, cadastrar, obj, cancelar, remover, alterar}){
    return (
       <form>
        <input type="text" value={obj.name} onChange={eventKeyboard} name='name' placeholder='Nome' className="form-control"/>
        <input type="text" value={obj.mark} onChange={eventKeyboard} name='mark' placeholder='Marca' className="form-control"/>
        
        {
            botao ? <input type ='button' value ='Cadastrar' onClick={cadastrar} className="btn btn-primary"/> : 
            <div>
            <input type ='button' value ='Alterar' className="btn btn-warning" onClick={alterar}/> 
            <input type ='button' value ='Remover' className="btn btn-danger" onClick={remover}/>
            <input type ='button' value ='Cancelar' className="btn btn-secondary" onClick={cancelar}/>  
            </div>
        }
       </form>
    )
}

export default Formulario