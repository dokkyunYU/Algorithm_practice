-- 코드를 입력하세요
SELECT COUNT(*) FROM (SELECT AGE FROM USER_INFO WHERE JOINED BETWEEN DATE(20210101) AND DATE(20211231)) A WHERE AGE LIKE "2_"
