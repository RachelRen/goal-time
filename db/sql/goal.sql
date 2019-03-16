CREATE TABLE  IF NOT EXISTS  `goal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `iconName` varchar(255) DEFAULT NULL,
  `comment_info` longtext DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  `last_time` varchar(20) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `goal` set name='demo', iconName='icon-learning', comment_info='123456';


CREATE TABLE  IF NOT EXISTS  `goal_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goal_id` int(11) DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;