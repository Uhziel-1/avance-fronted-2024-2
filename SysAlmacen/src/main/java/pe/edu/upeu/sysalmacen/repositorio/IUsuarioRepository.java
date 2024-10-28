package pe.edu.upeu.sysalmacen.repositorio;

import pe.edu.upeu.sysalmacen.modelo.Usuario;

import java.util.Optional;

public interface IUsuarioRepository extends ICrudGenericoRepository<Usuario, Long>{
    Optional<Usuario> findOneByUser(String user); // findOne quiere decir que solo retorne uno.
    // Optionla significa que puede ser null si no hay nada.
}