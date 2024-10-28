package pe.edu.upeu.sysalmacen.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import pe.edu.upeu.sysalmacen.dtos.UsuarioDTO;
import pe.edu.upeu.sysalmacen.modelo.Usuario;

@Mapper(componentModel = "spring")
public interface UsuarioMapper extends GenericMapper<UsuarioDTO, Usuario> {

    @Mapping(target = "clave", ignore = true) // Significa que no mapeara la clave
    Usuario toEntityFromCADTO(UsuarioDTO.UsuarioCrearDto usuarioCrearDto);
}
