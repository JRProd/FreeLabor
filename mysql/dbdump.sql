-- MySQL dump 10.13  Distrib 5.7.12, for osx10.9 (x86_64)
--
-- Host: localhost    Database: freelabor
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
  `dateJoinedAttendance` varchar(25) COLLATE latin1_general_ci DEFAULT NULL COMMENT 'Should be in Full UTC Format (25 Characters), business logic will handle this',
  PRIMARY KEY (`idAttendance`),
  UNIQUE KEY `idAttendance_UNIQUE` (`idAttendance`),
  KEY `fk_idUser_idx` (`idUser`),
  KEY `fk_event_idx` (`idEvent`),
  CONSTRAINT `fk_event` FOREIGN KEY (`idEvent`) REFERENCES `Event` (`idEvent`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user` FOREIGN KEY (`idUser`) REFERENCES `User` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  `dateJoinedMembership` varchar(25) CHARACTER SET latin1 DEFAULT NULL COMMENT 'Should be in Full UTC Format (25 Characters), business logic will handle this',
  PRIMARY KEY (`idMembership`),
  KEY `org_member_idx` (`idOrg`),
  KEY `membership_user_idx` (`idUser`),
  CONSTRAINT `membership_org` FOREIGN KEY (`idOrg`) REFERENCES `Org` (`idOrg`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `membership_user` FOREIGN KEY (`idUser`) REFERENCES `User` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  `splashImageURLOrg` varchar(254) COLLATE latin1_general_ci DEFAULT NULL,
  `imageURLOrg` varchar(45) COLLATE latin1_general_ci DEFAULT NULL,
  `missionStatementOrg` varchar(254) COLLATE latin1_general_ci DEFAULT NULL,
  `otherInfo` text COLLATE latin1_general_ci,
  PRIMARY KEY (`idOrg`,`usernameOrg`),
  UNIQUE KEY `idOrg_UNIQUE` (`idOrg`),
  UNIQUE KEY `usernameOrg_UNIQUE` (`usernameOrg`),
  UNIQUE KEY `emailOrg_UNIQUE` (`emailOrg`),
  UNIQUE KEY `phoneOrg_UNIQUE` (`phoneOrg`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Session`
--

DROP TABLE IF EXISTS `Session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Session` (
  `idSession` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expiresSession` int(11) unsigned NOT NULL,
  `username` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`idSession`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  `bioUser` text,
  `imageURLUser` varchar(254) DEFAULT NULL,
  PRIMARY KEY (`idUser`,`usernameUser`),
  UNIQUE KEY `idUser_UNIQUE` (`idUser`),
  UNIQUE KEY `emailUser_UNIQUE` (`emailUser`),
  UNIQUE KEY `usernameUser_UNIQUE` (`usernameUser`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-11-29 16:59:05
