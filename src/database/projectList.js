import { PROJECT_CATEGORIES } from './projectCategoryList';

export const PROJECT_LIST = [
  {
    id: 1,
    name: 'WELLET',
    generation: ['10기', '10.5기', '11기'],
    category: PROJECT_CATEGORIES.WEB,
    imageUrl: '/images/thumbnails/wellet.png',
    youtubeVideoId: '',
    downloadLinkUrl: null,
    webpageLinkUrl: 'https://wellet.netlify.app',
    githubUrls: {
      clientUrl: 'https://github.com/APPS-sookmyung/2024-WELLET-client',
      serverUrl: 'https://github.com/APPS-sookmyung/2024-WELLET-Server',
    },
    summary: 'OCR 기술을 활용한 온라인 명함 보관 서비스',
    introduction:
      '지갑 속 쌓여가는 명함들, 이제는 WELLET으로 관리하세요!\n명함을 받았지만 막상 필요할 때 찾지 못해 당황했던 경험이 있으신가요? WELLET은 사진 한 장으로 명함을 쉽게 저장하고, 정보를 자동으로 정리해 언제든 필요한 순간에 빠르게 검색할 수 있는 온라인 명함 관리 서비스입니다. OCR 기술을 활용해 명함 정보를 정리하며, 검색과 카테고리화로 정보를 더욱 효과적으로 관리합니다.\nWELLET과 함께 명함 정리에 들이는 시간을 줄이고, 중요한 순간에 필요한 정보를 바로 찾아보세요!',
    description:
      '📇 명함 사진 업로드\n명함 사진을 업로드하면 자동으로 정보를 정리합니다.\n\n💻 OCR로 정보 자동 추출\n상호명, 이름, 전화번호, 주소 등 주요 정보를 OCR로 추출해 명함을 체계적으로 저장합니다.\n\n📝 세부설명 추가\n직접 설명을 추가하여 명함과 관련된 기억을 보완하세요. (예: "OO 세미나 강사", "을지로 근처 디저트 맛집")\n\n🏷️ 카테고리\n거래처/학교/맛집 등 사용자 정의 카테고리로 정리해보세요.\n\n🖼️ 명함 이미지 보관\n명함의 앞면, 뒷면, 추가 이미지를 모두 보관합니다.\n\n📜 카테고리별 리스트로 정리\n거래처, 친구, 맛집 등 카테고리별로 명함을 정리해 메인 화면에서 한눈에 확인할 수 있습니다.\n\n🔍 검색 기능\n상호명, 이름, 전화번호, 메모, 카테고리 등 기록된 내용을 기반으로 명함을 빠르게 검색할 수 있습니다.',
    memberList: [
      {
        index: 0,
        image: '/images/memberProfiles/kimjunhee.png',
        name: '김준희',
        part: 'frontend',
        position: '프론트엔드장',
        isLeader: true,
        review:
          'PM을 맡게 된 첫 프로젝트라 잘할 수 있을지 기대 반 걱정 반이었는데 하는 내내 너무 즐겁게 작업했던 기억만 있네요. 다들 프로젝트에 진심이라 새로운 것도 많이 시도했던 것 같아요. 특히 백엔드 팀에서 처음 해보는 OCR도 과감히 도전해보는 걸 보고 정말 멋있다고 생각했습니다👍 그리고 마감 직전에는 연말 파티를 가장한(?) 무박 2일 해커톤도 진행했는데 다같이 모여서 하루종일 개발하는 즐거움도 느낄 수 있었습니다ㅎㅎ😇 끝까지 로그인으로 고생하긴 했지만 그래도 언젠가 이 경험이 자산이 되리라 생각합니다. 우리 프론트엔드팀! 디자인 하나로 이리 수정, 저리 수정 참 많이도 수정했는데 다들 끝까지 열심히 해줘서 고맙고, 백엔드팀! 새로운 부분들이 많았을텐데 계속 공부하면서 결국 구현해줘서 고마워요💕 이렇게 좋은 팀원들과 함께 개발할 수 있었던 게 올 한 해 가장 큰 행운인 것 같네요🍀✨',
      },
      {
        index: 1,
        image: '/images/memberProfiles/ryumisung.png',
        name: '류미성',
        part: 'frontend',
        position: '프론트엔드',
        isLeader: false,
        review:
          '위렛을 기획, 개발하면서 즐거운 협업을 했다는 생각이 들어요. 기획 회의와 와이프레임 작성을 위해 주말에 과방에 나오기도 하고, 그리고 디자이너 구인, 개발, 테스트까지 지난 10개월 동안 이 서비스를 완성하기 위한 크고 작은 일들이 많았지만, 팀원들 덕분에 모든 과정이 즐겁고 의미 있게 느껴졌습니다. 특히 자체 해커톤이 대면으로 이루어질 줄 몰랐는데, 바쁜 와중에도 장소대여와 일정 조율에 있어, PM 준희의 추진력에 다시 한번 놀랐습니다. 또한, OCR이나 소셜 로그인 같은 쉽지 않은 작업들이 많았음에도 끝까지 포기하지 않고 서비스를 완성해 낸 팀원들에게 감사의 마음을 전하고 싶습니다💗',
      },
      {
        index: 2,
        image: '/images/memberProfiles/kimhyerim.png',
        name: '김혜림',
        part: 'frontend',
        position: '프론트엔드',
        isLeader: false,
        review:
          '제 첫 프로젝트를 위렛 팀원들과 함께하게 되어 행복했습니다. 정말 많은 일이 있었는데 모두 추억이고 즐겁고 좋은 기억들이라고 생각해요. 아무것도 몰랐던 저를 이끌어준 우리 프론트엔드의 준희언니와 미성언니에게 정말 진심으로 감사하고 항상 든든한 우리 백엔드팀에게도 정말 감사해요☺️ 여러분 덕분에 성장할 수 있었습니다. 다들 그동안 수고 많으셨고 마지막까지 힘내요💕',
      },
      {
        index: 3,
        image: '/images/memberProfiles/jooajung.png',
        name: '주아정',
        part: 'backend',
        position: '백엔드장',
        isLeader: false,
        review:
          '이렇게 커질 줄 몰랐던 우리의 위렛… 페이지 기획할 때 양이 별로 없어 금방 끝내겠구나,라는 생각이 무색하게 무수히 많은 밤과 건강을 갈아 넣은 프로젝트가 이제야 막을 내린다는 게 감격스럽기도 하고 아쉽기도 합니다. 봄, 여름, 가을을 지나 온 한겨울에 방 데워두고 야식도 먹으면서 보냈던 고난과 역경의 시간이, 지금 생각해 보면 발전을 만들어낸 것 같습니다. 지나고 보면 추억이 된 1년 동안의 위렛은 제 마지막 프로젝트가 될 듯합니다 🥹 맨날 헛다리 짚느라 시간도 많이 잡아먹었지만, 그러면서 저도, 다른 팀원분들도 성장했다고 믿습니다. 부족한 저를 이끌어준 우리 백엔드 팀원들과 항상 눈에 보이는 예쁜 사이트를 만들어준 프론트엔드 팀원분들에게 정말 감사하다는 말을 전하고 싶습니다. 마지막이 온 만큼, 조금 더 힘내서 프로젝트 마무리합시다!',
      },
      {
        index: 4,
        image: '/images/memberProfiles/leehaerim.png',
        name: '이해림',
        part: 'backend',
        position: '백엔드',
        isLeader: false,
        review:
          '이번 프로젝트를 하면서 정말 많은 것을 배운 것 같아요 단지 스터디로만 끝나서 깊게 활용해보지 못했던 스프링 부트 지식들을 실무에서 직접 사용할 수 있었고 코드리뷰를 통해 저 방식이 더 깔끔하구나를 몸소 겪으며 이렇게 완성되어간게 다 우리 위렛 팀원들 덕분이라 감사할 따름입니다. 특히나 우리 백엔드 여러분들은 제가 많은 걸 배울 수 있었고 성장하는데 가장 도움주신, 제 은인과도 다름없어요 그리고 우리 프론트엔드 여러분들이 만든 스크린을 보면 정말 대단하다는 생각이 절로 듭니다. 이번 프로젝트 물론 많이 힘들었지만 지금 보면 좋은 기억으로 밖에 남지 않네요 다들 감사하고 사랑해요❤️',
      },
      {
        index: 5,
        image: '/images/memberProfiles/hayeyoung.png',
        name: '하예영',
        part: 'backend',
        position: '백엔드',
        isLeader: false,
        review:
          '저의 첫 웹 프로젝트인 위렛을 개발하면서 정말 많은 것을 배울 수 있었던 것 같아요. 어쩌면 저의 인생(?)을 위렛을 하기 전의 저와 이후의 저로 나눌 수 있다고 생각합니다 ㅎㅎ 실제로 배포까지 진행하며 많은 지식을 얻을 수 있었고, 다양한 협업 툴을 경험하며 또 다른 프로젝트를 할 때에도 정말 많은 도움이 되었어요. 처음에 제일 두렵고 어려웠던 깃도 이제는 능숙하게 할 수 있게 된 것 같습니다☺️ 다같이 만나서 개발하며 맛있는 것도 먹고 같이 도란도란 이야기도 하면서 많은 추억을 쌓을 수 있었던 것 같아요. 저의 2학년 생활은 위렛을 빼놓고 이야기하긴 쉽지 않을 거라고 생각합니다. 너무 예쁜 페이지를 만들어준 프론트 팀원분들과 처음이라 매우 서툴었던 저를 많이 도와주고 성장시켜준 백엔드 팀원들에게 너무 고마웠다고 말하고 싶습니다. 힘들지 않았다고 하면 거짓말이겠지만 모두가 있어서 정말 행복했던 개발이었습니다🫶',
      },
      {
        index: 6,
        image: '/images/memberProfiles/kimsoojin.png',
        name: '김수진',
        part: 'design',
        position: '디자인',
        isLeader: false,
        review: '',
      },
      {
        index: 7,
        image: '/images/memberProfiles/moonseoyoung.png',
        name: '문서영',
        part: 'design',
        position: '디자인',
        isLeader: false,
        review: '',
      },
    ],
    techStackList: [
      {
        name: 'React',
        imageUrl: '/images/techStacks/react.png',
      },
      {
        name: 'JavaScript',
        imageUrl: '/images/techStacks/javascript.png',
      },
      {
        name: 'Styled-Components',
        imageUrl: '/images/techStacks/styled-components.png',
      },
      {
        name: 'Netlify',
        imageUrl: '/images/techStacks/netlify.png',
      },
      {
        name: 'Spring Boot',
        imageUrl: '/images/techStacks/spring-boot.png',
      },
      {
        name: 'MySQL',
        imageUrl: '/images/techStacks/mysql.png',
      },
      {
        name: 'Java17',
        imageUrl: '/images/techStacks/java.png',
      },
      {
        name: 'AWS',
        imageUrl: '/images/techStacks/aws.png',
      },
      {
        name: 'Naver Clova OCR',
        imageUrl: '/images/techStacks/naver-clova-ocr.svg',
      },
      {
        name: 'docker',
        imageUrl: '/images/techStacks/docker.png',
      },
      {
        name: 'GitHub Actions',
        imageUrl: '/images/techStacks/github-actions.png',
      },
      {
        name: 'Gradle',
        imageUrl: '/images/techStacks/gradle.png',
      },
      {
        name: 'OAuth2.0',
        imageUrl: '/images/techStacks/oauth2.png',
      },
      {
        name: 'Spring Data JPA',
        imageUrl: '/images/techStacks/spring-data-jpa.png',
      },
      {
        name: 'Apache',
        imageUrl: '/images/techStacks/apache.png',
      },
    ],
  },
  {
    id: 2,
    name: 'Cookiee-',
    generation: ['8기', '10기'],
    category: PROJECT_CATEGORIES.APP,
    imageUrl: '/images/thumbnails/cookiee-.png',
    youtubeVideoId: 'ezB4ZwOh0-Y',
    downloadLinkUrl: null,
    webpageLinkUrl: '',
    githubUrls: {
      clientUrl: 'https://github.com/SMWU-Cookiee/Cookiee-Client-iOS',
      serverUrl: 'https://github.com/SMWU-Cookiee/Cookiee-Server',
    },
    summary:
      '하루하루의 쿠키를 모아보세요! 사진으로 나만의 캘린더를 꾸미고, 기록하면서 일상을 캘린더로 디자인하는 색다른 경험을 누려보세요!',
    introduction:
      'Cookiee-는 일상 속에서 경험하는 소중한 순간들을 아름답게 간직하고 싶은 마음에서 시작되었습니다. 우리의 하루하루는 특별한 순간들로 가득 차 있지만, 그 순간들을 더 감성적이고 생생하게 기록할 수 있는 방법을 찾고 싶었습니다.\n\nCookiee-는 이런 마음에서 탄생했습니다. 사진과 함께 감정을 기록하고, 순간을 더 특별하게 기억할 수 있도록 돕기 위해 우리는 이 서비스를 만들었습니다. Cookiee-는 여러분의 하루하루를 더욱 특별하게 만들기 위해, 일상의 작은 행복을 간직하고, 나누는 새로운 방식을 제안합니다.',
    description:
      '🍪 사진과 함께 꾸미는 캘린더\nCookiee-는 캘린더에 사진을 첨부할 수 있어요. 매일의 일들을 글뿐만 아니라 사진으로 생생하게 남길 수 있습니다. 하루에 생긴 여러 일들을 여러 장의 사진과 함께 남길 수 있으며, 사진과 함께 제목, 카테고리, 장소, 사람 등의 정보를 작성하여 더욱 상세하게 기록할 수 있습니다.\n\n🍪 카테고리로 일상을 키워드화\nCookiee-는 카테고리 기능을 통해 일상을 키워드화 할 수 있어요. 직접 색상, 카테고리 이름을 지정하여 일상 속 일들이 어떤 일들이었는지 지정할 수 있습니다. 이후 카테고리 별로 나의 일상들을 찾아볼 수 있습니다.',
    memberList: [
      {
        index: 0,
        image: '/images/memberProfiles/kyungminseo.png',
        name: '경민서',
        part: 'frontend',
        position: '프론트엔드',
        isLeader: false,
        review:
          '이번 년도엔 작년에 React Native로 개발했던 Cookiee를 SwiftUI로, 디자인 업데이트까지 반영하여 개발하게 되었습니다. 이전에 개발했던 RN 프로젝트에서 조금 더 직관적으로 디자인 된 것 같고 불필요한 기능들까지 제거되어 저 스스로 개발하면서도 이전 프로젝트보다 더 발전한 느낌을 받을 수 있어 뿌듯했습니다. 거의 갈아엎은 디자인이고 수료부원인데 열심히 디자인 해준 수연언니에게 많은 도움을 받았습니다 👍🏻 SwiftUI로 개발하면서는 처음부터 이해해야 할 것들이 너무 많았지만, 우선 도전해본다는 마인드로 개발을 시작했는데, 구글링 자료가 많이는 있지 않아서 힘든 부분이 있기도 했습니다. 하지만 Cookiee가 더 좋은 기능을 담을 수 있는 서비스로 발전시키고 싶은 욕심이 들어 더 열심히 개발에 참여했습니다 🫡 두 수료부원 언니들과 작년에 만든 인연을 길게 함께할 수 있어서 너무 좋았고, 또 1년 더 APPS 프로젝트에 참여해주어 감사하다는 말을 전하고 싶습니다. 🥰',
      },
      {
        index: 1,
        image: '/images/memberProfiles/joyeongseo.jpg',
        name: '조영서',
        part: 'backend',
        position: '백엔드',
        isLeader: true,
        review:
          '작년에 개발하였던 APPS의 Cookiee-를 다른 프론트 스택으로 개발한 한 해였습니다. 그 과정에서 서버도 다시 한 번 돌아볼 수 있는 귀한 시간이었습니다. 작년에 해결하지 못하여 아쉬움이 남았던 기술적인 문제들을 모두 해결하면서 프로젝트의 완성도를 높일 수 있었습니다. 나 자신이 쓴다는 마음으로 개발하다 보니 1년도 훌쩍 지나갔네요. 새로운 기술적인 도전을 한 민서와 수연이한테 모두 존경을 표하며, 남은 3월 전시회까지도 신규 기능 확장에 힘을 더욱 써, 새로운 Cookiee-로 만나볼 수 있도록 노력하겠습니다.',
      },
      {
        index: 2,
        image: '/images/memberProfiles/hwangsuyeon.jpg',
        name: '황수연',
        part: 'backend',
        position: '백엔드',
        isLeader: false,
        review:
          '어쩌다보니 올해 APPS 전시회에도 제가 등장하네요 하하… 작년에 팀원들끼리 임의로 만든  와이어프레임으로 프론트 개발을 진행했었는데요. 이 부분에서 아쉬움을 많이 느껴서 많이 부족하지만 올해에는 백엔드가 아닌 디자인 파트로 Cookiee- 프로젝트에 참여했습니다. 프론트 개발을 주로 했었던 터라 하나의 화면을 만들 때마다 우리의 원래 화면과 비슷하고, 깔끔하고, 최대한 ‘구현’ 가능한 방향으로 나름 예쁘게 디자인하려고 했던 것 같아요. 나름 개발자 친화적인 디자이너였다고나 할까요.. ㅎㅎ 처음으로 디자인이라는 것을 하면서 사용자 친화성과 미적인 아름다움을 동시에 만족시키는 것이 참 어렵다는 것을 느꼈습니다. 또 피그마 다루는 스킬도 엄청 늘었네요. ㅎㅎ 개발이 아닌 디자인이라는 새로운 영역을 도전해볼 수 있어서 의미있는 시간이었습니다. 제가 구성한 화면을 잘 만들어준 프론트 팀원 민서 고맙습니다! 또, 민서 영서 둘이서 부족한 인력으로 프로젝트하느라 정말 고생했습니다! 정식 iOS 출시까지 기대해주세요!',
      },
    ],
    techStackList: [
      {
        name: 'Spring Boot',
        imageUrl: '/images/techStacks/spring-boot.png',
      },
      {
        name: 'SwiftUI',
        imageUrl: '/images/techStacks/swiftui.png',
      },
      {
        name: 'MySQL',
        imageUrl: '/images/techStacks/mysql.png',
      },
      {
        name: 'AWS',
        imageUrl: '/images/techStacks/aws.png',
      },
      {
        name: 'Nginx',
        imageUrl: '/images/techStacks/nginx.svg',
      },
    ],
  },
  {
    id: 3,
    name: 'OUTFOOT',
    generation: ['10기', '10.5기'],
    category: PROJECT_CATEGORIES.APP,
    imageUrl: '/images/thumbnails/outfoot.png',
    youtubeVideoId: '',
    downloadLinkUrl: null,
    webpageLinkUrl: '',
    githubUrls: {
      clientUrl: 'https://github.com/APPS-sookmyung/2024-OUTFOOT-client',
      serverUrl: 'https://github.com/APPS-sookmyung/2024-OUTFOOT-Server',
    },
    summary:
      '목표를 달성할 때마다 동물 발바닥 도장으로 한 걸음씩 기록해보세요.',
    introduction:
      'OUTFOOT은 output과 foot의 합성어로 목표 달성 과정을 귀여운 동물 발바닥 도장을 통해 기록하여 성취감을 쌓아보세요. 매일 목표를 달성할 때마다 동물 발바닥을 도장판에 채워가는 재미있는 방식으로 스스로를 칭찬하며 동기부여를 계속 이어가세요. 하루하루 목표를 이룰 때마다 점점 더 완성되는 도장판을 보며 꾸준히 성장할 수 있습니다.',
    description:
      '🐾 목표 달성 시 칭찬 도장 추가\n매일 설정한 목표를 달성하면 동물 발바닥 도장을 찍어 성취를 기록합니다. 도장이 쌓일수록 자랑스러운 목표 달성의 흔적을 남길 수 있습니다.\n\n🐾 목표 달성 인증\n목표를 달성한 후, 인증 절차를 통해 보여주기 식 도장판 채우기가 아닌 진정성 있는 목표 달성을 할 수 있습니다. 인증된 성과는 도장판에 기록되어 성취감을 더욱 의미 있게 만들어줍니다.\n\n🐾 발자국으로 성취 시각화\n매일 목표를 이루며 남긴 발자국들이 쌓여 가는 과정을 보며 성취감을 느낄 수 있습니다. 발자국 하나하나가 목표를 향한 꾸준한 걸음을 나타냅니다.\n\n🐾 나만의 목표 관리 시스템\n목표를 설정하고, 그 목표를 달성할 때마다 도장판을 채워가며 자기 주도적인 목표 관리가 가능합니다. 매일 목표를 이룰 때마다 스스로에게 칭찬을 보내세요.',
    memberList: [
      {
        index: 0,
        image: '/images/memberProfiles/jeongjiwon.png',
        name: '정지원',
        part: 'frontend',
        position: '프론트엔드장',
        isLeader: false,
        review:
          '앱스에서 하는 두 번째 팀 프로젝트였는데, 리드로서 어떻게 이끌면 좋을 지 고민하고 팀원들과 함께 성장할 수 있어서 너무 좋은 경험이었습니다. 더 완성도 있게 만들고 싶었는데 부족했던 것 같아 아쉬움이 남습니다. 소통도 좀 더 활발히 하도록 적극적으로 이끌었어야 했는데 하는 아쉬움도 남습니다. 하지만 개발뿐만 아니라 모든 팀원들이 모여서 디자인에 대한 의견도 제시하고 모든 기능에 적극적으로 참여했기에 더욱 뜻깊었던 것 같습니다.',
      },
      {
        index: 1,
        image: '/images/memberProfiles/jeongseoyeon.png',
        name: '정서연',
        part: 'frontend',
        position: '프론트엔드',
        isLeader: true,
        review:
          "먼저 저에게 너무 과분한 우리 팀원들에게 고맙다는 말을 전하고 싶습니다! 부족한 저를 포기하지 않고 이끌어준 우리 OUTFOOT 팀원들 정말 정말 고마워요. 덕분에 멋진 결과물을 만들 수 있었습니다! 솔직히 말하자면 패기롭게 시작했던 것에 비해 현실은 녹록지 않았습니다. 첫 프로젝트여서 더 잘하고 싶은 마음이 들었지만 한편으로는 '내가 이걸 할 수 있을까'하는 의심이 계속해서 들었던 것 같아요. 그럴 때마다 팀원들의 채찍과 격려를 통해 간신히 나아갈 수 있었습니다. 정말 힘들었지만 그만큼 뿌듯하기도 하네요. 마지막으로 특히나 정말 고생 많이 한 프론트엔드 팀원들에게 다시 한번 감사의 말을 전합니다!",
      },
      {
        index: 2,
        image: '/images/memberProfiles/leehaerim.png',
        name: '이해림',
        part: 'frontend',
        position: '프론트엔드',
        isLeader: false,
        review:
          '이번 프로젝트는 제가 앱스에 들어와서 처음으로 배운 플러터를 가지고 프론트에 도전한 결과물입니다. 처음에 엄청 자신없었는데 우리 프론트엔드분들이 실무 지식 많이 공유해주시고 충돌도 같이 해결해나가면서 조금씩 자신감을 얻었습니다. 또 그만큼 엄청 굴렀지만요ㅎㅎ 눈에 딱 보이는 스크린이라 지금 이상태에 엄청 만족은 못하지만 최선을 다했다는 것만은 알아주세요 그리고 우리 백엔드분들도 빠르게 로직 완성해주셔서 감사하고 프론트가 늦어서 미안합니다 우리 아웃풋 화이팅!',
      },
      {
        index: 3,
        image: '/images/memberProfiles/jooajung.png',
        name: '주아정',
        part: 'backend',
        position: '백엔드장',
        isLeader: false,
        review:
          '제 첫 백엔드장으로써 프로젝트를 마무리하고 회고를 쓰는 게 아직까지도 믿기지 않습니다. 3월에 시작해 기나긴 여름방학을 지나 벌써 1년 가까이 프로젝트를 하면서 여러 사건사고도 많았지만 훌륭하게 마무리할 수 있던 건 함께 달려온 아웃풋 팀원들 덕분인 것 같습니다. 모르는 것 투성이에 실수도 잦았지만 무사히 마무리할 수 있었습니다. 팀워크가 무엇인지 다시 한 번 깨닫게 되고, 외적으로나 내적으로나 성장할 수 있는 한해를 아웃풋으로 마무리할 수 있어 기쁩니다. 서로 맞춰가며 긍정적인 시너지를 준 덕에 무사히 끝낼 수 있었습니다. 모두들 너무 수고했고, 오프라인 전시회까지 조금 더 힘내봅시다!',
      },
      {
        index: 4,
        image: '/images/memberProfiles/leejieun.png',
        name: '이지은',
        part: 'backend',
        position: '백엔드',
        isLeader: false,
        review:
          '이번 프로젝트는 제가 참여한 첫 팀 프로젝트로, 이렇게 회고를 작성하고 있는 지금도 감회가 새롭습니다. 처음엔 모르는 것도 많고 두려움도 있었지만, 팀원들과 함께하며 많은 것을 배울 수 있었습니다. 프로젝트를 진행하며 특히 좋았던 점은 팀원들과 함께 성장할 수 있었다는 것입니다. 각자의 역할을 책임감 있게 해내면서도 서로 도와가며 새로운 기술을 배우고, 문제를 해결해 나가는 과정이 저에게는 큰 자극이 되었습니다. 팀원들과의 소통을 통해 더 좋은 결과물을 만들 수 있었고, 이 과정에서 저도 성장할 수 있었던 점이 무엇보다 뿌듯합니다. 프로젝트를 시작하기 전에는 도전 자체가 겁이 나서 망설였던 저였지만, 이번 경험을 통해 도전할 용기를 얻을 수 있었습니다. 처음 백엔드 개발을 하며 부족한 점도 많았지만, 팀원들과 함께 고민하고 협력하는 과정에서 저도 제 역할을 다해낼 수 있었습니다. 덕분에 개발에 대한 자신감이 생겼고, 앞으로도 새로운 일에 더 적극적으로 나설 수 있는 계기가 된 것 같습니다. 함께 긍정적인 시너지를 만들어준 팀원들에게 정말 감사한 마음이 큽니다. 힘들었던 순간도 있었지만, 서로를 격려하며 멋진 결과물을 완성할 수 있었습니다. 이번 경험은 저에게 큰 성장이었고, 함께 달려온 팀원들과의 추억은 오래도록 기억에 남을 것 같습니다. 오프라인 전시회 준비도 모두 화이팅하고, 다시 한번 팀원들 모두에게 감사하다는 말을 전하고 싶습니다!',
      },
      {
        index: 5,
        image: '/images/memberProfiles/yoonhyeonseo.png',
        name: '윤현서',
        part: 'backend',
        position: '백엔드',
        isLeader: false,
        review:
          '팀원들 덕분에 첫 팀프로젝트를 잘 마무리할 수 있게 돼서 정말 고맙고 뿌듯한 마음이 듭니다! 이번 경험을 통해서 제가 맡은 파트에 대해 책임감을 가질 수 있었고, 더 좋은 개발과 아이디어를 위해 소통하고 노력하는 방법에 대해 많이 배울 수 있었습니다. 개발 초보에게 항상 친절히 도움을 준 백엔드장 아정이와 든든하게 맡은 걸 끝내준 지은언니에게 고맙고, 디자인에 어려움이 있었음에도 노력해주고 있는 프론트엔드 팀원들도 고맙다는 말을 전하고 싶습니다.',
      },
      {
        index: 6,
        image: '/images/memberProfiles/moonseoyoung.png',
        name: '문서영',
        part: 'design',
        position: '디자인',
        isLeader: false,
        review: '',
      },
    ],
    techStackList: [
      {
        name: 'Flutter',
        imageUrl: '/images/techStacks/flutter.png',
      },
      {
        name: 'Dart',
        imageUrl: '/images/techStacks/dart.svg',
      },
      {
        name: 'Dio',
        imageUrl: '/images/techStacks/dio.png',
      },
      {
        name: 'Spring Boot',
        imageUrl: '/images/techStacks/spring-boot.png',
      },
      {
        name: 'MySQL',
        imageUrl: '/images/techStacks/mysql.png',
      },
      {
        name: 'Java17',
        imageUrl: '/images/techStacks/java.png',
      },
      {
        name: 'AWS',
        imageUrl: '/images/techStacks/aws.png',
      },
      {
        name: 'docker',
        imageUrl: '/images/techStacks/docker.png',
      },
      {
        name: 'GitHub Actions',
        imageUrl: '/images/techStacks/github-actions.png',
      },
      {
        name: 'Gradle',
        imageUrl: '/images/techStacks/gradle.png',
      },
      {
        name: 'OAuth2.0',
        imageUrl: '/images/techStacks/oauth2.png',
      },
      {
        name: 'Spring Data JPA',
        imageUrl: '/images/techStacks/spring-data-jpa.png',
      },
      {
        name: 'Apache',
        imageUrl: '/images/techStacks/apache.png',
      },
    ],
  },
  {
    id: 4,
    name: '숙메추Real',
    generation: ['11기'],
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnails/sookmechu-real.jpg',
    youtubeVideoId: 'zxaE0FIQRZ4',
    downloadLinkUrl: null,
    webpageLinkUrl: 'https://2024-sookmechu-real.vercel.app/',
    githubUrls: {
      clientUrl: 'https://github.com/Heoooooo/2024-Sookmechu_real.git',
      serverUrl: '',
    },
    summary:
      '학교 다니며 매일 고민되는 식사 메뉴, 맛있는 음식들로 추천받아보세요 !',
    introduction:
      '숙메추Real 웹페이지를 통해 매일매일 고민되는 식사 메뉴들을 추천받아 보세요 ! 숙대 맛집 지도에 있는 식당들마다 숙대생들이 자주먹는 맛있는 메뉴들과 가게마다 특별한 점을 소개합니다. 일상 속에서 먹었던 음식들과 가게들을 기억하기 쉽게 기록해보세요 !',
    description:
      '🐥맛집  지도 속 가게들에 대한 정보얻기\n지도 속 가게들을 클릭하여 가게에 대한 맛있는 메뉴와 특징들을 알 수 있습니다.\n\n🐥앞으로 갈 To Eat List 작성하기\n가고 싶었던 가게 혹은 갈 예정인 가게와 먹을 메뉴를 리스트할 수 있습니다.\n\n🐥메뉴 추천 받기\n메뉴가 고민된다면 가게들을 랜덤하게 추천받을 수 있습니다.\n\n🐥나의 기록 저장하기\n내가 갔던 가게들에 대한 좋은 점, 안 좋은 점을 기록하여 오랫동안 기억하고, 검색 기능이 있어 편하게 찾아볼 수 있습니다.',
    memberList: [
      {
        index: 0,
        image: '/images/memberProfiles/yuhayeon.png',
        name: '유하연',
        part: 'frontend',
        position: '프론트엔드',
        isLeader: false,
        review:
          '처음으로 꽤 긴 기간인 반 학기 동안 프로젝트를 진행해봤는데 모르는 개념이 있으면 혼자서 찾아보고 적용해보는 과정에서 책임감을 느끼고 즐겁게 진행할 수 있었습니다. 그 뿐만 아니라 개인프로젝트이더라도 매주 발표를 진행하면서 다른 개인 프로젝트 멤버들의 아이디어와 사용되는 기술들을 보며 많은 것들을 배우고 공유함으로써 많은 도움이 되었습니다. 이후에도 혼자가 아닌 다른 팀원들과 머리를 맞대고 부족한 부분을 해결해가면서 더 많은 것을 배워갈 기회가 있으면 합니다. 🩵',
      },
    ],
    techStackList: [
      {
        name: 'HTML',
        imageUrl: '/images/techStacks/html.png',
      },
      {
        name: 'CSS',
        imageUrl: '/images/techStacks/css.png',
      },
      {
        name: 'JavaScript',
        imageUrl: '/images/techStacks/javascript.png',
      },
    ],
  },
  {
    id: 5,
    name: 'StudyTracker',
    generation: ['11기'],
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnails/studytracker.png',
    youtubeVideoId: 'PykXOLwgGC0',
    downloadLinkUrl: null,
    webpageLinkUrl: 'https://yoon-jr.github.io/2024-StudyTracker/',
    githubUrls: {
      clientUrl: 'https://github.com/yoon-jr/2024-StudyTracker',
      serverUrl: '',
    },
    summary: '나만의 공부 관리 메이트 StudyTracker',
    introduction:
      'StudyTracker- 공부 시간을 측정하고 계획을 세우며 효율적으로 나의 공부를 관리해보세요! 오늘 공부한 내용의 노트 작성을 통해 배운 내용을 정리할 수 있습니다.',
    description:
      '⏱️ 공부 시간 측정\n공부 시간을 측정하여 오늘 공부한 총 시간을 알 수 있습니다.\n\n✏️ 공부 계획 작성\n오늘 해야 할 공부 계획들을 작성하고 완료 시에 체크할 수 있습니다.\n\n📚 공부 노트 작성\n과목 카테고리별로 공부 노트를 작성할 수 있습니다.',
    memberList: [
      {
        index: 0,
        image: '/images/memberProfiles/yoonjeongran.png',
        name: '윤정란',
        part: 'frontend',
        position: '프론트엔드',
        isLeader: false,
        review:
          '앱스에서 첫 프로젝트로 공부 관리 웹페이지를 만들었습니다. 1학기 때 배운 내용과 웹시설 수업을 통해 배운 내용을 활용하여 개발했습니다. 생각대로 결과가 잘 나오지 않을 때, 제가 아는 게 너무 없다고 느껴질 때 힘들었지만 최선을 다해 낸 결과를 보는 지금 감회가 새롭습니다. 이번 프로젝트를 통해 웹 프로그래밍 지식을 활용해 볼 수 있었고 오류를 해결하거나 기능을 구현하며 새로운 내용을 배울 수 있었습니다. 앞으로도 많이 배우고 실력을 키워서 더 좋은 결과물을 만들고 싶습니다!',
      },
    ],
    techStackList: [
      {
        name: 'HTML',
        imageUrl: '/images/techStacks/html.png',
      },
      {
        name: 'CSS',
        imageUrl: '/images/techStacks/css.png',
      },
      {
        name: 'JavaScript',
        imageUrl: '/images/techStacks/javascript.png',
      },
    ],
  },
  {
    id: 6,
    name: 'studypage',
    generation: ['11기'],
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnails/studypage.jpg',
    youtubeVideoId: 'cdGniy_KXRY',
    downloadLinkUrl: null,
    webpageLinkUrl: 'https://seobin0224.github.io/2024-studypage/',
    githubUrls: {
      clientUrl: 'https://github.com/seobin0224/2024-studypage',
      serverUrl: '',
    },
    summary: '체계적인 학습 관리로 당신의 학업 성취를 높여보세요!',
    introduction:
      'studypage - 당신의 학업 여정을 더 스마트하게 관리하고 싶으신가요? StudyPlanner와 함께라면 가능합니다! 과목별 학습 계획을 수립하고, 진도를 추적하며, 학습 성과를 한눈에 확인할 수 있습니다.',
    description:
      '📚 과목별 맞춤 계획\n\n교수님, 학기 정보와 함께 과목을 등록하고 주차별 학습 계획을 세워보세요\n실제 학습 시간을 기록하고 완료된 학습을 체크하며 동기부여를 얻으세요\n\n📊 직관적인 대시보드\n\n전체 과목의 진행 상황을 한눈에 파악할 수 있어요\n가장 열심히 공부한 과목, 평균 학습 시간 등 인사이트를 제공합니다\n\n📈 상세한 진도 관리\n\n과목별, 주차별 진행률을 다양한 차트로 확인하세요\n전체 완료율과 학습 시간 추이를 그래프로 분석해보세요\n\n✍️ 퀴즈 생성기\n\n학습 내용을 토대로 퀴즈를 만들고 풀어보세요\n즉각적인 채점으로 학습 성취도를 확인할 수 있습니다',
    memberList: [
      {
        index: 0,
        image: '/images/memberProfiles/yoonseobin.png',
        name: '윤서빈',
        part: 'frontend',
        position: '프론트엔드',
        isLeader: false,
        review:
          '혼자서 프로젝트를 진행하면서 때로는 막막함을 느꼈지만, 주변 동료들의 열정적인 분위기에 힘입어 프로젝트를 성공적으로 완수할 수 있었습니다. 특히 디자인부터 기획까지 전 과정을 주도적으로 수행하면서, 제 적성과 강점을 더 명확히 파악할 수 있었습니다.\n이 과정에서 제가 특히 흥미를 느끼는 분야를 발견했을 뿐만 아니라, 앞으로 더 깊이 공부하고 싶은 영역도 구체화할 수 있었습니다. 혼자서는 달성하기 어려웠을 큰 성장을 이뤄낼 수 있었던 것은, 이런 도전적인 기회가 주어졌기 때문이라고 생각합니다.\n이번 프로젝트는 단순한 과제 수행을 넘어서, 제 역량을 전반적으로 향상시키고 앞으로의 성장 방향을 설정하는 소중한 경험이 되었습니다.',
      },
    ],
    techStackList: [
      {
        name: 'JavaScript',
        imageUrl: '/images/techStacks/javascript.png',
      },
      {
        name: 'HTML',
        imageUrl: '/images/techStacks/html.png',
      },
      {
        name: 'TailwindCSS',
        imageUrl: '/images/techStacks/tailwindcss.png',
      },
      {
        name: 'Chart.js',
        imageUrl: '/images/techStacks/chartjs.png',
      },
    ],
  },
  {
    id: 7,
    name: '여기저기',
    generation: ['11기'],
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnails/hereandthere.png',
    youtubeVideoId: 'NjM8R7YXVTs',
    downloadLinkUrl: null,
    webpageLinkUrl:
      'https://hereandthere-v6q9-bweqxeq5z-yeonjoos-projects.vercel.app',
    githubUrls: {
      clientUrl: 'https://github.com/y-Joo492/hereandthere.git',
      serverUrl: '',
    },
    summary: '여행의 순간을 기억하고 간직하세요!',
    introduction:
      "여기저기- 여행의 순간을 기억하고 간직하세요. 여러분이 남긴 여행 기록과 사진을 통해 소중한 추억을 자주 떠올리고, 그때의 감정과 느낌을 잊지 않도록 도와줄게요. '여기저기'에서 추억을 남겨보세요!",
    description:
      '🧳 나의 여기저기 모아보기\n국내, 해외의 여행기록을 각각 모아볼 수 있습니다.\n\n🧳 사진으로 추억하기\n내가 업로드한 여행 사진들을 모아볼 수 있습니다.',
    memberList: [
      {
        index: 0,
        image: '/images/memberProfiles/hongyeonjoo.png',
        name: '홍연주',
        part: 'frontend',
        position: '프론트엔드',
        isLeader: false,
        review:
          '2024년에 APPS에 들어와서 하는 첫 프로젝트였습니다. 제가 배운 기능들도 사용해 보고, 찾아보고 사용한 기능들도 사용하면서 많이 성장할 수 있었습니다. 단순히 코딩만 한 게 아니라 하나의 프로젝트를 완성하면서 디자인부터 기능 구현까지 스스로 하면서 웹사이트 개발에 이전보다 다양한 시야를 가지게 되었습니다. 또, 개발을 하는동안 다른 부원들과 이야기를 나누고, 고민을 해결하면서 재미있게 완성할 수 있었습니다.',
      },
    ],
    techStackList: [
      {
        name: 'HTML',
        imageUrl: '/images/techStacks/html.png',
      },
      {
        name: 'CSS',
        imageUrl: '/images/techStacks/css.png',
      },
      {
        name: 'JavaScript',
        imageUrl: '/images/techStacks/javascript.png',
      },
    ],
  },
  {
    id: 8,
    name: '펫토리 (PETTORY)',
    generation: ['11기'],
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnails/pettory.png',
    youtubeVideoId: 'lWifRbnsv3w',
    downloadLinkUrl: null,
    webpageLinkUrl: 'https://suminb99.github.io/2024-MYP/',
    githubUrls: {
      clientUrl: 'https://github.com/suminb99/2024-MYP',
      serverUrl: '',
    },
    summary: '귀여운 동물 사진에 나만의 스토리를 담아보세요!',
    introduction:
      '재밌는 동물 밈이나 짤을 직접 만들어보고 싶은 분들을 위한 서비스입니다. 다양한 동물 사진에 텍스트와 그림을 더해 손쉽게 특별하고 재미있는 밈을 제작해보세요!',
    description:
      '간편한 편집 도구를 활용하여 나만의 귀여운 동물 밈을 제작할 수 있습니다!\n\n⭐ 원하는 동물 사진을 직접 업로드할 수 있습니다.\n⭐ 텍스트, 말풍선, 그림 등 다양한 요소를 추가하여 자유롭게 밈을 꾸밀 수 있습니다.\n⭐ 완성된 밈은 다운로드하여 소장할 수 있습니다.',
    memberList: [
      {
        index: 0,
        image: '/images/memberProfiles/baeksumin.png',
        name: '백수민',
        part: 'frontend',
        position: '프론트엔드',
        isLeader: false,
        review:
          '요즘 귀여운 동물을 주제로 한 밈이나 짤이 정말 많잖아요. 저 같은 똥손도 쉽고 간단하게 밈을 만들 수 있는 웹사이트가 있으면 좋겠다는 생각에서 출발한 프로젝트입니다. 사용자의 입장에서 필요한 기능과 좋은 디자인이 무엇인지 고민하면서 개발에 임했습니다. 첫 개인 프로젝트라 예상치 못한 시행착오도 많았고 아쉬운 부분도 분명 존재하지만, 무사히 잘 마무리하게 되어 정말 기쁩니다!',
      },
    ],
    techStackList: [
      {
        name: 'HTML',
        imageUrl: '/images/techStacks/html.png',
      },
      {
        name: 'CSS',
        imageUrl: '/images/techStacks/css.png',
      },
      {
        name: 'JavaScript',
        imageUrl: '/images/techStacks/javascript.png',
      },
    ],
  },
  {
    id: 9,
    name: 'BookMemories',
    generation: ['11기'],
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnails/bookmemories.png',
    youtubeVideoId: '0v4HJo_0gzk',
    downloadLinkUrl: null,
    webpageLinkUrl: 'https://jimni3155.github.io/2024-BookMemories/',
    githubUrls: {
      clientUrl: 'https://github.com/jimni3155/2024-BookMemories',
      serverUrl: '',
    },
    summary: '책 속의 기억을 펼쳐보세요!',
    introduction:
      'BookMemories- 당신의 독서 기록을 간직하세요! 읽고 싶은 책과 읽은 책을 모으고, 오늘의 기록을 달력에 남겨보세요. 책 속에서 발견한 소중한 순간들을 기록하며, 나만의 독서 여정을 만들어보세요. 지금 바로 시작해보세요!',
    description:
      'BookMemories는 단순히 책 정보를 저장하는 것을 넘어, 독서를 즐기는 모든 순간을 기록하고 간직할 수 있도록 설계된 사용자 중심의 서비스입니다. 독서가 일상에 작은 즐거움이 될 수 있도록 돕는 것을 목표로 합니다.\n📖 ‘읽은 책’ & ‘읽을 책’으로 구분하여 책 표지를 업로드\n📖 책 표지 클릭 시, 해당 책과 관련된 간단한 메모 작성 및 편집 가능\n📖 독서 캘린더 기능을 통해, 오늘 읽은 책을 달력에 기록',
    memberList: [
      {
        index: 0,
        image: '/images/memberProfiles/kimjimin.png',
        name: '김지민',
        part: 'frontend',
        position: '프론트엔드',
        isLeader: false,
        review:
          '이번 개인 프로젝트는 처음부터 끝까지 직접 웹사이트를 설계하고 구현하며 많은 것을 배울 수 있었던 소중한 기회였습니다. 디자인, 개발, 디버깅 과정에서의 도전은 쉽지 않았지만, 문제를 하나씩 해결하며 스스로 성장하고 있다고 느꼈습니다. 깃허브와 같은 협업 툴을 활용해 크고 작은 팀 프로젝트에도 참여하여 더 깊이 있는 개발 지식을 쌓고 싶습니다. 너무 귀한 경험과 시간이었습니다. 감사합니다.😊',
      },
    ],
    techStackList: [
      {
        name: 'HTML',
        imageUrl: '/images/techStacks/html.png',
      },
      {
        name: 'CSS',
        imageUrl: '/images/techStacks/css.png',
      },
      {
        name: 'JavaScript',
        imageUrl: '/images/techStacks/javascript.png',
      },
    ],
  },
  {
    id: 10,
    name: 'GreenTalk',
    generation: ['11기'],
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnails/greentalk.png',
    youtubeVideoId: 'djZltHR4lRM',
    downloadLinkUrl: null,
    webpageLinkUrl: 'https://apps-sookmyung.github.io/2024-GreenTalk/',
    githubUrls: {
      clientUrl: 'https://github.com/APPS-sookmyung/2024-GreenTalk',
      serverUrl: '',
    },
    summary: '식물과의 하루를 기록하고 탐색해보세요!',
    introduction:
      '다양한 테마로 식물을 탐색하고, 관리 팁을 배우며 나만의 식물 컬렉션을 채워보세요.\nJournal 기능으로 소중한 순간을 기록하고, FAQ로 궁금증을 해결하며 식물과의 유대감을 키워보세요!',
    description:
      '🌱 테마별 식물 탐색\n다양한 테마에 따라 식물 정보를 탐색하고 나만의 스타일에 맞는 식물을 추천 받으세요.\n\n🌱 FAQ (자주 묻는 질문)\n식물 관리 중 궁금한 점들을 한눈에 확인하세요. 원하는 정보가 없다면 언제든지 질문해 주세요!\n\n🌱 Journal (일기 작성)\n식물과 함께한 특별한 순간들을 기록하세요!',
    memberList: [
      {
        index: 0,
        image: '/images/memberProfiles/hajimin.png',
        name: '하지민',
        part: 'frontend',
        position: '프론트엔드',
        isLeader: false,
        review:
          '처음 프로젝트를 시작할 땐 막막하고 걱정도 많았어요. "내가 잘 해낼 수 있을까?" 하는 생각에 걱정도 정말 많았죠. 😅 하지만 이렇게 프로젝트를 끝내고 보니, 그런 걱정과 두려움을 이겨내고 성장했다는 사실에 뿌듯하고 기뻐요! 😄\n물론 첫 프로젝트라 아쉬운 점도 있었어요. 기획 단계에서 예상치 못한 변수가 생겨 일정이 좀 늦어지기도 했고, 리액트로 새로 구현하는 게 생각보다 쉽지 않았거든요. 😔 그래도 이런 경험들을 통해 정말 많은 걸 배우고 느꼈어요. 앞으로 더 멋진 프로젝트를 해낼 수 있다는 자신감도 생겼고요! 💪\n이번 프로젝트에서 결과적으로 리액트로 완벽하게 바꾸진 못했지만 리액트를 전보다  능숙하게 다룰 수 있게 된 게 가장 큰 수확인 것 같아요. 이젠 좀 더 어려운 프로젝트에도 도전해서 스스로를 더 발전시켜 나가고 싶어요. 😊',
      },
    ],
    techStackList: [
      {
        name: 'HTML',
        imageUrl: '/images/techStacks/html.png',
      },
      {
        name: 'CSS',
        imageUrl: '/images/techStacks/css.png',
      },
      {
        name: 'JavaScript',
        imageUrl: '/images/techStacks/javascript.png',
      },
      {
        name: 'React',
        imageUrl: '/images/techStacks/react.png',
      },
    ],
  },
  {
    id: 11,
    name: 'MERRY TREE',
    generation: ['11기'],
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnails/merry-tree.png',
    youtubeVideoId: 'XZQLIB2VQhw',
    downloadLinkUrl: null,
    webpageLinkUrl: 'https://merry-tree.netlify.app/',
    githubUrls: {
      clientUrl: 'https://github.com/APPS-sookmyung/2024-MERRY-TREE',
      serverUrl: '',
    },
    summary: '게임을 통해 오너먼트를 얻어 트리를 꾸며보세요!',
    introduction:
      '카드 매칭 게임에서 같은 모양의 오너먼트를 찾으면 해당 오너먼트로 트리를 꾸밀 수 있어요. 트리 옆에 메시지를 작성한 후 캡처하여 소중한 사람에게 보내보세요!😊',
    description:
      '🎄 카드 매칭 게임하기\n뒤집어진 카드들 중 임의의 카드 2장을 클릭하여 같은 모양의 오너먼트를 짝을 맞춰 찾습니다.\n\n🎄 크리스마스 트리 꾸미기\n카드 매칭 게임을 통해 얻은 오너먼트들로 트리를 직접 꾸밀 수 있습니다.\n\n🎄 메시지 작성하기\n꾸민 트리 옆에 메시지를 작성할 수 있습니다.',
    memberList: [
      {
        index: 0,
        image: '/images/memberProfiles/bangjihee.png',
        name: '방지희',
        part: 'frontend',
        position: '프론트엔드',
        isLeader: false,
        review:
          '개인 웹 프로젝트를 진행하며 웹 개발에 대한 지식을 많이 쌓을 수 있어서 좋았습니다. 첫 프로젝트여서 처음에는 어디서부터 시작해야 할지 정말 막막했습니다. 하지만 계속해서 공부하며 처음 구상한 대로 프로젝트를 완성할 수 있었습니다. 어려움도 많았고 오류도 자주 발생했는데, 해결하는 과정에서 많이 발전하고 성장한 것 같아서 뿌듯합니다. 이러한 값진 경험을 바탕으로 앞으로도 좋은 프로젝트를 진행하고 싶습니다!',
      },
    ],
    techStackList: [
      {
        name: 'HTML',
        imageUrl: '/images/techStacks/html.png',
      },
      {
        name: 'CSS',
        imageUrl: '/images/techStacks/css.png',
      },
      {
        name: 'JavaScript',
        imageUrl: '/images/techStacks/javascript.png',
      },
    ],
  },
  {
    id: 12,
    name: '주량도',
    generation: ['11기'],
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnails/juryangdo.png',
    youtubeVideoId: 'Br-72VztyG8',
    downloadLinkUrl: null,
    webpageLinkUrl: 'https://juryangdo.netlify.app/',
    githubUrls: {
      clientUrl: 'https://github.com/APPS-sookmyung/2024-Juryangdo',
      serverUrl: '',
    },
    summary: '당신의 주량을 확인하세요',
    introduction:
      '숫자에 불과한 도수, 이제 안녕! 주량을 입력하고 술의 도수를 마실 수 있는 잔으로 확인하세요!',
    description:
      '🍾 주량 입력하기\n계산을 위해 주량을 입력합니다.\n\n🍺 마실 수 있는 잔 확인하기\n술의 도수를 마실 수 있는 잔으로 계산한 결과를 확인할 수 있습니다.\n\n🍷 술 정보 확인하기\n주종, 제조사, 제조국, 맛의 특징 등에 대한 정보를 얻을 수 있습니다.',
    memberList: [
      {
        index: 0,
        image: '/images/memberProfiles/leedabin.png',
        name: '이다빈',
        part: 'frontend',
        position: '프론트엔드',
        isLeader: false,
        review:
          '평소 다양한 술을 맛보는 걸 좋아하고, 숫자로만 적힌 도수에 불편함을 느껴 이번 프로젝트를 기획했습니다. 디자인, 개발을 혼자 해야 한다는 부담이 있었지만, 방학 동안 꾸준히 개발한 덕에 완성할 수 있었습니다. 처음 Vanilla JS로 개발하다 보니 시행착오가 많았지만 html, CSS, JavaScript에 대한 이해를 높이는 보람차고 좋은 경험이었습니다. 주량을 테스트하고 술의 정보를 얻는 재밌고 유익한 프로젝트가 되었으면 합니다.',
      },
    ],
    techStackList: [
      {
        name: 'HTML',
        imageUrl: '/images/techStacks/html.png',
      },
      {
        name: 'CSS',
        imageUrl: '/images/techStacks/css.png',
      },
      {
        name: 'JavaScript',
        imageUrl: '/images/techStacks/javascript.png',
      },
    ],
  },
  {
    id: 13,
    name: 'BDB - Birth Day Buddy',
    generation: ['11기'],
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnails/birthdaybuddy.png',
    youtubeVideoId: 'IFhnbUhTuYY',
    downloadLinkUrl: null,
    webpageLinkUrl: 'https://birthdaybuddy2024.vercel.app/',
    githubUrls: {
      clientUrl: 'https://github.com/Kwonyujin04/2024-birthday',
      serverUrl: '',
    },
    summary: '생일 축하의 새로운 패러다임을 BDB에서 만나보아요.',
    introduction:
      'BDB는 간편하게 생일 축하 메시지를 전달할 수 있는 생일 축하 커뮤니티 입니다. 친구, 가족, 반려 동물, 또는 나 자신에게 축하 메시지를 남기고 함께 축하할 수 있습니다. 또한 커뮤니티에 올라온 게시물에 반응을 보내면 BDB에서 주는 선물도 받을 수 있습니다.\n생일 축하를 도와주는 든든한 친구, BDB에 접속해 보아요!',
    description:
      '🎉생일 축하 메시지 작성하기\n- 축하해주고 싶은 사람을 떠올리며 메시지를 작성하고 꾸며봅시다. 적어도 생일 하루 전에는 작성해야 함을 주의합시다.\n\n🥳커뮤니티에서 함께 축하하기\n- 작성한 메시지는 커뮤니티에 공유되어 함께 볼 수 있습니다. 다른 사용자가 남긴 메시지에 반응을 남겨 생일을 함께 축하해 봅시다.\n\n🎁BDB가 주는 선물 받기\n- 축하 받는 사람 뿐만 아니라 축하해 주는 사람에게도 특별한 기억을 만들어 주기 위해 BDB에서 선물을 준비했습니다. 선물을 위해 좀 더 많은 사람들을 축하해 보는 건 어떨까요? (자세한 참여 방법은 사이트 내의 선물받기 페이지를 참고해주세요!)',
    memberList: [
      {
        index: 0,
        image: '/images/memberProfiles/kwonyujin.png',
        name: '권유진',
        part: 'frontend',
        position: '프론트엔드',
        isLeader: false,
        review:
          '올해 처음으로 APPS에 들어오고 진행한 프로젝트라서 배운 게 많은 프로젝트였습니다. BDB는 제가 1학기 때 들은 웹 수업에서 만든 결과를 더 발전시켜 만든 웹인데, 그 당시에 만든 결과물과 비교하면 성장하긴 했지만 지금도 조금 아쉬운 부분이 있습니다... 하지만 그 과정에서 정말 많은 것을 배웠고 2025년에 다른 프로젝트를 진행하게 되면 BDB와 함께 배운 것을 펼쳐나가고 싶습니다! ',
      },
    ],
    techStackList: [
      {
        name: 'HTML',
        imageUrl: '/images/techStacks/html.png',
      },
      {
        name: 'CSS',
        imageUrl: '/images/techStacks/css.png',
      },
      {
        name: 'JavaScript',
        imageUrl: '/images/techStacks/javascript.png',
      },
    ],
  },
  {
    id: 14,
    name: 'Stattracker',
    generation: ['11기'],
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnails/stattracker.png',
    youtubeVideoId: '',
    downloadLinkUrl: null,
    webpageLinkUrl: 'https://rosaze.github.io/2024-Stattracker/',
    githubUrls: {
      clientUrl: 'https://github.com/rosaze/2024-Stattracker',
      serverUrl: '',
    },
    summary: '당신의 대학 생활 능력치 스탯을 키워주세요!',
    introduction:
      'StatTracker - 대학생활을 하며 당신의 성장을 눈으로 확인하세요! 활동별 통계와 기록으로 나만의 데이터를 시각화하고, 목표를 한눈에 관리하세요. 매일의 작은 성취가 큰 변화를 만든다는 것을 StatTracker와 함께 느껴보세요!',
    description:
      '📊 활동별 기록으로 성과 시각화\n활동 데이터를 한눈에 정리하고 시각화하여 나의 발전 상황을 확인할 수 있습니다.\n\n🎯 목표 달성을 위한 카테고리 관리\n활동을 카테고리별로 분류하여 나만의 목표를 체계적으로 관리할 수 있습니다.\n\n📈 실시간 통계로 동기 부여\n활동 통계를 실시간으로 확인하며 꾸준히 동기부여를 얻을 수 있습니다.\n\n🗂️ 기록 저장으로 데이터 아카이빙\n나의 모든 활동 데이터를 저장하고 필요할 때 쉽게 확인할 수 있습니다.',
    memberList: [
      {
        index: 0,
        image: '/images/memberProfiles/yoonjiwon.png',
        name: '윤지원',
        part: 'frontend',
        position: '프론트엔드',
        isLeader: false,
        review:
          'stattracker는 노력의 히스토리 아카이브 입니다. 눈에 안 보이는 노력을 가시화하자! 라고 처음 목표를 세웠었는데, 처음 기대한 만큼 결과물이 잘 나와주어서 정말 뿌듯합니다. 하지만 개발 과정은 꽤 난감했습니다. 자바스크립트, CSS 를 만만하게 보고 호기롭게 디자인을 했지만..현실은 눈문 젖은 디버깅과 끊임없는 레이아웃 수정의 연속이었답니다. 특히 어떻게 하면 디자인과 기능의 일관성을 유지할 수 있는지 고민을 많이 했습니다. 그래도 이번 기회에 확실히 프론트엔드를 깊이 경험할 수 있어서 정말 좋았습니다. 특히 반응형 웹 디자인을 구현하면서 이것 저것 찾아보면서 코드를 만들었던 부분이 나중에도 꼭 도움이 될 것 같아요😉.',
      },
    ],
    techStackList: [
      {
        name: 'HTML',
        imageUrl: '/images/techStacks/html.png',
      },
      {
        name: 'CSS',
        imageUrl: '/images/techStacks/css.png',
      },
      {
        name: 'JavaScript',
        imageUrl: '/images/techStacks/javascript.png',
      },
    ],
  },
  {
    id: 15,
    name: 'Emotion',
    generation: ['11기'],
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnails/emotion.jpg',
    youtubeVideoId: 'mn2DxNCmR',
    downloadLinkUrl: null,
    webpageLinkUrl: 'https://2024-emotion.vercel.app/',
    githubUrls: {
      clientUrl: 'https://github.com/eunground/2024-Emotion.git',
      serverUrl: '',
    },
    summary: '당신의 기억을 저장하세요.',
    introduction:
      '오늘 당신이 느낀 감정은 무엇인가요? Emotion을 통해 여러분의 기억들을 저장해보세요! 기억을 구슬로 만들어 저장해 시간이 지나도 변하지 않는 감정을 특별하게 간직하세요.',
    description:
      '🫧 감정 구슬 만들기\n하루의 감정을 구슬로 만들어 저장합니다.\n\n⭐ 기억 저장소\n저장한 감정 구슬을 꺼내보며 소중한 추억들을 떠올려보세요.\n\n💌 기억할 기억\n잊고 싶지 않은 특별한 기억들을 따로 모아, 언제든 꺼내볼 수 있습니다.',
    memberList: [
      {
        index: 0,
        image: '/images/memberProfiles/shinjeongeun.png',
        name: '신정은',
        part: 'frontend',
        position: '프론트엔드',
        isLeader: false,
        review:
          'Emotion은 영화 인사이드 아웃에서 영감을 받아 제작된 감정 구슬 기록 페이지입니다! 프로젝트를 진행하는 과정에서 예상치 못한 문제들이 발생했지만, 이를 해결하기 위해 다양한 방법을 고민하고 시도하며 문제 해결 능력을 키울 수 있었습니다. 하나의 프로젝트를 끝까지 완성하는 과정에서 큰 성취감을 느낄 수 있었습니다. 앞으로도 이러한 경험을 바탕으로 더 많은 도전과 성장을 이루어내며, 개발자로서의 역량을 지속적으로 강화해 나가고자 합니다💪',
      },
    ],
    techStackList: [
      {
        name: 'HTML',
        imageUrl: '/images/techStacks/html.png',
      },
      {
        name: 'CSS',
        imageUrl: '/images/techStacks/css.png',
      },
      {
        name: 'JavaScript',
        imageUrl: '/images/techStacks/javascript.png',
      },
    ],
  },
  {
    id: 16,
    name: '카공도',
    generation: ['11기'],
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnails/cagongdo.png',
    youtubeVideoId: '',
    downloadLinkUrl: null,
    webpageLinkUrl: 'https://cagongdo.netlify.app/',
    githubUrls: {
      clientUrl: 'https://github.com/APPS-sookmyung/2024-Cagongdo',
      serverUrl: '',
    },
    summary: '내 주변 카공맛집 찾기',
    introduction:
      "카페에서 공부하거나 작업하는 것을 좋아하시나요? '카공도'는 카카오맵 API를 활용하여 내 주변 카공에 최적화된 카페를 빠르고 쉽게 찾을 수 있는 서비스입니다. 운영시간, 가격, 콘센트 여부, 분위기 등 카공에 중요한 요소들을 한눈에 제공하며, 카페의 카공 적합도 별점인 ‘카공도’ 점수로 카페 선택을 돕습니다. '카공도'와 함께 카공에 적합한 카페를 손쉽게 찾고, 더 좋은 환경에서 몰입하여 작업을 즐겨보세요!",
    description:
      "📍 내 주변 카공 맛집 검색\n카카오맵 API를 활용하여 현재 위치 기반으로 주변 카공에 최적화된 카페를 빠르게 탐색할 수 있습니다.\n\n⭐️ ‘카공도’ 별점 제공\n카페의 '카공 적합도'를 별점으로 확인할 수 있어, 사용자들이 카페를 선택하기 전에 중요한 기준을 참고할 수 있습니다.\n\n📝 카공 맞춤 정보 제공\n운영시간, 가격, 콘센트 유무, 조명, 소음 수준 등 카공에 있어 중요한 카페 정보를 상세히 제공합니다.\n\n💬 리뷰\n다른 사용자가 남긴 카공 카페 리뷰를 참고하거나, 자신의 경험을 공유할 수 있습니다.",
    memberList: [
      {
        index: 0,
        image: '/images/memberProfiles/kimjunhee.png',
        name: '김준희',
        part: 'frontend',
        position: '프론트엔드',
        isLeader: false,
        review: '',
      },
    ],
    techStackList: [
      {
        name: 'React',
        imageUrl: '/images/techStacks/react.png',
      },
      {
        name: 'TypeScript',
        imageUrl: '/images/techStacks/typescript.png',
      },
      {
        name: 'Styled-Components',
        imageUrl: '/images/techStacks/styled-components.png',
      },
      {
        name: 'npm',
        imageUrl: '/images/techStacks/npm.png',
      },
      {
        name: 'CRA',
        imageUrl: '/images/techStacks/cra.svg',
      },
      {
        name: 'Netlify',
        imageUrl: '/images/techStacks/netlify.png',
      },
    ],
  },
];
