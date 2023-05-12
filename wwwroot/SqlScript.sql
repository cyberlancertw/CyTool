CREATE DATABASE [CyToolDemo];

USE [CyToolDemo];

CREATE TABLE [Students](
	[ID] VARCHAR(7) PRIMARY KEY NOT NULL,
	[Name] NVARCHAR(10) NOT NULL,
	[Sex] CHAR(1) NOT NULL,
	[Birthday] DATE NOT NULL,
	[Height] DECIMAL(4,1) NULL,
	[Weight] DECIMAL(4,1) NULL,
	[Score] INT NULL
);

INSERT INTO [Students]([ID], [Name], [Sex], [Birthday], [Height], [Weight], [Score]) VALUES
('u023058', 'Adam', 'M', '2010-03-12', 162.5, 54.0, 78),
('u023061', 'Billy', 'M', '2010-02-25', 165.0, 61.5, 87),
('u023072', 'Carl', 'M', '2010-06-27', 159.5, 49.0, 96),
('u023083', 'Barbara', 'F', '2009-10-02', 167.0, 48.5, 71),
('u023108', 'Henry', 'M', '2010-05-07', 160.0, 72.0, 64),
('u023110', 'Emily', 'F', '2010-04-29', 151.0, 48.0, 100),
('u023121', 'James', 'M', '2010-04-21', 157.5, 60.5, 57),
('u023130', 'Mary', 'F', '2009-08-27', 155.0, 46.5, 91),
('u023144', 'Philip', 'M', '2010-02-14', 168.5, 67.5, 63),
('u023165', 'Janet', 'F', '2010-01-23', 164.0, 44.0, 85),
('u023170', 'Jack', 'M', '2010-03-03', 168.0, 65.5, 71),
('u023176', 'Alice', 'F', '2010-04-09', 165.0, 52.0, 65),
('u023177', 'Judy', 'F', '2010-05-22', 161.5, 51.5, 92),
('u023188', 'Robert', 'M', '2010-02-05', 170.5, 72.0, 58),
('u023189', 'Emma', 'F', '2010-05-31', 172.5, 62.0, 77),
('u023190', 'Thomas', 'M', '2009-11-11', 168.0, 68.0, 82),
('u023194', 'Flora', 'F', '2010-01-04', 153.5, 45.5, 79),
('u023205', 'Ronald', 'M', '2010-03-13', 169.5, 71.5, 59),
('u023209', 'William', 'M', '2010-06-07', 165.0, 60.0, 62),
('u023218', 'Alfred', 'M', '2009-12-01', 168.5, 75.0, 98),
('u023220', 'Jeffrey', 'M', '2009-10-09', 162.5, 47.0, 60),
('u023225', 'John', 'M', '2010-06-19', 154.0, 52.0, 66),
('u023229', 'Joyce', 'F', '2009-11-07', 155.5, 42.0, 92),
('u023237', 'Rebecca', 'F', '2009-09-30', 164.0, 50.0, 69),
('u023240', 'Jack', 'M', '2010-02-28', 167.0, 77.0, 80),
('u023243', 'Daniel', 'M', '2010-06-02', 164.5, 65.0, 23);


/*
CREATE TABLE [Products](
	[ID] VARCHAR(10) PRIMARY KEY NOT NULL,
	[Name] NVARCHAR(10) NOT NULL,
	[Price] INT NOT NULL,
	[Memo] NVARCHAR(100) NULL
);

CREATE TABLE [Orders](
	[ID] VARCHAR(10) PRIMARY KEY NOT NULL,
	[ProductID] VARCHAR(10) NOT NULL,
	[Quantity] INT NOT NULL,
	[Time] DATETIME NOT NULL,
	[Memo] NVARCHAR(100) NULL
);


INSERT INTO [Products]([ID],[Name],[Price],[Memo])values('1234', '紅茶', 30, NULL),('abcd','咖啡', 45, NULL),('9876','菸', 100, '未成年不得購買');
*/