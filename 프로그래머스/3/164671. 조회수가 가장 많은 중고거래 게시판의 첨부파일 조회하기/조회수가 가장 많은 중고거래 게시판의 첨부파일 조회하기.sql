-- 코드를 입력하세요
SELECT CONCAT('/home/grep/src/',B.BOARD_ID,'/', F.FILE_ID, F.FILE_NAME, F.FILE_EXT) AS FILE_PATH
FROM USED_GOODS_FILE F
JOIN (SELECT BOARD_ID, VIEWS FROM USED_GOODS_BOARD ORDER BY VIEWS DESC LIMIT 1) B ON B.BOARD_ID = F.BOARD_ID
ORDER BY F.FILE_ID DESC