//CRIANDO CLASSE LIVRO
class Livro {
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade = true

    constructor (titulo, autor, editora, anoDePublicacao) {
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoDePublicacao = anoDePublicacao
    }

}

//CRIANDO OBJETO DA CLASSE LIVRO
let livros = []
livros.push(new Livro("livro1", "marcos", "editora A", 2001))
livros.push(new Livro("livro2", "Fábio", "editora F", 1997))
livros.push(new Livro("livro3", "marcos", "editora F", 2010))
livros.push(new Livro("livro4", "Carlos", "editora A", 2005))
livros.push(new Livro("livro5", "João", "editora C", 2020))

class Biblioteca {
    Nome
    Endereco
    Telefone
    AcervoLivros = []
    constructor (nome, endereco,telefone, acervo) {
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone
        this.AcervoLivros = acervo
    }

    BuscarLivroPeloTitulo(titulo) {
       for(let i = 0; i < this.AcervoLivros.length; i++) {
        if(titulo === this.AcervoLivros[i].Titulo) {
            return this.AcervoLivros[i];
        }
       }
    }

    EmprestarLivro(titulo) {
        let emprestado = false
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                if (livro.Disponibilidade == true) {
                    livro.Disponibilidade = false
                    emprestado = true
                }
            }
        })
        if (emprestado) {
            return true
        } else {
            return false
        }
    }

    DevolverLivro(titulo) {
        livros.forEach(livro => {
            if (livro.Titulo == titulo) {
                livro.Disponibilidade = true
                console.log("Livro devolvido")
            }
        })
    }
    
}

let biblioteca = new Biblioteca("Biblioteca DoDev", "123456", "Rua 2", livros) 


biblioteca.BuscarLivroPeloTitulo("Livro2")
biblioteca.EmprestarLivro("livro1")
biblioteca.DevolverLivro("livro1")

