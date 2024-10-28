package pe.edu.upeu.sysalmacen.control;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.upeu.sysalmacen.dtos.report.ProdMasVendidosDTO;
import pe.edu.upeu.sysalmacen.servicio.IProductoService;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/reporte")
public class ReportController {
    private final IProductoService productoService;

    //private final IMediaFileService mfService;
    //private final Cloudinary cloudinary;
    @GetMapping("/pmvendidos")
    public List<ProdMasVendidosDTO> getProductosMasVendidos() {
        return productoService.obtenerProductosMasVendidos();
    }

    @GetMapping(value = "/generateReport", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    //APPLICATION_PDF_VALUE APPLICATION_OCTET_STREAM_VALUE
    public ResponseEntity<byte[]> generateReport() throws Exception{
        byte[] data = productoService.generateReport();
        return ResponseEntity.ok(data);
        /*return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"reporte.pdf\"")
        .contentType(MediaType.APPLICATION_PDF)
        .body(data);*/
    }
}
