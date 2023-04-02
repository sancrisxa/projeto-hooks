// Componente
function Formulario({btnCadastrar, setNome, setIdade, setCidade, cadastrar, alterar, remover, cancelar, nome, idade, cidade}) {

    // Retorno
    return(
        <form>
            <input type='text' placeholder='nome' className='form-control' onChange={e => setNome(e.target.value)} value={nome} />
            <input type='text' placeholder='Idade' className='form-control' onChange={e => setIdade(e.target.value)} value={idade} />
            <input type='text' placeholder='Cidade' className='form-control' onChange={e => setCidade(e.target.value)} value={cidade} />

            {
                btnCadastrar
                ?
                <input type='button' value='cadastrar' className='btn btn-primary' onClick={cadastrar} />
                :
                <div>
                    <input type='button' value='Alterar' className='btn btn-secondary' onClick={alterar} />
                    <input type='button' value='Excluir' className='btn btn-danger' onClick={remover} />
                    <input type='button' value='Cancelar' className='btn btn-success'onClick={cancelar} />
                </div>
            }

            

        </form>
    );
}

// Exportar
export default Formulario