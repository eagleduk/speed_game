# 개요
주어진 단어가 표시되면 input에 단어를 정해진 시간 내에 입력하여 점수를 획득하는 어플리케이션 개발

# 개발 환경
- webpack 4.43.0
- webpack-cli 3.3.12
- webpack-dev-server 3.11.0
- axios 0.21.0
- css-loader 5.0.1
- html-webpack-plugin 4.5.0
- mini-css-extract-plugin 1.3.1

# 요구사항분석
1. webpack 환경을 구성
    - webpack-dev-server 환경구성
    - start script를 통해서 hot-loading 적용
    - build script를 구성하여 /public 폴더에 빌드한 html, js, css를 export
2. 모든 구현은 vanila javascript(es5, es6 typescript도 가능)로 구현한다.
3. 게임 화면과 완료 화면은 routing을 통하여 이동한다.(라우터 직접구현 - 구현방법은 자율)
4. 단위 테스트 적용
    - 단위 테스트는 테스팅 library를 사용해도 무방함
5. 단어는 서버에 요청하여 받아온다.
    - https://my-json-server.typicode.com/kakaopay-fe/resources/words
    - 응답형식
        time: 단어를 해결하는데 걸리는 시간
        text: 해결해야할 단어
6. 해결전략을 README.md에 작성한다.

# 해결 전략
-[x] webpack 환경 구성
