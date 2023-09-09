-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Сен 09 2023 г., 11:27
-- Версия сервера: 10.4.27-MariaDB
-- Версия PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `logocentre`
--

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE `orders` (
  `id` int(128) NOT NULL,
  `name` varchar(128) NOT NULL,
  `surname` varchar(128) NOT NULL,
  `phone` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `orders`
--

INSERT INTO `orders` (`id`, `name`, `surname`, `phone`, `email`) VALUES
(1, 'dadasadasd', 'dadasadasd', 'dadasadasd', 'dadasadasd'),
(2, 'ddddddddddd', 'ddddddddddd', 'ddddddddddd', 'ddddddddddd'),
(3, 'ddddddddddd', 'ddddddddddd', 'ddddddddddd', 'ddddddddddd'),
(4, 'dddddddddddddddddd', 'dddddddddddddddddd', 'dddddddddddddddddd', 'dddddddddddddddddd'),
(5, 'dddddddddddddddddd', 'dddddddddddddddddd', 'dddddddddddddddddd', 'dddddddddddddddddd'),
(6, 'ddddddddddd', 'ddddddddddd', 'ddddddddddd', 'ddddddddddd'),
(7, 'dddddddddd', 'dddddddddd', 'dddddddddd', 'dddddddddd'),
(8, 'ddddddddddddd', 'ddddddddddddd', 'ddddddddddddd', 'ddddddddddddd'),
(9, 'ddddddddddddd', 'ddddddddddddd', 'ddddddddddddd', 'ddddddddddddd'),
(10, 'ddddddddddddd', 'ddddddddddddd', 'ddddddddddddd', 'ddddddddddddd'),
(11, '', '', '', ''),
(12, '', '', '', ''),
(13, '', '', '', ''),
(14, '', '', '', ''),
(15, '', '', '', ''),
(16, '', '', '', ''),
(17, '', '', '', ''),
(18, '', '', '', ''),
(19, '', '', '', ''),
(20, '', '', '', ''),
(21, '', '', '', ''),
(22, '', '', '', ''),
(23, '', '', '', ''),
(24, '', '', '', ''),
(25, '', '', '', ''),
(26, '', '', '', ''),
(27, 'fddsafsdfsdf', 'jhdfgj', 'jghjgdhfjg', 'gfdgdfsgdfsg'),
(28, 'вафывфывфы', 'вфывфывфы', 'вфывфы', 'вфывфывфы'),
(29, 'ывфывфывфы', 'ывфывфывфы', 'ывфывфывфы', 'ывфывфывфы');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(128) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
