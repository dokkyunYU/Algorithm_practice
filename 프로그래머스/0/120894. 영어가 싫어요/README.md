# [level 0] 이차원 배열 대각선 순회하기 - 181829 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120894) 

### 성능 요약

메모리: 33.6MB, 시간: 0.07ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 2월 6일 16:42:30

### 문제 설명

#### 문제 설명
영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

#### 제한사항

numbers는 소문자로만 구성되어 있습니다.

numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.

1 ≤ numbers의 길이 ≤ 50

"zero"는 numbers의 맨 앞에 올 수 없습니다.

#### 입출력 예

numbers	result

"onetwothreefourfivesixseveneightnine"	123456789

"onefourzerosixseven"	14067

#### 입출력 예 설명

##### 입출력 예 #1

"onetwothreefourfivesixseveneightnine"를 숫자로 바꾼 123456789를 return합니다.

##### 입출력 예 #2

"onefourzerosixseven"를 숫자로 바꾼 14067를 return합니다.


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges