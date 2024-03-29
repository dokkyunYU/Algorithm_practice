-- 코드를 입력하세요
SELECT *,
    CASE
        WHEN DATEDIFF(END_DATE, START_DATE) + 1 >= 30 THEN '장기 대여'
        ELSE '단기 대여'
    END AS RENT_TYPE
FROM (SELECT
        HISTORY_ID,
        CAR_ID,
        DATE_FORMAT(START_DATE, "%Y-%m-%d") AS START_DATE,
        DATE_FORMAT(END_DATE, "%Y-%m-%d") AS END_DATE
      FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
      WHERE START_DATE BETWEEN '2022-09-01 00:00:00' AND '2022-09-30 23:59:59'
     ) A
ORDER BY HISTORY_ID DESC;