package pe.edu.upeu.sysalmacen.servicio;

import pe.edu.upeu.sysalmacen.dtos.ProductoDTO;
import pe.edu.upeu.sysalmacen.modelo.Producto;

public interface IProductoService extends ICrudGenericoService<Producto, Long>{
    ProductoDTO saveD(ProductoDTO.ProductoCADto dto);

    ProductoDTO updateD(ProductoDTO.ProductoCADto dto, Long id);
}
