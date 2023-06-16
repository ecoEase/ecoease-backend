-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2023 at 05:43 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `order_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` varchar(255) NOT NULL,
  `name` text DEFAULT NULL,
  `detail` text DEFAULT NULL,
  `district` text DEFAULT NULL,
  `city` text DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `selected` tinyint(1) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `name`, `detail`, `district`, `city`, `user_id`, `selected`, `deleted`, `created_at`, `updated_at`) VALUES
('3a627376-b4da-45af-9454-d982ccd4d106', 'asdasdqwe', 'asdad', 'asdasd', 'zasdasd', 'test-user', 1, 1, '2023-06-08 15:19:07', '2023-06-10 06:33:59'),
('44b78a1e-bb5e-4580-91de-e3fece4ddcdd', 'qweqwe', 'qweqwe', 'qweqwe', 'qweqwe', 'test-user', 0, 0, '2023-06-08 14:06:59', '2023-06-10 06:33:59'),
('4c5b0dd2-e5b3-4e2b-96eb-a90d505978a5', 'test', 'test', 'test', 'test', 'test-user', 0, 1, '2023-06-07 02:54:20', '2023-06-10 06:33:59');

-- --------------------------------------------------------

--
-- Table structure for table `chatrooms`
--

CREATE TABLE `chatrooms` (
  `id` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `mitra_id` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chatrooms`
--

INSERT INTO `chatrooms` (`id`, `user_id`, `mitra_id`, `created_at`, `updated_at`) VALUES
('0b6ce3c5-a7e3-4d80-8566-29491f22bb8d', 'test-user', '815d6dbe-03d5-4642-b9bb-5e9defc7ff24', '2023-06-10 05:51:52', '2023-06-10 05:51:52'),
('5094cfaf-5468-42b4-a288-9485eb7f9fd5', 'test-user', '815d6dbe-03d5-4642-b9bb-5e9defc7ff24', '2023-06-09 14:48:58', '2023-06-09 14:48:58');

-- --------------------------------------------------------

--
-- Table structure for table `detailtransactions`
--

CREATE TABLE `detailtransactions` (
  `garbage_id` varchar(255) NOT NULL,
  `order_id` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL,
  `total` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `detailtransactions`
--

INSERT INTO `detailtransactions` (`garbage_id`, `order_id`, `qty`, `total`, `created_at`, `updated_at`) VALUES
('91c63fc4-4811-45f5-8141-0c345d79aed9', 'dcc2e120-5947-414a-95b8-c1b475f3b32e', 1, 400, '2023-06-07 02:54:40', '2023-06-07 02:54:40'),
('c74667de-9ec4-41b5-8584-9e1ad8967b95', 'dcc2e120-5947-414a-95b8-c1b475f3b32e', 1, 200, '2023-06-07 02:54:40', '2023-06-07 02:54:40'),
('91c63fc4-4811-45f5-8141-0c345d79aed9', '53084034-738a-4a4d-9f80-c46a9b5561ba', 1, 400, '2023-06-08 09:51:02', '2023-06-08 09:51:02'),
('91c63fc4-4811-45f5-8141-0c345d79aed9', 'adb6caf8-b18d-4abd-b3d0-e0710d6d2bb9', 1, 400, '2023-06-08 10:09:07', '2023-06-08 10:09:07');

-- --------------------------------------------------------

--
-- Table structure for table `garbages`
--

CREATE TABLE `garbages` (
  `id` varchar(255) NOT NULL,
  `type` text NOT NULL,
  `price` bigint(20) NOT NULL,
  `url_photo` text NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `garbages`
--

INSERT INTO `garbages` (`id`, `type`, `price`, `url_photo`, `created_at`, `updated_at`) VALUES
('2d860bdd-689d-4f78-8d1a-cc6ec0474f0b', 'Sampah Kaca', 350, 'https://just-zero.org/wp-content/uploads/2023/05/shutterstock_1915276312.jpg', '2023-06-07 02:20:39', '2023-06-07 02:20:39'),
('91c63fc4-4811-45f5-8141-0c345d79aed9', 'Sampah Metal', 400, 'https://thumbs.dreamstime.com/z/group-recycling-tins-cans-sample-trash-tin-can-be-recycled-232205994.jpg', '2023-06-07 02:15:32', '2023-06-07 02:15:32'),
('b4f83114-c285-4e10-a6a8-9e42129e48d6', 'Sampah Karton', 100, 'https://blog.cuyahogarecycles.org/wp-content/uploads/2018/11/cardboard_mainpost.jpg', '2023-06-07 02:12:22', '2023-06-07 02:12:22'),
('c74667de-9ec4-41b5-8584-9e1ad8967b95', 'Sampah Plastik', 200, 'https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/3/1/7/522317_gettyimages1325351577_726342.jpg', '2023-06-07 02:13:43', '2023-06-07 02:13:43');

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `id` varchar(255) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`id`, `latitude`, `longitude`, `created_at`, `updated_at`) VALUES
('6fd90216-3d8d-4546-a3ee-2c7e396d1e34', -7.9612583, 112.6173917, '2023-06-08 10:09:07', '2023-06-08 10:09:07'),
('9df29858-fbd2-4854-a0a1-f31661f6a57b', -7.9612583, 112.6173917, '2023-06-08 09:51:02', '2023-06-08 09:51:02'),
('b9296351-98cc-462c-83d3-1fe0f0388c28', -7.9612583, 112.6173917, '2023-06-07 02:54:40', '2023-06-07 02:54:40');

-- --------------------------------------------------------

--
-- Table structure for table `mitras`
--

CREATE TABLE `mitras` (
  `id` varchar(255) NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `email` text NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `password` text NOT NULL,
  `url_photo_profile` text NOT NULL,
  `fcm_token` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mitras`
--

INSERT INTO `mitras` (`id`, `first_name`, `last_name`, `email`, `phone_number`, `password`, `url_photo_profile`, `fcm_token`, `created_at`, `updated_at`) VALUES
('453b001d-6a7b-4e76-a230-3235ebe7a819', 'mitra 1', 'lastname mitra 1', 'pakkepalageng@email.com11', '09812038123123', '$2b$10$ExSp5MdDmeOlG6F6cY2DLOG9TGDqFEL84LcC7uQA6eHlK0ec/xude', 'https://storage.googleapis.com/money-tracker-bucket22/20230610163114-MyTuning.png', NULL, '2023-06-10 09:31:16', '2023-06-10 09:31:16'),
('74e5d881-d375-483c-85c5-2e56080f6f06', 'mitra 1', 'lastname mitra 1', 'pakkepalageng@email.com', '', '$2b$10$CH1PN9RUFBCNRhJFBhuu0eoLHFzzijP5Wps1qi2ZDdv1BEvbjyF6C', 'https://storage.googleapis.com/money-tracker-bucket22/20230610121549-MyTuning.png', NULL, '2023-06-10 05:15:51', '2023-06-10 05:15:51'),
('815d6dbe-03d5-4642-b9bb-5e9defc7ff24', 'joko', 'widodo', 'ketuaguild@r1.id0', '', 'kerjakerjakerja', 'https://instiki.ac.id/wp-content/uploads/2022/05/Presiden_Jokowi-1.png', '', '2023-06-03 03:41:40', '2023-06-08 08:58:45');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` varchar(255) NOT NULL,
  `status` enum('NOT_TAKEN','ON_PROCESS','TAKEN','CANCELED','FINISHED') NOT NULL,
  `total_transaction` bigint(20) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `mitra_id` varchar(255) DEFAULT NULL,
  `location_id` varchar(255) DEFAULT NULL,
  `address_id` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `status`, `total_transaction`, `user_id`, `mitra_id`, `location_id`, `address_id`, `created_at`, `updated_at`) VALUES
('53084034-738a-4a4d-9f80-c46a9b5561ba', 'CANCELED', 400, 'test-user', '815d6dbe-03d5-4642-b9bb-5e9defc7ff24', '9df29858-fbd2-4854-a0a1-f31661f6a57b', '4c5b0dd2-e5b3-4e2b-96eb-a90d505978a5', '2023-06-08 09:51:02', '2023-06-10 06:36:04'),
('adb6caf8-b18d-4abd-b3d0-e0710d6d2bb9', 'NOT_TAKEN', 400, 'test-user', NULL, '6fd90216-3d8d-4546-a3ee-2c7e396d1e34', '4c5b0dd2-e5b3-4e2b-96eb-a90d505978a5', '2023-06-08 10:09:07', '2023-06-08 10:09:07'),
('dcc2e120-5947-414a-95b8-c1b475f3b32e', 'CANCELED', 600, 'test-user', '815d6dbe-03d5-4642-b9bb-5e9defc7ff24', 'b9296351-98cc-462c-83d3-1fe0f0388c28', '4c5b0dd2-e5b3-4e2b-96eb-a90d505978a5', '2023-06-07 02:54:40', '2023-06-10 05:49:37');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230530103700-add-url-photo-profile-to-users.js'),
('20230530104406-create-users-table.js'),
('20230530104446-add-phone-number-to-users.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) COLLATE utf8_bin NOT NULL,
  `firstName` varchar(255) COLLATE utf8_bin NOT NULL,
  `lastName` varchar(255) COLLATE utf8_bin NOT NULL,
  `email` varchar(255) COLLATE utf8_bin NOT NULL,
  `phone_number` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL,
  `url_photo_profile` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `fcm_token` text COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `phone_number`, `password`, `url_photo_profile`, `fcm_token`, `createdAt`, `updatedAt`) VALUES
('1', 'John', 'Doe', 'johndoe@example.com', '1234567890', '$2b$10$4rLy0YIjhArnUT6Pjt0cU.B6hz5m9jqjziFSnOdj4DEh7c8SwNMQO', 'http://example.com/profile.jpg', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('2e8d2416-d2a9-4409-8be5-b7165d4acece', 'user-1', 'lastname-1', 'user3@email', '081830812333', '$2b$10$fCy80CNhYpe2NmgeP3b0wuuT.oCbQYlQDe7PLuSVTrVXSubgffhwu', 'https://storage.googleapis.com/money-tracker-bucket22/20230609001845-accuracy.png', 'eoRs6l17TDGAZaqNlLwksY:APA91bH0NeT-5Ceqx75ecpUE17RhqGSe2w1TrkWoerSPLZ0B0uhpFzcEhg6bnYhkaOdGsZ2EtM_dGPMRFFB_VAzZIJf1k9BmgbKxa6SWPGWPL119mdBGMiDCCpV9JLT4X9ConniUZ-ki', '2023-06-08 17:18:47', '2023-06-08 17:18:56'),
('5af8d477-df4b-42d6-bfea-9666a1908f6d', '12312312312', '312123', '12312312@emai', '123123123123', '$2b$10$1j/3hS0uQoPm1VNNy2n8deLtod4vCddRS0Rl/UAgOBbfyufa0qW.S', NULL, '', '2023-06-06 08:09:31', '2023-06-06 08:09:31'),
('9032f016-3128-4421-af51-a1d7e6636508', 'user-1', 'lastname-1', 'user2@email', '081230812333', '$2b$10$AaAG6jDFMaPdtkcTgtXvHeVaaO1HaRXrF1wXoiXBerZDAB3t0OI5W', NULL, NULL, '2023-06-08 17:12:12', '2023-06-08 17:12:12'),
('947db449-489d-4338-a229-3434261fdba3', '123123', '123123123', '1231231232123@123123123', '123123345123', '$2b$10$gcx/nPgBfjHuOIBsrz3I8e7CC2HTbbNIx34jSHgaVkThJBjLE0Oc6', 'https://storage.googleapis.com/money-tracker-bucket22/20230606204758-06-Jun-20231952766946270737651.jpg', '', '2023-06-06 13:47:59', '2023-06-06 13:47:59'),
('cb6ce8c2-1367-47a6-b56d-8b8e057d7816', '123123123', '123123123', '123123123@asd', '1231231231231', '$2b$10$iNPjVMWfQBjQTJ5Kprvpk./129jgTMeOfb0ZOR6Q5tYjZhsaw9Smi', NULL, '', '2023-06-06 08:18:00', '2023-06-06 08:18:00'),
('d2c3e76b-cd9a-4d0a-a104-cb9061bff273', 'user-1', 'lastname-1', 'user2@email.comasdasdasd', '0812308123122asd123', '$2b$10$00UXppzWqvUACxZpVvEh6ux9UceLdKyVmEGg.aJkQs/PpGK5yNBym', NULL, '', '2023-06-06 08:08:57', '2023-06-06 08:08:57'),
('e1da8bd6-b739-4984-b410-426a6252a966', 'user-1', 'lastname-1', 'user2@email.comasd', '0812308123122asd', '$2b$10$dEOHmhAgmSWs.WpnYjz1fevcKlIOphe/BlILGW2FttbCv0pa4K/9u', NULL, '', '2023-06-06 08:03:53', '2023-06-06 08:03:53'),
('test-user', 'user-1', 'lastname-1', 'user1@email.com', '081230812312', '$2b$10$CxaAauzEdRZ/uaj4i7QrqeyEkUbtzVuHQMTSnPnTyUpih6vHVNoLO', 'https://storage.googleapis.com/money-tracker-bucket22/20230604214141-avatar new.png', NULL, '2023-06-04 14:41:47', '2023-06-08 14:26:10'),
('test-userasd', 'user-1', 'lastname-1', 'user2@email.com', '0812308123122', '$2b$10$Y3D1vAlCxKlh6FIc2BfuX.622PO3nAXXMUuNbjmqUrig3fmWkifMq', 'https://storage.googleapis.com/money-tracker-bucket22/20230605112125-avatar new.png', '', '2023-06-05 04:21:26', '2023-06-05 04:21:26'),
('test-userasdasd', 'Jon', 'Djoe', 'qwe@gmail.com', '123461111890', '$2b$10$SJB8PG5qT9oymwJvhVMCeObE.SmVDg8B2h5GAa3B2YV70EM2USVWi', 'http://example.com/profile.jpg', 'cLhb5UK5QKmaIHBzdKYIPe:APA91bFdqs067sRvVIaFheGeQ5gbeKi-nUE3B6THBcP4xcIp_y3vqQM4iPbXDYvGTIG4fFlLLaNF-vrELRwBUFtauFMuYy1yJlrNVtJaBJQdoVoXpXch95GUrZWyCdK8iK_DwTUCJ2_J', '2023-05-30 15:25:28', '2023-06-08 08:26:30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chatrooms`
--
ALTER TABLE `chatrooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `garbages`
--
ALTER TABLE `garbages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mitras`
--
ALTER TABLE `mitras`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`) USING HASH;

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
