import requests
import json

# API URL과 발급받은 인증키 설정
api_url = 'https://www.seogu.go.kr/seoguAPI/3660000/getAnimlHsptl'
params = {
    'serviceKey': '7VgYodEgm5JNs7g8bLrDCyPS83pD9daFp1YksUoeBSW9K%2BXIw5NKbv%2FcRz%2FOzmlHfa%2Btv6dEMP0i6HuwwLC39A%3D%3D',
    'type': 'json'  # type을 xml로 시도
}

# API 호출
response = requests.get(api_url, params=params)

# 응답 확인
if response.status_code == 200:
    print(response.text)  # 응답 내용 확인 (XML 형식으로 출력)
else:
    print("API 요청 실패:", response.status_code)
    print("응답 메시지:", response.text)
