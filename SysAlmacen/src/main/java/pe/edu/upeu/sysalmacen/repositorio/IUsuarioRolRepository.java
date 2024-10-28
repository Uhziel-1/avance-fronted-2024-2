package pe.edu.upeu.sysalmacen.repositorio;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pe.edu.upeu.sysalmacen.modelo.UsuarioRol;
import pe.edu.upeu.sysalmacen.modelo.UsuarioRolPK;

import java.util.List;

public interface IUsuarioRolRepository extends ICrudGenericoRepository<UsuarioRol, UsuarioRolPK>{ // aquí tiene un id conjunto.
    @Query("SELECT ur FROM UsuarioRol ur WHERE ur.usuario.user = :user")//Consulta JPQL
    List<UsuarioRol> findOneByUsuarioUser(@Param("user") String user);

    /*
    @Query("""
    SELECT ur.usuario FROM UsuarioRol ur 
    WHERE ur.usuario.user = :user and ur.usuario.clave = :clave
    """)//Consulta JPQL
    Usuario login(@Param("user") String user, @Param("clave") String clave);

    @Query(value = """
    SELECT u.* FROM upeu_usuario_rol ur 
    INNER JOIN upeu_usuario u ON (ur.usuario_id=u.id_usuario) 
    WHERE u.user=:username AND u.clave=:clave
    """, nativeQuery = true)//Consulta JPQL
    Usuario loginOpt(@Param("username") String user, @Param("clave") String clave);
    */
}
