package pe.edu.upeu.sysalmacen.servicio.impl;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.edu.upeu.sysalmacen.dtos.ProductoDTO;
import pe.edu.upeu.sysalmacen.mappers.ProductoMapper;
import pe.edu.upeu.sysalmacen.modelo.Categoria;
import pe.edu.upeu.sysalmacen.modelo.Marca;
import pe.edu.upeu.sysalmacen.modelo.Producto;
import pe.edu.upeu.sysalmacen.modelo.UnidadMedida;
import pe.edu.upeu.sysalmacen.repositorio.*;
import pe.edu.upeu.sysalmacen.servicio.IProductoService;

@Service
@Transactional
@RequiredArgsConstructor
public class ProductoServiceImp extends CrudGenericoServiceImp<Producto, Long> implements IProductoService {

    private final IProductoRepository repo;
    private final ProductoMapper productoMapper;
    private final ICategoriaRepository categoriaRepository;
    private final IMarcaRepository marcaRepository;
    private final IUnidadMedidaRepository unidadMedidaRepository;
    @Override
    protected ICrudGenericoRepository<Producto, Long> getRepo() {
        return repo;
    }


    @Override
    public ProductoDTO saveD(ProductoDTO.ProductoCADto dto) {
        Producto producto = productoMapper.toEntityFromCADTO(dto);

        Categoria categoria = categoriaRepository.findById(dto.categoria())
                .orElseThrow(() -> new EntityNotFoundException("Categoria no encontrada"));
        Marca marca = marcaRepository.findById(dto.marca())
                .orElseThrow(() -> new EntityNotFoundException("Marca no encontrada"));
        UnidadMedida unidadMedida = unidadMedidaRepository.findById(dto.unidadMedida())
                .orElseThrow(() -> new EntityNotFoundException("Unidad de medida no encontrada"));

        producto.setCategoria(categoria);
        producto.setMarca(marca);
        producto.setUnidadMedida(unidadMedida);

        Producto productoGuardado = repo.save(producto);
        return productoMapper.toDTO(productoGuardado);
    }

    @Override
    public ProductoDTO updateD(ProductoDTO.ProductoCADto dto, Long id) {
        Producto producto = repo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Producto no encontrado"));

        Producto productox = productoMapper.toEntityFromCADTO(dto);
        productox.setIdProducto(producto.getIdProducto());

        Categoria categoria = categoriaRepository.findById(dto.categoria())
                .orElseThrow(() -> new EntityNotFoundException("Categoria no encontrada"));
        Marca marca = marcaRepository.findById(dto.marca())
                .orElseThrow(() -> new EntityNotFoundException("Marca no encontrada"));
        UnidadMedida unidadMedida = unidadMedidaRepository.findById(dto.unidadMedida())
                .orElseThrow(() -> new EntityNotFoundException("Unidad de medida no encontrada"));

        productox.setCategoria(categoria);
        productox.setMarca(marca);
        productox.setUnidadMedida(unidadMedida);

        Producto productoActualizado = repo.save(productox);
        return productoMapper.toDTO(productoActualizado);
    }
}
