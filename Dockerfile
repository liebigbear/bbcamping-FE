# Node.js 기반 이미지 사용
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16

# 컨테이너 내 작업 디렉토리 설정
WORKDIR /usr/src/app

# 빌드된 파일 복사
COPY dist/ ./dist/

# 'serve' 패키지를 전역으로 설치하여 정적 파일을 서빙
RUN npm install -g serve

# 컨테이너에서 사용할 포트 지정
EXPOSE 3000

# 애플리케이션 실행 명령어
CMD ["serve", "-s", "dist"]
