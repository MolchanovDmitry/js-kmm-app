# JavaScript-KMM-Application

How to reproduce the error:

1. cd common
2. ./gradlew build
3. cd ../demo
4. npm install
5. npm link ../common/build/js/packages/common-shared
6. npm run build
