/*
 Navicat Premium Data Transfer

 Source Server         : Springboot
 Source Server Type    : MySQL
 Source Server Version : 80040
 Source Host           : localhost:3306
 Source Schema         : lianjia_rent

 Target Server Type    : MySQL
 Target Server Version : 80040
 File Encoding         : 65001

 Date: 27/12/2025 00:52:39
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for persistent_logins
-- ----------------------------
DROP TABLE IF EXISTS `persistent_logins`;
CREATE TABLE `persistent_logins`  (
  `username` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `series` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `last_used` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`series`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of persistent_logins
-- ----------------------------

-- ----------------------------
-- Table structure for rent_collect
-- ----------------------------
DROP TABLE IF EXISTS `rent_collect`;
CREATE TABLE `rent_collect`  (
  `collect_id` int NOT NULL AUTO_INCREMENT COMMENT '收藏记录唯一主键（自增）',
  `user_id` int NOT NULL COMMENT '关联用户表的user_id（外键）',
  `rent_id` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '关联MongoDB房源的_id（字符串类型）',
  PRIMARY KEY (`collect_id`) USING BTREE,
  INDEX `fk_collect_user`(`user_id` ASC) USING BTREE,
  CONSTRAINT `fk_collect_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 45 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rent_collect
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_id` int NOT NULL AUTO_INCREMENT COMMENT '用户唯一主键（自增）',
  `username` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '登录用户名（唯一）',
  `passwd` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT 'MD5加密后的密码（32位固定长度）',
  `identity` int NOT NULL DEFAULT 0 COMMENT '用户身份（0=普通用户，1=管理员）',
  PRIMARY KEY (`user_id`) USING BTREE,
  UNIQUE INDEX `username`(`username` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (2, 'lisi', '$2a$10$76Fo7hpaFWNtdwiscIc9P.j7oupI/pI3yQLE/u78IqTnvVENjXWma', 0);
INSERT INTO `user` VALUES (15, 'Nnbadada', '$2a$10$jJD8zePgvF.ip4xhILwOauzUpYdhavvwt19Z2haCmMBPLA8Lvr9KG', 1);
INSERT INTO `user` VALUES (16, 'zhangxuan', '$2a$10$LLR2BUj01Bk5bBvXUtj0GeGiu/X4.l.D8ptSE04Cpzujdwmx7JJJG', 0);

SET FOREIGN_KEY_CHECKS = 1;
