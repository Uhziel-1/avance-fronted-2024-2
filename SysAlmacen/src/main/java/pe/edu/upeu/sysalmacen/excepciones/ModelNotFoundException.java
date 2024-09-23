package pe.edu.upeu.sysalmacen.excepciones;

public class ModelNotFoundException extends RuntimeException{
    public ModelNotFoundException(String message) {
        super(message);
    }
}