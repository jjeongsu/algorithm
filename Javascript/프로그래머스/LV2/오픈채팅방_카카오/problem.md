# 기능 구현 사항

1. User 객체에 `uid--:닉네임`을 저장한다.
2. records를 순회하면서-> O(N)

- enter일경우 : uid-님이 들어왔습니다.. 문자열을 result에 저장, uid:닉네임을 User객체에 저장
- Leave일 경우 : uid--님이 났습니다. 문자열을 result에 저장
- Change일 경우 : uid:닉네임을 User객체에 저장

3. Result 배열을 순회하면서

- 각 문자열.Repalce(유저아이디, 닉네임)
