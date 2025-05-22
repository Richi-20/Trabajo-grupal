-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-05-2025 a las 17:13:36
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_correo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `correos`
--

CREATE TABLE `correos` (
  `id` int(11) NOT NULL,
  `emisor_id` int(11) DEFAULT NULL,
  `receptor_id` int(11) DEFAULT NULL,
  `asunto` varchar(200) DEFAULT NULL,
  `mensaje` text DEFAULT NULL,
  `estado` enum('borrador','enviado','pendiente','eliminado') DEFAULT 'pendiente',
  `leido` tinyint(1) DEFAULT 0,
  `fecha_envio` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `correos`
--

INSERT INTO `correos` (`id`, `emisor_id`, `receptor_id`, `asunto`, `mensaje`, `estado`, `leido`, `fecha_envio`) VALUES
(1, 1, 2, 'Hola, cómo estás?', 'Solo quería saludarte y saber cómo te va.', 'enviado', 1, '2025-05-22 10:00:00'),
(2, 2, 1, 'Re: Hola, cómo estás?', 'Gracias por el saludo, todo bien por aquí.', 'enviado', 0, '2025-05-22 11:00:00'),
(3, 1, 3, 'Recordatorio', 'No olvides la reunión del lunes.', 'pendiente', 0, '2025-05-21 16:30:00'),
(4, 3, 1, 'Borrador de mensaje', 'Este es un borrador, no enviado aún.', 'borrador', 0, '2025-05-20 14:15:00'),
(5, 2, 3, 'Saludos', 'Espero que estés bien.', 'eliminado', 0, '2025-05-19 09:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `contraseña` varchar(255) DEFAULT NULL,
  `rol` int(11) NOT NULL,
  `estado` enum('activo','suspendido') DEFAULT 'activo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `contraseña`, `rol`, `estado`) VALUES
(1, 'Juan Perez', 'juan@example.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 2, 'activo'),
(2, 'Maria Gomez', 'maria@example.com', '2aa60a8ff7fcd473d321e0146afd9e26df395147', 2, 'activo'),
(3, 'Carlos Diaz', 'carlos@example.com', '1119cfd37ee247357e034a08d844eea25f6fd20f', 1, 'activo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `correos`
--
ALTER TABLE `correos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `emisor_id` (`emisor_id`),
  ADD KEY `receptor_id` (`receptor_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `correos`
--
ALTER TABLE `correos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `correos`
--
ALTER TABLE `correos`
  ADD CONSTRAINT `correos_ibfk_1` FOREIGN KEY (`emisor_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `correos_ibfk_2` FOREIGN KEY (`receptor_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
