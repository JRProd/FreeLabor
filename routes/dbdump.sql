-- MySQL dump 10.13  Distrib 5.7.12, for osx10.9 (x86_64)
--
-- Host: 127.0.0.1    Database: freelabor
-- ------------------------------------------------------
-- Server version	5.7.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Attendance`
--

DROP TABLE IF EXISTS `Attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Attendance` (
  `idAttendance` int(11) NOT NULL AUTO_INCREMENT,
  `idUser` int(11) NOT NULL,
  `idEvent` int(11) NOT NULL,
  `dateJoinedAttendance` varchar(25) CHARACTER SET latin1 NOT NULL COMMENT 'Should be in Full UTC Format (25 Characters), business logic will handle this',
  PRIMARY KEY (`idAttendance`),
  KEY `fk_idUser_idx` (`idUser`),
  KEY `fk_event_idx` (`idEvent`),
  CONSTRAINT `fk_event` FOREIGN KEY (`idEvent`) REFERENCES `Event` (`idEvent`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user` FOREIGN KEY (`idUser`) REFERENCES `User` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Attendance`
--

LOCK TABLES `Attendance` WRITE;
/*!40000 ALTER TABLE `Attendance` DISABLE KEYS */;
/*!40000 ALTER TABLE `Attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Event`
--

DROP TABLE IF EXISTS `Event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Event` (
  `idEvent` int(11) NOT NULL AUTO_INCREMENT,
  `idOrg` int(11) NOT NULL COMMENT 'Fix foreign key',
  `titleEvent` varchar(70) COLLATE latin1_general_ci NOT NULL,
  `locationEvent` varchar(35) COLLATE latin1_general_ci NOT NULL,
  `addressEvent` varchar(35) CHARACTER SET latin1 DEFAULT NULL,
  `cityEvent` varchar(35) COLLATE latin1_general_ci NOT NULL,
  `stateCodeEvent` char(2) COLLATE latin1_general_ci NOT NULL,
  `postCodeEvent` varchar(9) COLLATE latin1_general_ci DEFAULT NULL,
  `dateStartEvent` varchar(25) COLLATE latin1_general_ci NOT NULL,
  `dateEndEvent` varchar(25) COLLATE latin1_general_ci NOT NULL,
  `descriptionEvent` text CHARACTER SET latin1,
  `maxAttendeesEvent` int(11) DEFAULT NULL,
  PRIMARY KEY (`idEvent`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Event`
--

LOCK TABLES `Event` WRITE;
/*!40000 ALTER TABLE `Event` DISABLE KEYS */;
INSERT INTO `Event` VALUES (1,2,'title','location','123 address ln.','Dallas','TX','75275','2016-11-09T12:00:00+00:00','2016-11-09T18:00:00+00:00','insert a rather lengthy description on the event here',100),(2,2,'title','location','123 address ln.','Dallas','TX','75275','2016-11-09T12:00:00+00:00','2016-11-09T18:00:00+00:00','insert a rather lengthy description on the event here',100);
/*!40000 ALTER TABLE `Event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Membership`
--

DROP TABLE IF EXISTS `Membership`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Membership` (
  `idMembership` int(11) NOT NULL AUTO_INCREMENT,
  `idUser` int(11) NOT NULL,
  `idOrg` int(11) NOT NULL,
  `dateJoinedMembership` varchar(25) COLLATE latin1_general_ci NOT NULL COMMENT 'Should be in Full UTC Format (25 Characters), business logic will handle this',
  PRIMARY KEY (`idMembership`),
  KEY `fk_user_idx` (`idUser`),
  KEY `fk_org_idx` (`idOrg`),
  CONSTRAINT `fk_org-membership` FOREIGN KEY (`idOrg`) REFERENCES `Org` (`idOrg`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user-membership` FOREIGN KEY (`idUser`) REFERENCES `User` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Membership`
--

LOCK TABLES `Membership` WRITE;
/*!40000 ALTER TABLE `Membership` DISABLE KEYS */;
/*!40000 ALTER TABLE `Membership` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Org`
--

DROP TABLE IF EXISTS `Org`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Org` (
  `idOrg` int(11) NOT NULL AUTO_INCREMENT,
  `nameOrg` varchar(70) COLLATE latin1_general_ci NOT NULL,
  `usernameOrg` varchar(35) COLLATE latin1_general_ci NOT NULL,
  `emailOrg` varchar(254) COLLATE latin1_general_ci NOT NULL,
  `phoneOrg` varchar(13) COLLATE latin1_general_ci NOT NULL,
  `hashOrg` char(60) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  PRIMARY KEY (`idOrg`),
  UNIQUE KEY `idOrg_UNIQUE` (`idOrg`),
  UNIQUE KEY `usernameOrg_UNIQUE` (`usernameOrg`),
  UNIQUE KEY `emailOrg_UNIQUE` (`emailOrg`),
  UNIQUE KEY `phoneOrg_UNIQUE` (`phoneOrg`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Org`
--

LOCK TABLES `Org` WRITE;
/*!40000 ALTER TABLE `Org` DISABLE KEYS */;
INSERT INTO `Org` VALUES (1,'Test Organization','test','test@org.org','12174235546','AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'),(2,'Sketchy Tinder','dicktouch','communism1@dicktouch.club','15555555555','$2a$10$LOQNC28Z5R78BHPs2Fftde1dVV1w6G7anG6pLemCQBikhjC52vcR6');
/*!40000 ALTER TABLE `Org` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Session`
--

DROP TABLE IF EXISTS `Session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Session` (
  `idSession` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expiresSession` int(11) unsigned NOT NULL,
  `idUser` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`idSession`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Session`
--

LOCK TABLES `Session` WRITE;
/*!40000 ALTER TABLE `Session` DISABLE KEYS */;
/*!40000 ALTER TABLE `Session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `firstNameUser` varchar(35) NOT NULL,
  `lastNameUser` varchar(35) NOT NULL,
  `emailUser` varchar(254) NOT NULL,
  `usernameUser` varchar(35) NOT NULL,
  `hashUser` char(60) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `idUser_UNIQUE` (`idUser`),
  UNIQUE KEY `emailUser_UNIQUE` (`emailUser`),
  UNIQUE KEY `usernameUser_UNIQUE` (`usernameUser`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (6,'Francis','XXXMLCoyle','json_sucks3@rollo.biz','rollo3','$2a$10$fhY.UY/fr4CN78qrO6BqUeHb1zUIuMY8iOhNItOc6K4KaGTXEjjvS');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `userID` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-11-10 17:15:41
