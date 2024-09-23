INSERT INTO `upeu_categoria` (`id_categoria`, `nombre`) VALUES
(1, 'Juvenil'),
(2, 'Adulto');

INSERT INTO `upeu_marca` (`id_marca`, `nombre`) VALUES
(1, 'Puma'),
(2, 'AdidasU');

INSERT INTO `upeu_unid_medida` (`id_unidad`, `nombre_medida`) VALUES
(1, 'Unidad');

INSERT INTO `upeu_producto` (`id_producto`, `nombre`, `pu`, `puold`, `stock`, `stockold`, `utilidad`, `id_categoria`, `id_marca`, `id_unidad`) VALUES
(1, 'Zapatilla', 300, 300, 12, 0, 10, 1, 1, 1);