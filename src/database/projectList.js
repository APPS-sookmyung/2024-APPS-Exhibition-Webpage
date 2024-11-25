import { PROJECT_CATEGORIES } from './projectCategoryList';

export const PROJECT_LIST = [
  {
    id: 1,
    name: 'Cookiee-',
    generation: ['9기', '10기'],
    category: PROJECT_CATEGORIES.APP,
    imageUrl: '/images/thumbnail/img-thumbnail-1.png',
    youtubeVideoId: '8AoxG-zcm-E',
    downloadLinkUrl: null,
    webpageLinkUrl: null,
    githubUrls: {
      clientUrl: 'https://github.com/APPS-sookmyung/2023-COOKIEE-client-react',
      serverUrl: 'https://github.com/APPS-sookmyung/2023-COOKIEE-server',
    },
    summary: '하루하루의 쿠키를 모아보세요!',
    introduction:
      'Cookiee- 앱으로 여러분의 하루하루를 아름답게 기록해보세요!\n사진으로 나만의 캘린더를 꾸미고, 그날 누구와 무엇을 했는지 기록하세요.\n일상을 캘린더로 디자인하는 색다른 경험을 누려보세요!',
    description:
      '🍪 캘린더로 한 달의 쿠키 모아보기\n하루하루의 쿠키를 모아 한 달의 일상을 캘린더로 한눈에 보여줍니다.\n\n🍪 그 날의 쿠키 조각을 모아보기\n하루동안의 쿠키 조각들을 보면서 누구와 어떤 시간을 보냈는지 리스트할 수 있습니다.\n\n🍪 카테고리 별 나의 일상 찾기\n나의 쿠키들을 카테고리 별로 정리하여 한눈에 볼 수 있습니다.',
    memberList: [
      {
        id: 1,
        name: '경민서',
        role: 'MEMBER',
        job: 'Front-end',
        imageUrl: '/images/member/경민서.png',
        retrospect:
          '팀 프로젝트이자 저의 첫 프로젝트였는데요. 저는 프론트로 참여 했지만 백엔드 영역에 너무나도 무지 했던 탓에 너무 많은거를 혼자서 구현하려 해서 프로젝트 중반까지 혼자 끙끙거렸는데 🥲 해커톤 이후 백엔드 연결을 살짝 경험해보고 프로젝트 후반을 잘 꾸려나갔던 것 같습니다 😅 첫 팀프로젝트여서 많이 헤매기도 했는데, 멋진 언니들과 같이 하면서 저도 지치지 않고 나아갈 수 있었습니다! 다같이 으쌰으쌰하면서 이런 멋진 앱도 만들어 성장하게 되어서 너무 뿌듯합니다 ㅎㅎ 😆',
      },
      {
        id: 2,
        name: '윤서희',
        role: 'MEMBER',
        job: 'Front-end',
        imageUrl: '/images/member/윤서희.png',
        retrospect:
          '기획부터 개발까지 정신없이 달려온 소중한 경험이었어요! 처음 접하는 프론트엔드라, 어려운 점도 많았고 개발이 더딘 부분도 있었는데 팀원들에게 조언을 구하고 소통을 계속 하면서 성공적으로 프로젝트를 마무리할 수 있었다고 생각해요! 1년이라는 시간동안 정말 열심히 개발한 쿠키팀, 그리고 앱스 모든 부원들 넘 고생 많았어요! 쿠키팀은 최고의 팀원들이었어요~~!!! 내가 만든 쿠키~🍪❤️',
      },
      {
        id: 3,
        name: '조영서',
        role: 'LEADER',
        job: 'Back-end',
        imageUrl: '/images/member/조영서.png',
        retrospect:
          '제가 오랜 시간 생각했던 아이디어를 제가 APPS 부원들과 함께 실현시킬 수 있어서 행복했던 1년이었습니다. 아이디어를 구체화시키고 실현시키는 과정에서 같은 Cookiee 팀원들에게 많은 것들을 배우고 좋은 아이디어들을 접해볼 수 있었습니다. 길다면 긴 1년이라는 시간동안 프로젝트에 꾸준히, 성실히 참여해준 Cookiee 팀원들에게 고맙다는 말을 전하고 싶습니다. 1년동안 우리는 꾸준히 성장해왔고 서로에게 많은 점을 배웠다고 생각합니다. 특히 BE 파트너 수연이와 처음으로 백엔드 프로젝트를 진행하느라 많은 고난과 역경이 있었지만 하나하나 헤쳐나가는 과정에서 Spring과 서버에 대해 많은 것들을 배울 수 있었습니다.(지수에게도 고맙다는 말을 전합니다.) 웹페이지 전시회는 이제 오픈되지만, 3월에 있을 대면 전시회에서는 더 많은 기능과 서버 안정화를 이루고 싶습니다. 모두들 기대해주세요! 감사합니다.🍪',
      },
      {
        id: 4,
        name: '황수연',
        role: 'MEMBER',
        job: 'Back-end',
        imageUrl: '/images/member/황수연.png',
        retrospect:
          '백엔드는 완전 처음이었는데, 백엔드의 중요성을 정말 많이 느꼈습니다. 생각보다 백에서 처리하고 고려해줘야 할 사항이 엄청 많더라고요.. 너무너무 힘들었고 지금도 아주 힘들지만 같이 고생하는 백엔드 팀원이 있어서 그래도 한시름 놓을 수 있었습니다. 또 팀원들 모두 본인이 맡은 분야는 처음이라, 정말 아주 밑바닥부터 프로젝트를 시작해나갔어요. 그래도 다른 팀원들이 열심히 하는 모습을 보며 자극도 받고 저도 더 열심히 해서 진도나갈 수 있는 동기가 되었습니다! 이렇게 풀스택을 해보는 경험을 통해 시야를 더 넓힐 수 있어서 좋았습니다!',
      },
    ],
    techStackList: [
      {
        name: 'Spring Boot',
        imageUrl: '/images/techStack/springboot.png',
      },
      {
        name: 'React Native',
        imageUrl: '/images/techStack/react.png',
      },
    ],
  },
  {
    id: 5,
    name: '새미새',
    generation: ['10기'],
    category: PROJECT_CATEGORIES.WEB,
    imageUrl: '/images/thumbnail/img-thumbnail-5.png',
    youtubeVideoId: 'I0p1C07SrjQ',
    downloadLinkUrl: null,
    webpageLinkUrl: 'https://apps-sookmyung.github.io/2023-BirdieBuddy/',
    githubUrls: {
      clientUrl: 'https://github.com/APPS-sookmyung/2023-BirdieBuddy',
      serverUrl: 'https://github.com/APPS-sookmyung/2023-BirdieBuddy-server',
    },
    summary: '새 도감 사이트',
    introduction:
      '한국의 탐조인들 모여라! 탐조의 즐거움이 배가 되는, 새에 미친 새람들을 위한 사이트입니다.',
    description:
      '- 도감\n새 이름으로 검색하기\n내가 발견한 새 특징으로 검색하기\n새의 종 이름으로 검색하기\n\n- 동정\n내가 동정 못하겠는 새 사진을 고수들에게 동정을 부탁하기\n동정을 정확히 해주고 포인트 받기 \n\n- 기록 \n내 탐조 여정을 기록해봐요! \n내 탐조 여정을 확인해봐요!\n\n - 새뉴스\n새들에 대한 뉴스를 접하기 \n새에 대해서 빠삭한 고수가 되어 봅시다.\n\n- 배지\n열심히 탐조활동 하라는 동기부여\n탐조에 대한 달성과제를 완료하여 포인트를 얻기\n\n- 마이페이지\n모은 포인트로 내 아바타를 만들어봐요!',
    memberList: [
      {
        id: 1,
        name: '김진영',
        role: 'MEMBER',
        job: 'Back-end',
        imageUrl: '/images/member/김진영.png',
        retrospect:
          '같이 탐조라는 취미활동을 가진 지인과 함께 초기 아이디어를 구상하고, 팀원들과 함께 구체화하여 웹개발 프로젝트를 진행할 수 있어 뜻깊은 경험이었습니다. 관심깊었던 스프링 프레임워크를 사용하여 정말 알찬 개발 경험을 할 수 있었던 것 같습니다! 팀원분들 모두 잘 협력해주시고 막히는 부분들은 서로 도와가면서 개발했던 점이 가장 기억에 남네요😊 모두 고생 많으셨습니다!',
      },
      {
        id: 2,
        name: '문채일',
        role: 'MEMBER',
        job: 'Back-end',
        imageUrl: '/images/member/문채일.png',
        retrospect:
          '웹 개발 프로젝트에서 백엔드 기획과 개발 업무는 처음 해봤는데, 인텔리제이랑 스프링, 데이터베이스 다루는 데 많이 서툰 저를 같은 팀원들이 잘 이끌어줬습니다! 모두에게 고맙다는 말을 전하고 싶네요. 프로젝트 주제가 새여서 그런지, 평생 관심을 가져보지 않았던 새에 대한 흥미를 느끼게 되어서 신기하기도 합니다🪽🪽. 많이 바빴지만, 많은 도전이 있던 해였고, 여러 가지 경험을 하면서 큰 보폭의 성장을 이뤘다고 느껴지는 한 해였습니다! 언젠가 저희가 개발한 새미새 프로젝트를 출시해서 많은 한국 사람들이 해외 새 사이트인 ebird와 같이 우리나라의 새를 탐조하는 것에 대해 관심을 가지는 계기가 되었으면 좋겠습니다.🐦🐦내년에는 제 개발 능력이 더더욱 업그레이드되길 소망하고 🕊️🕊️ 프로젝트 무사히 마치고 모두 새처럼 날개를 달고 훨훨 날아오르시길 기원합니다.',
      },
      {
        id: 3,
        name: '정민주',
        role: 'LEADER',
        job: 'Front-end',
        imageUrl: '/images/member/정민주.png',
        retrospect:
          '처음 html 배울 때 그날 배운 개념 바로바로 실험 해보려고 만든 미니 프로젝트가 이렇게 커질 줄은 꿈에도 몰랐네요. 막판으로 이것저것 만들다가 어쩌다가 맨 처음에 만든 최초 페이지를 다시 한번 봤는데 와.... 뜯어 고치고 싶은 게 한 두 가지가 아니더라고요. 그 만큼 html css js 실력이 어느 정도 늘었다는 소리겠죠? 🤔 내가 프런트 작업에 집중할 수 있게 도와준 백앤드 친구들아 도와줘서 고맙다~ 내가 프런트 공부 더 해 올 터이니 너도 나도 강해져서 다음 프로젝트에서 만나자! (그렇다고 이 프로젝트 바로 놓으면 안된다 우리 추가로 넣어야 하는 기능 엄청 많아😥)',
      },
      {
        id: 4,
        name: '최민선',
        role: 'MEMBER',
        job: 'Back-end',
        imageUrl: '/images/member/최민선.png',
        retrospect:
          '스프링 공부에 많은 도움이 되었습니다. 혼자 했으면 유니티로 줄행랑쳤을 것 같은데 팀원이랑 같이 하면서 꾸역꾸역하니까 스프링도 공부하게 된 것 같네요. 우리 새미새팀 사랑해❤️❤️',
      },
    ],
    techStackList: [
      {
        name: 'Vanilla JS',
        imageUrl: '/images/techStack/javascript.png',
      },
      {
        name: 'Spring',
        imageUrl: '/images/techStack/springboot.png',
      },
    ],
  },
  {
    id: 6,
    name: 'BDB - Birth Day Buddy',
    generation: ['10기'],
    category: PROJECT_CATEGORIES.NEW_MEMBERS,
    imageUrl: '/images/thumbnail/img-thumbnail-6.png',
    youtubeVideoId: 'KZv26cax0JI',
    downloadLinkUrl: null,
    webpageLinkUrl: 'https://2023-smsw-web-project-client.vercel.app/',
    githubUrls: {
      clientUrl:
        'https://github.com/APPS-sookmyung/2023-SMSW-Web-Project-client',
      serverUrl: null,
    },
    summary: '새롭게 개선된 숙명여대 소프트웨어학부 홈페이지입니다!',
    introduction:
      '기존의 숙명여자대학교 소프트웨어학부의 홈페이지의 부족한점을 포착하고 개선했습니다! 학생들에게 필요한 정보와 기능을 추가하였습니다 😃\n\n* 아직 반응형으로 구현되지 않아, 모바일과 전체화면이 아닌 PC 브라우저에서는 올바르게 렌더링되지 않습니다.\nLink를 이용하시는 사용자분들은 꼭 PC 전체화면으로 사용해주시길 바랍니다.',
    description:
      '정보와 기능을 둘다 담은 새로운 소프트웨어학부 홈페이지.\n\n❄️ 전송소개, 커리큘럼, 교수님 소개와 같은 학과에 대한 정보는 기본으로 담았습니다!\n\n❄️ 기존의 홈페이지에는 없던 전공 바구니 기능을 추가하였습니다!\n내가 들은 과목과 앞으로 들을 과목에 대해 계획을 세워볼 수 있습니다.\n\n❄️ 학생회 페이지를 추가하여 1년 동안의 학생회 활동을 보면서\n한 해 학과 행사를 기억할 수 있습니다!',
    memberList: [
      {
        id: 1,
        name: '경민서',
        role: 'MEMBER',
        job: 'Front-end',
        imageUrl: '/images/member/경민서.png',
        retrospect:
          '1학기에 운영진분들과 함께 배웠던 웹 지식들을 프로젝트에 바로 쓸 수 있어서 좋았습니다 😊 제가 그동안 생활하면서 학과 홈페이지에 더 다양한 내용들이 있으면 좋겠다구 부족하게 느꼈던 부분들을 실제로 고쳐볼 수 있는 기회였던 점에서 의미 있는 프로젝트였습니다! 첫 웹 프로젝트였던 만큼 중간에 완전히 새로 시작하면서 시행착오도 많았던 것 만큼 좋은 경험이 되었습니다 😇',
      },
    ],
    techStackList: [
      {
        name: 'React',
        imageUrl: '/images/techStack/react.png',
      },
    ],
  },
];
