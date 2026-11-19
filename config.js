// ============================================================
//  여기만 수정하면 됩니다. (링크 · 금액 · 일정 · 문의처)
//  ⚠ 기관코드는 여기에 넣지 마세요. 구글폼 "확인 메시지"에만 넣습니다.
// ============================================================
window.CONFIG = {
  // 링크
  FORM_URL:    "https://forms.gle/n863Eu7iDF7ntf986",                       // 동의서 + 사전설문 구글폼
  ANDROID_URL: "https://m.site.naver.com/2cGYm", // 마음로그 Android (Google Play)
  IOS_URL:     "https://m.site.naver.com/2cGX3",  // 마음로그 iOS (App Store)

  // 리워드 (예산 상세안 기준으로 수정)
  REWARD_1: 5000,   // 동의서·사전설문 + 가입 + 기관코드 연결
  REWARD_2: 10000,  // 7일 이상 사용 + 보고서 7일
  REWARD_3: 10000,  // 10일 이상 사용 + 보고서 10일 (추가 지급)

  // 모집·일정
  CAPACITY: 500,                          // 선착순 인원
  USE_START: "11/28(토)",                 // 사용일 집계 시작일 (이전 기록은 미인정)
  USE_PERIOD: "11/28(토) ~ 12/11(금)",     // 2주 사용 기간
  LAST_DAY: "12/11(금)",                  // 마지막 사용 인정일
  POST_PERIOD: "12/11(금) ~ 12/13(일)",    // 사후설문 작성 기간
  POST_START: "12/11(금)",                // 사후설문 안내 발송일 (앱 푸시 + 문자)
  POST_FORM_URL: "",                      // 사후설문 구글폼 (비워 두면 버튼이 "열리면 안내" 상태로 표시)
  PAYOUT: "12/14(월) ~ 12/15(화)",         // 기프티콘 발송일

  // 문의
  CONTACT_NAME: "정션메드 AX 실증사업 담당",
  CONTACT_EMAIL: "contact@junctionmed.com",
  CONTACT_KAKAO: "https://m.site.naver.com/2jDEg" // 카카오톡 비즈니스 채널
};
