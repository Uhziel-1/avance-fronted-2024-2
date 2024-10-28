package pe.edu.upeu.sysalmacen.configuracion;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudinaryConfig {

    @Bean
    public Cloudinary cloudinary(){
        return new Cloudinary(ObjectUtils.asMap(
                "cloud_name","dypbvqgek",
                "api_key", "526984178693225",
                "api_secret", "dNsxhfiRwawOWSBYlY9Zview5bs"
        ));
    }

}