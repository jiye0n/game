const scenes = [
    { type: 'title', bgImage: 'images/title_bg.webp' },
    { 
        type: 'interstitial', 
        bg: '#fff0f5', 
        text: '3월, 꿈에 그리던 교사로 첫 발령을 받았다 .. !\n앞으로의 생활이 어떻게 될지\n너무 두근두근하다.' 
    },
    {
        type: 'dialogue',
        speaker: '나',
        bgImage: 'images/bg1.webp',
        text: '꿈에 그리던 첫 발령이다 ..!\n과연 어떤 학생들이 나를 기다리고 있을까 ..? (두근두근)',
        bg: '#ffe4e1'
    },
    { 
        type: 'interstitial', 
        bg: '#ffb6c1',
        bgImage: 'images/bg1.webp',
        text: '설레는 마음으로 선배 교사를 찾아간다.' 
    },
    {
        type: 'dialogue',
        speaker: '선배 교사',
        bgImage: 'images/bg2.webp',
        text: '아~ 오늘 첫 발령받은 선생님이시군요~?!',
        bg: '#ffc0cb'
    },
    {
        type: 'dialogue',
        speaker: '나',
        text: '안녕하세요 이번에 처음 발령받았습니다!\n잘 부탁드리겠습니다!',
        bg: '#ffc0cb'
    },
    {
        type: 'dialogue',
        speaker: '선배 교사',
        text: '아 네 ㅎㅎ 잘 부탁드려요\n1반 담임 맡으신 거 맞으시죠?',
        bg: '#ffc0cb'
    },
    {
        type: 'dialogue',
        speaker: '선배 교사',
        text: '힘드시겠어...... (말을 하려다.. 만다)',
        bg: '#ffc0cb'
    },
    {
        type: 'dialogue',
        speaker: '나',
        text: '.....? (뭐가 힘들다는 거지?)',
        bg: '#ffc0cb'
    },
    {
        type: 'dialogue',
        speaker: '선배 교사',
        text: '아무것도 아니에요 ㅎㅎ\n반에 초원이라는 친구가 있는데 교무실 가시면 교감선생님이 설명해 주실 거예요~',
        bg: '#ffc0cb'
    },
    {
        type: 'dialogue',
        speaker: '선배 교사',
        text: '그럼 파이팅~',
        bg: '#ffc0cb'
    },
    { 
        type: 'interstitial', 
        bg: '#ffe4e1',
        bgImage: 'images/bg2.webp',
        text: '선배 교사의 말씀을 듣고\n궁금증이 생겼지만\n일단 교무실로 가자..!' 
    },
    {
        type: 'dialogue',
        speaker: '교감선생님',
        bgImage: 'images/bg3.webp',
        text: '환영해요~ (큼큼..)',
        bg: '#ffdae9'
    },
    {
        type: 'dialogue',
        speaker: '교감선생님',
        text: '첫 발령이라 떨릴 텐데..\n힘든 반을 맡아 어쩌지..! (큼큼..)',
        bg: '#ffdae9'
    },
    {
        type: 'dialogue',
        speaker: '나',
        text: '열심히 해보겠습니다~\n혹시 저희 반에 힘든 점이 있을까요..?',
        bg: '#ffdae9'
    },
    {
        type: 'dialogue',
        speaker: '교감선생님',
        text: '아.. (큼큼...)\n초원이라는 자폐성 장애를 가진 친구가 있어요.. (큼큼...)',
        bg: '#ffdae9'
    },
    {
        type: 'dialogue',
        speaker: '교감선생님',
        text: '반 아이들과 어울리지 못하고..\n적응하기 힘들어해서요.. (큼큼..)',
        bg: '#ffdae9'
    },
    {
        type: 'dialogue',
        speaker: '교감선생님',
        text: '초원이가 정말 착하고 달리기도 엄청 잘하는데 (큼큼..)',
        bg: '#ffdae9'
    },
    {
        type: 'dialogue',
        speaker: '교감선생님',
        text: '그런 김에 선생님.. (큼큼..)\n교내 미니 마라톤 대회에 초원이가 출전해 보는 것은 어떨까요? (큼큼..)',
        bg: '#ffdae9'
    },
    {
        type: 'dialogue',
        speaker: '나',
        text: '아..! 넵넵 열심히 해보겠습니다..',
        bg: '#ffdae9'
    },
    {
        type: 'dialogue',
        speaker: '교감선생님',
        text: '그럼 파이팅~ (큼큼...)',
        bg: '#ffdae9'
    },
    {
        type: 'dialogue',
        speaker: '나',
        text: '(내가 잘할 수 있을까... 너무 걱정이네.. ㅠㅠ)',
        bg: '#ffdae9'
    },
    {
        type: 'dialogue',
        speaker: '나',
        text: '일단 우리 반으로 한 번 가보자!!',
        bg: '#ffdae9'
    },
    { 
        type: 'interstitial', 
        bg: '#ffc0cb', 
	bgImage: 'images/bg4.webp',
        text: '선배 교사와 교감선생님의 이야기를 들은 후\n교실로 가는 길에 초원이를 만나게 된다.' 
    },
    {
        type: 'dialogue',
        speaker: '초원이',
        text: '......',
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '나',
        text: '초원아 안녕!\n선생님은 이번에 초원이랑 함께 지내게 될 새로운 선생님이야!',
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '초원이',
        text: '초원이 다리는 백만 불짜리 다리.. 몸매는 끝내줘요\n(계속 반복)',
        bg: '#ffb6c1'
    },
    {
        type: 'quiz_question',
        bg: '#ffe4e1',
        question: '교사는 초원이가 낯선 상황과 \n새로운 관계에 어려움을 느끼고 있음을 깨닫고 \n어떻게 다가가야 할지 고민합니다.\n\n이때 알맞은 선택지는?'
    },
    {
        type: 'quiz_choices',
        bg: '#ffe4e1',
        question: '이때 알맞은 선택지는?',
        achievementId: "q1", // 도전 과제 도감 연동용 ID
        achievementTitle: "🎖️ 업적 달성: 첫 마음 열기!",
        achievementSubtitle: "칭호 획득: 따뜻한 새내기 🌱",
        choices: [
            { id: 'A', text: '"초원아, 선생님 눈 봐야지?"라며 턱을 살짝 돌려 강제로 눈을 맞춘다.', correct: false },
            { id: 'B', text: '초원이가 반복하는 말을 다정한 톤으로 똑같이 따라 하며,\n초원이가 좋아하는 얼룩말 인형과 초코파이를 슬며시 시선 방향에 놓아둔다.', correct: true },
            { id: 'C', text: '억지로 말을 걸지 않고,\n멀찍이 떨어져 자리에 앉아 초원이가 조용해질 때까지 기다린다.', correct: false }
        ]
    },
    {
        type: 'quiz_result',
        bg: '#fff0f5',
        title: '정답은 바로... B 입니다! 🎉',
        text: '훌륭해요! 초원의 마음을 열 수 있는 가장 멋진 선택을 하셨습니다.'
    },
    {
        type: 'quiz_explanation',
        bg: '#fff0f5',
        title: '💡 상세 해설',
        text: '[해설]\n자폐성장애 학생은 다른 학생들과 소통하는 부분에 어려움을 겪는다.\n이런 경우 학생이 의사소통을 하며 잘못된 표현을 하더라도 잘못을 지적하기 보다는 올바른 표현을 보여주고 모방할 수 있게 해주는 것이 좋다.\n이렇게 될 경우, 바른 표현과 함께 성공의 경험도 쌓여 더 많은 의사소통을 시도하게 될 것이다.\n특히 의미 있는 반향어를 쓰는 학생의 경우 반향어를 의사소통에 활용하면 그 효과가 더욱 크다.'
    },
    {
        type: 'dialogue',
        speaker: '나',
        text: '초원이 다리는 끝내줘요~\n완전 백만 불짜리 다리지요~!',
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '나',
        text: '초원이가 그렇게 달리기를 좋아하고 잘한다며~\n선생님 정말 기대된다~',
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '나',
        text: '자 이거는 선생님이\n초원이가 달리기를 너무 잘해서 주는 선물이야!',
        bg: '#ffb6c1',
        items: ['zebra.webp', 'chocopie.webp']
    },
    { 
        type: 'interstitial', 
        bg: '#ffc0cb', 
        bgImage: 'images/bg4.webp',
        text: '초원이와 어색한 첫 만남을 뒤로하고 교실로 함께 이동하였다.' 
    },
    {
        type: 'dialogue',
        speaker: '반 학생들',
        bgImage: 'images/bg5.webp',
        text: '야 상혁아 너 게임 랭크 올렸다며 대단하다~',
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '반 학생들',
        text: '우제야 그 정도는 껌이지 \n너도 오늘 게임 들어올래? 민석이도 들어와',
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '초원이',
        characterImage: 'chowon2.webp', 
        text: '..... (초원이는 친구들을 빤히 쳐다본다.)',
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '초원이',
        characterImage: 'chowon2.webp', 
        text: '(얼룩말 인형을 친구들 사이로 툭 올려놓는다.)',
        items: ['zebra.webp'],
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '반 학생들',
        text: '.....?(당황)',
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '반 학생들',
        text: '뭐야.. 갑자기 왜 그래 초원아 방해하지 마  \n(초원이의 행동을 이해하지 못한다)',
        bg: '#ffb6c1'
    },
    {
        type: 'quiz_question',
        bg: '#ffe4e1',
        question: '교사는 초원이가 친구들과 어울리지 못하고, 혼자 고립되어 있는 모습을 보았다. 어덯게 도움을 줄 수 있을까?.\n\n이때 알맞은 선택지는?'
    },
    // 전체 업적 도감 데이터 세트
    {
        type: 'quiz_choices',
        bg: '#ffe4e1',
        question: '이때 알맞은 선택지는?',
        achievementId: "q2", // 도전 과제 도감 연동용 ID
        achievementTitle: "🏆 업적 달성: 장애 특성 이해 완료!",
        achievementSubtitle: "칭호 획득: 든든한 울타리 🌳",
        choices: [
            { id: 'A', text: '" “초원이도 같이 놀고 싶었던 거야!”라며\n 친구들에게 초원이를 억지로 게임에 참여시키도록 한다.', correct: false },
            { id: 'B', text: '초원이를 따로 불러 친구들과 놀 때의 규칙을 설명하고,\n친구들과 떨어진 자리에서 혼자 얼룩말 퍼즐을 하게 한다.', correct: false },
            { id: 'C', text: '교사는 반 아이들을 모아 "장애 특성 이해 교육"을 진행하여\n초원이의 행동(반향어, 관심사 표현 방식)이 방해가 아니라 \n다가오고 싶은 "인사"였음을 설명한다.\n초원이에게는 친구들과 대화에 참여하는 간단한 방법을 천천히 알려준다.', correct: true }
        ]
    },
    {
        type: 'quiz_result',
        bg: '#fff0f5',
        title: '정답은 바로... C 입니다! 🎉',
        text: '훌륭해요! 초원의 마음을 열 수 있는 가장 멋진 선택을 하셨습니다.'
    },
    {
        type: 'quiz_explanation',
        bg: '#fff0f5',
        title: '💡 상세 해설',
        text: '[해설]\n자폐성장애 학생의 특징은 상황을 이해하거나 상대방의 마음을 읽는 것을 어려워한다는 것이다.\n이런 특성을 비장애 학생들이 자폐 특성을 이해하고 \n자연스럽게 받아들일 수 있도록 돕는 장애이해교육이 필요하다.\n추가로 자폐성장애 학생에게는 자연스럽게 일상적인 대화를 이어나가는 법을 알려주어야 한다. \n상황을 가정해 보거나 짧은 만화 속 대화를 활용하는 등 \n자신의 관심사가 아닌 주제일 때 어떻게 대화를 이어가면 좋은지 알려주면 좋다.'
    },
    {
        type: 'dialogue',
        speaker: '나',
        bgImage: 'images/bg9.webp',
        text: '우리 1반 친구들 모두 의자에 앉아볼까?!',
        hideCharacter: true,
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '반 학생들',
        text: '네 선생님!',
        hideCharacter: true,
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '나',
        text: '우리 오늘은 장애 특성 이해 교육을 진행할 거야~ ',
        hideCharacter: true,
        bg: '#ffb6c1'
    },
    { 
        type: 'interstitial', 
        bg: '#ffc0cb', 
        text: '나는 그렇게\n 우리반 학생들에게 1시간 동안\n 장애 특성 이해 교육에 대해 가르쳐 주었다.' 
    },
    {
        type: 'dialogue',
        speaker: '나',
        text: '친구가 갑자기 나에게 말을 하지도 않고\n건드리는 행동이 방해라고 생각할 수 있지만',
        hideCharacter: true,
        bg: '#ffb6c1'
    },    
    {
        type: 'dialogue',
        speaker: '나',
        text: '그 행동은 방해가 아니라 다가오고 싶은 인사였다는 걸 \n꼭 알아줬으면 해 !  자 오늘은 여기서 교육을 끝낼게요',
        hideCharacter: true,
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '반 학생들',
        text: '네 선생님 감사드립니다!\n덕분에 초원이와 친해지는 방법도 배워서 너무 좋은 것 같아요!',
        hideCharacter: true,
        bg: '#ffb6c1'
    },
    { 
        type: 'interstitial', 
        bg: '#ffc0cb', 
        bgImage: 'images/bg6.webp',
        text: '드디어 오늘은 \n 학교 미니 마라톤 대회날.. \n 초원이가 평상시 처럼 뛰어준다면\n 1등은 우리 초원이 것이다!' 
    },
    { 
        type: 'interstitial', 
        bg: '#ffc0cb', 
        text: '하지만 대회 시작 전\n무척이나 불안해 보이는\n초원이가 보였다.' 
    },
    {
        type: 'dialogue',
        speaker: '초원이',
        characterImage: 'chowon3.webp', 
        text: '(불안해 하며) 엄마..엄마...!',
        bg: '#ffb6c1'
    },
    { 
        type: 'interstitial', 
        bg: '#ffc0cb', 
        text: '초원이는\n어린시절 동물원에서 수 많은\n인파 속 엄마의 손을 놓치고\n홀로 남겨졌던\n트라우마가 되살아난 것이다.' 
    },
    { 
        type: 'dialogue',
        speaker: '사람들',
        text: '무슨일 있나...?(웅성웅성)',
        bg: '#ffb6c1'
    },    
    {
        type: 'quiz_question',
        bg: '#ffe4e1',
        question: '교사는 초원이가 과거의 트라우마로 불안해 보이는 상황을 목격하였다.\n이 상황 속 교사의 올바른 행동은 무엇일까?\n이때 알맞은 선택지는?'
    },
    {
        type: 'quiz_choices',
        bg: '#ffe4e1',
        question: '이때 알맞은 선택지는?',
        achievementId: "q3", // 도전 과제 도감 연동용 ID
        achievementTitle: "✨ 업적 달성:  최고의 교사!",
        achievementSubtitle: "칭호: 초원이의 빛 ☀️",
        choices: [
            { id: 'A', text: '초원이에게 크게 소리쳐 트라우마를 부인하고,\n 강제로 어깨를 붙잡아 행동을 제지한다.', correct: false },
            { id: 'B', text: '출발 시간이 지체되므로,\n주최 측에 양해를 구하고 초원이를 제외한 채 대회를 먼저 출발시킨다.', correct: false },
            { id: 'C', text: '가지고 온 소음 차단용 헤드폰을 초원이의 귀에 씌워주어 자극을 차단하고,\n운동장 구석의 조용한 벤치로 이동한다.', correct: true }
        ]
    },
    {
        type: 'quiz_result',
        bg: '#fff0f5',
        title: '정답은 바로... C 입니다! 🎉',
        text: '훌륭해요! 초원에게 안정감을 줄 수 있는 가장 알맞은 선택을 하셨습니다.'
    },
    {
        type: 'quiz_explanation',
        bg: '#fff0f5',
        title: '💡 상세 해설',
        text: '[해설]\n자폐성장애를 가진 많은 학생이 자극에 대한 예민한 반응을 나타낸다\n '+
            '초원이의 경우 수많은 인파와 시끌벅적한 상황에 과거의 트라우마가 겹쳐져 이런 행동이 발생하였다.\n '+
            '이런 경우 갑작스러운 상황에서 학생이 안정감을 찾을 수 있도록 헤드셋과 이어폰 등을 이용해서\n ' +
            '스트레스를 피할 수 있도록 해 주면 좋다.\n '+
            '또한 그리고 소리에 대한 예민함을 점진적으로 완화할 수 있도록 다양한 감각 경험을 제공하는 것도\n ' +
            '도움이 될 수 있다.'
    },
    {
        type: 'dialogue',
        speaker: '나',
        text: '초원아! 괜찮아? \n(초원이에게 헤드셋을 씌워준다.)',
        bg: '#ffb6c1',
        items: ['headphone.webp']
    },
    {
        type: 'dialogue',
        speaker: '초원이',
        characterImage: 'chowon4.webp', 
        text: '.......',
        bg: '#ffb6c1',
        items: ['headphone.webp']
    },
    {
        type: 'dialogue',
        speaker: '나',
        text: '사람들이 많아서 놀랬지? \n우리 저기 벤치에 앉아서 조금만 쉬자',
        bg: '#ffb6c1',
        items: ['headphone.webp']
    },
    { 
        type: 'interstitial', 
        bg: '#ffc0cb', 
        text: '초원이와 함께\n학교 산책길로 향했다.' 
    },
    {
        type: 'dialogue',
        speaker: '나',
        bgImage: 'images/bg7.webp',
        text: '초원아 지금은 조금 괜찮아졌어? \n사람이 많아져서 놀랬지 대회 날이라 그런가 보다',
        bg: '#ffb6c1',
        items: ['headphone.webp']
    },
    {
        type: 'dialogue',
        speaker: '초원이',
        characterImage: 'chowon4.webp', 
        text: '.......',
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '나',
        text: '초원이가 괜찮아질 때까지 선생님과 학교 친구들은 \n초원이를 기다려줄 거야 괜찮아지면 선생님한테 꼭 알려줘~',
        bg: '#ffb6c1',
        items: ['headphone.webp']
    },
    { 
        type: 'interstitial', 
        bg: '#ffc0cb', 
        text: '30분 후...' 
    },
    {
        type: 'dialogue',
        speaker: '초원이',
        characterImage: 'chowon2.webp', 
        text: '....초원이 다리는 백만 불짜리 다리....',
        bg: '#ffb6c1'
    },
     {
        type: 'dialogue',
        speaker: '나',
        text: '초원아 괜찮아졌어~!? \n우리 이제 달리러 가볼까!?',
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '초원이',
        characterImage: 'chowon5.webp', 
        text: '(급하게 운동장으로 뛰어간다.)',
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '나',
        text: '초원아 조심해서 가!',
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '체육교사',
        bgImage: 'images/bg6.webp',
        text: '자 모두 출반선에 서요~\n소리가 나면 바로 뛰는 거에요!',
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '체육교사',
        text: '자 준비~(땅!)',
        bg: '#ffb6c1',
        items: ['gun.webp']
    },
    {
        type: 'dialogue',
        speaker: '나',
        text: '초원아 파이팅!!',
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '초원이',
        characterImage: 'chowon6.webp',
        bgImage: 'images/bg8.webp',
        text: '(열심히 달린다)',
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '사람들',
        characterImage: 'people2.webp',
        bgImage: 'images/bg6.webp',
        text: '저 학생 엄청 잘 달린다..',
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '사람들',
        characterImage: 'people0.webp',
        text: '초원아 파이팅!!!',
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '사람들',
        characterImage: 'people2.webp',
        text: '엄청 잘 달리는 학생 이름이 초원이 인가봐..!\n 초원아 파이팅!!',
        bg: '#ffb6c1'
    },
    {
        type: 'dialogue',
        speaker: '초원이',
        characterImage: 'chowon7.webp',
        bgImage: 'images/bg10.webp',
        text: '(활짝 웃는다)',
        hideCharacter: true,
        bg: '#ffb6c1'
    },
    { 
        type: 'interstitial', 
        bg: '#ffc0cb', 
        bgImage: 'images/bg10.webp',
        text: '나는 그날 초원이의 미소를 잊지 못한다.\n초원이는 얼굴 가득 세상에서 가장 순수하고\n 진심 어린 미소를 보여주었기 때문이다.' 
    },
    { 
        type: 'interstitial', 
        bgImage: 'images/bg10.webp',
        bg: '#ffc0cb',
       text: '이 세상 누구보다 행복한 미소를 짓고 마라톤을 완주한 초원이는..' 
    },
    { 
        type: 'interstitial', 
        bgImage: 'images/bg12.webp',
        bg: '#ffc0cb', 
        text: '교내 미니 마라톤 대회에서 당당하게 1등을 차지했다!!' 
    },
    { 
        type: 'interstitial', 
        bgImage: 'images/bg12.webp',
        bg: '#ffc0cb', 
        text: '모든 특수교육 대상자는\n 장애유형, 장애 정도에 따라 차별받지 아니하고 또래와 함께 교육받을 권리가 있다.' 
    },
    { 
        type: 'interstitial', 
        bgImage: 'images/bg12.webp',
        bg: '#ffc0cb', 
        text: '이처럼 초원이에게 필요한 것은\n 특별한 대우가 아니라 함께할 수 있는 기회였다.\n 앞으로의 교실에서도 "어떻게 가르칠까?"를 넘어\n"어떻게 함께 살아갈까?"를 고민하는 교사가 되어야겠다!' 
    },
    {
        type: 'end'
    }
];

// 게임 스탯 시스템 변수 초기화
let currentSceneIndex = 0; 
let intimacyLevel = 0;      // 초원이 신뢰도 (❤️)
let inclusionLevel = 0;     // 학급 포용도 (🤝)
let stabilityLevel = 0;    // 초원이 안정도 (🍀) - 기본 50% 시작
let currentBgImage = 'images/title_bg.webp';
let isTransitioning = false;
let playerName = '나';
let unlockedAchievements = []; // 획득한 업적 보관용 배열

// 전체 업적 도감 데이터 세트
const allAchievements = [
    { id: 'q1', title: "🎖️ 첫 마음 열기", subtitle: "칭호: 따뜻한 새내기 🌱", desc: "1번 퀴즈 정답 달성" },
    { id: 'q2', title: "🏆 장애 특성 이해 완료", subtitle: "칭호: 든든한 울타리 🌳", desc: "2번 퀴즈 정답 달성" },
    { id: 'q3', title: "✨ 최고의 교사", subtitle: "칭호: 초원이의 빛 ☀️", desc: "3번 퀴즈 정답 달성" }
];

// === Audio System ===
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let audioInitialized = false;

function initAudio() {
    if (!audioInitialized) {
        if(audioCtx.state === 'suspended') audioCtx.resume();
        audioInitialized = true;
    }
}

function playTone(freq, type, duration) {
    if(!audioInitialized) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);
    osc.stop(audioCtx.currentTime + duration);
}

function playClick() { playTone(600, 'sine', 0.1); }
function playCorrect() {
    playTone(523.25, 'sine', 0.1); 
    setTimeout(()=>playTone(659.25, 'sine', 0.1), 100); 
    setTimeout(()=>playTone(783.99, 'sine', 0.3), 200); 
}
function playWrong() { playTone(150, 'sawtooth', 0.3); }

// === Particle Systems ===
function createPetal() {
    const container = document.getElementById('game-container');
    if (!container) return;
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.top = '-20px';
    petal.style.width = Math.random() * 10 + 10 + 'px';
    petal.style.height = petal.style.width;
    petal.style.animationDuration = (Math.random() * 3 + 4) + 's'; 
    petal.style.opacity = Math.random() * 0.8 + 0.2;
    container.appendChild(petal);
    setTimeout(() => { petal.remove(); }, 7000);
}
setInterval(createPetal, 400); 

function explodeHearts() {
    const container = document.getElementById('game-container');
    if (!container) return;
    
    for(let i=0; i<30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-particle');
        heart.innerText = '💖';
        heart.style.left = '50%';
        heart.style.top = '40%';
        
        const tx = (Math.random() - 0.5) * 500 + 'px';
        const ty = (Math.random() - 0.5) * 500 + 'px';
        heart.style.setProperty('--tx', tx);
        heart.style.setProperty('--ty', ty);
        
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    }
}

// === Typewriter Logic ===
let isTyping = false;
let typeInterval;
let fullText = '';
let textElem;

// === Game Logic ===
function startGame() {
    initAudio();
    playClick();
    
    const nameModal = document.getElementById('name-input-modal');
    const nameField = document.getElementById('player-name-field');
    const submitBtn = document.getElementById('name-submit-btn');
    
    if (nameModal && nameField && submitBtn) {
        nameModal.style.display = 'block';
        nameField.focus(); 
        
        // 버튼 클릭 이벤트 구역
        submitBtn.onclick = function(e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            
            if (isTransitioning) return;

            playClick();
            let inputName = nameField.value;
            
            if (inputName !== null && inputName.trim() !== "") {
                playerName = inputName.trim();
            } else {
                playerName = "선생님";
            }
            
            // 1. 이름 입력이 끝났으니 모달창을 닫습니다.
            nameModal.style.display = 'none';
            
            // 2. 부드러운 암전(Fade to Black)을 건 뒤, 화면 뒤에서 로딩 페이지를 강제로 주입합니다.
            isTransitioning = true;
            const overlay = document.getElementById('fade-overlay');
            const screen = document.getElementById('screen');
            
            if (overlay && screen) {
                overlay.classList.add('active'); // 화면 어두워짐
                
                setTimeout(() => {
                    // [★핵심 패치] 암전된 타이밍에 화면에 로딩바를 직접 그려냅니다.
                    screen.innerHTML = `
                        <div class="loading-screen screen">
                            <div class="pixel-loading-container">
                                <img src="images/loading_bar.webp" alt="Loading" class="loading-fill-img" id="loading-bar" />
                            </div>
                        </div>
                    `;
                    
                    // 로딩바 애니메이션 시작 트리거
                    void screen.offsetWidth;
                    const bar = document.getElementById('loading-bar');
                    if(bar) bar.style.setProperty('--loading-progress', '100%');
                    
                    overlay.classList.remove('active'); // 화면 다시 밝아짐 (로딩바 등장)
                    
                    // 3. 사용자가 이름을 입력하고 버튼을 누른 '이 시점부터' 칼같이 정확하게 5초를 작동시킵니다!
                    setTimeout(() => {
                        overlay.classList.add('active'); // 5초간 로딩 후 다시 암전
                        
                        setTimeout(() => {
                            // scenes 배열의 다음 인덱스(1번: 첫 내레이션 '3월, 꿈에 그리던...')로 안전하게 진입
                            currentSceneIndex = 1; 
                            renderScene();
                            overlay.classList.remove('active'); // 암전 해제하며 첫 스토리 오픈
                            isTransitioning = false;
                        }, 350);
                    }, 3000); // 여기서 지정한 5초 동안 로딩 화면이 완벽하게 고정됩니다.
                    
                }, 350);
            } else {
                // 예외 방어용 코드
                currentSceneIndex = 1;
                renderScene();
                isTransitioning = false;
            }
        };
        
        // 엔터키 연동
        nameField.onkeydown = function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
                submitBtn.click();
            }
        };
    } else {
        currentSceneIndex = 1;
        renderScene();
    }
}

function changeGameBackground(bgNumber) {
  // 1. 기존에 active 상태였던 배경 레이어를 찾아서 클래스 제거
  document.querySelector('.bg-layer.active')?.classList.remove('active');

  // 2. 새로운 번호(예: bg-3)의 레이어를 찾아서 active 클래스 추가
  document.querySelector(`.bg-${bgNumber}`)?.classList.add('active');
}
function renderScene() {
    const screen = document.getElementById('screen');
    const backBtn = document.getElementById('back-btn-area');
    if (!screen) return;
    
    const scene = scenes[currentSceneIndex];
    
    // ==========================================================================
    // [★번쩍임 버그 완전 박멸 패치] 
    // innerHTML을 비우기 전에 배경을 먼저 고정해서 하얀 바닥이 노출되는 것을 원천 차단합니다!
    // ==========================================================================
    if (scene.bgImage) {
        currentBgImage = scene.bgImage;
    }
    screen.style.backgroundImage = `url('${currentBgImage}')`;

    // 1. 내부 텍스트와 캐릭터만 초기화 (배경은 가만히 유지됨)
    screen.innerHTML = '';

    // 2. 좌측 사이드바 3대 능력치 전광판 실시간 갱신
    const barTrust = document.getElementById('bar-trust');
    const valTrust = document.getElementById('val-trust');
    const barInclusion = document.getElementById('bar-inclusion');
    const valInclusion = document.getElementById('val-inclusion');
    const barStability = document.getElementById('bar-stability');
    const valStability = document.getElementById('val-stability');

    if(barTrust) { barTrust.style.width = intimacyLevel + '%'; valTrust.innerText = Math.floor(intimacyLevel) + '%'; }
    if(barInclusion) { barInclusion.style.width = inclusionLevel + '%'; valInclusion.innerText = Math.floor(inclusionLevel) + '%'; }
    if(barStability) { barStability.style.width = stabilityLevel + '%'; valStability.innerText = Math.floor(stabilityLevel) + '%'; }

    // 3. 좌측 프로필 이름 실시간 동기화
    const sideNameDisplay = document.getElementById('profile-player-name');
    if (sideNameDisplay) {
        sideNameDisplay.innerText = playerName;
    }

    // 뒤로가기 버튼 가시성 세팅
    if (scene.type === 'title' || scene.type === 'loading' || scene.type === 'end' || currentSceneIndex === 2) {
        if(backBtn) backBtn.style.display = 'none';
    } else {
        if(backBtn) backBtn.style.display = 'flex';
    }

    // ==========================================================================
    // [★애니메이션 매칭 패치] 
    // 모든 분기점에 클래스명 'screen'을 정확히 주입하여 CSS 페이드 효과가 100% 스며들게 합니다.
    // ==========================================================================
    
    // 타이틀 화면
    if (scene.type === 'title') {
        const titleDiv = document.createElement('div');
        titleDiv.className = 'title-screen screen'; // screen 클래스 필수 바인딩
        titleDiv.innerHTML = `
            <img src="images/title_main.webp" alt="초원이와 친해지기 프로젝트" class="title-main-img" />
            <button class="title-start-btn" onclick="startGame()">
                <img src="images/start_btn.webp" alt="START" />
            </button>
        `;
        screen.appendChild(titleDiv);
    }
    // 로딩 화면
    else if (scene.type === 'loading') {
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'loading-screen screen'; 
        loadingDiv.innerHTML = `
            <div class="pixel-loading-container">
                <img src="images/loading_bar.webp" alt="Loading" class="loading-fill-img" id="loading-bar" />
            </div>
        `;
        screen.appendChild(loadingDiv);
        
        void loadingDiv.offsetWidth;
        setTimeout(() => {
            const bar = document.getElementById('loading-bar');
            if(bar) bar.style.setProperty('--loading-progress', '100%');
        }, 100);

        setTimeout(() => { nextSceneInternal(); }, 5000);
    }
    // 자막 화면
    else if (scene.type === 'interstitial') {
        const interDiv = document.createElement('div');
        interDiv.className = 'center-text-screen screen';
        interDiv.onclick = nextScene;        
        // [★핵심 패치] 데이터의 \n을 브라우저가 인식하는 <br> 태그로 확실하게 구속하여 치환합니다.
        interDiv.innerHTML = `<div class="center-text">${scene.text.replace(/\n/g, '<br>')}</div>`;
        
        screen.appendChild(interDiv);
    }
    // 인게임 대화 화면 (입체 구도 100% 완전 복구 및 번쩍임 해방 구역)
   // 인게임 대화 화면 (캐릭터 전면 배치 및 핑크 패널 입체 구조 완전 정착 구역)
    else if (scene.type === 'dialogue') {
        const dialogDiv = document.createElement('div');
        dialogDiv.className = 'screen'; // 오리지널 screen 클래스 매칭
        dialogDiv.setAttribute('data-scene-type', 'dialogue'); 
        
        const baseCharacterImages = {
            '나': 'images/me.webp',
            '선배 교사': 'images/senior.webp',
            '교감선생님': 'images/vp.webp',
            '초원이': 'images/chowon.webp',
            '반 학생들': 'images/friend.webp',
            '사람들':'images/people.webp',
            '체육교사':'images/pe.webp'
        };
        
        let imgSrc = scene.characterImage ? 'images/' + scene.characterImage : (baseCharacterImages[scene.speaker] || '');
        const displayName = (scene.speaker === '나') ? playerName : scene.speaker;
        if (scene.hideCharacter === true) {
            imgSrc = ''; 
        }
        // [아이템 동적 생성부] 데이터에 items가 있으면 img 태그들을 만들어냅니다.
        let itemsHtml = '';
        if (scene.items && Array.isArray(scene.items)) {
            itemsHtml = `<div class="dialogue-items-container">`;
            scene.items.forEach(itemImg => {
                itemsHtml += `<img src="images/${itemImg}" class="dialogue-reward-item" />`;
            });
            itemsHtml += `</div>`;
        }

        // [★진짜 최종 버그 컷] 
        // HTML 구조상 'character-area'를 대화 패널보다 '아래쪽(나중)'에 배치하여 
        // CSS z-index가 꼬여있어도 브라우저가 물리적으로 무조건 캐릭터를 맨 위에 덮어쓰도록 강제 구속합니다.
dialogDiv.innerHTML = `
            <!-- 1. [★위치 변경] 캐릭터를 먼저 그려서 아래쪽에 배치합니다 -->
            <div class="character-area">
                ${imgSrc ? `<img src="${imgSrc}" alt="${displayName}" class="char-img" />` : ''}
            </div>

            <!-- 2. 순수 핑크 대화 패널 영역 (나중에 그려지므로 캐릭터 몸통을 완벽히 덮음) -->
            <div class="custom-dialogue-wrapper" onclick="nextScene()">
                <!-- 얼룩말 & 초코파이 상자 -->
                ${itemsHtml}
                
                <div class="dialogue-box-content">
                    <div class="speaker-name">${displayName}</div>
                    <div class="dialogue-text" id="dialogue-text-container"></div>
                    <div class="next-indicator">▼</div>
                </div>
            </div>
        `;
        screen.appendChild(dialogDiv);

        // 타이퍼 엔진 작동
        textElem = document.getElementById('dialogue-text-container');
        fullText = scene.text;
        isTyping = true;
        let charIndex = 0;
        textElem.innerHTML = '';
        
        typeInterval = setInterval(() => {
            if (charIndex < fullText.length) {
                let char = fullText[charIndex];
                textElem.innerHTML += (char === '\n') ? '<br>' : char;
                charIndex++;
            } else {
                clearInterval(typeInterval);
                isTyping = false;
            }
        }, 50); 
    }
    // 퀴즈 질문 화면
    else if (scene.type === 'quiz_question') {
        const quizDiv = document.createElement('div');
        quizDiv.className = 'quiz-question-screen screen';
        quizDiv.onclick = nextScene;
        
        // [★ 이 한 줄만 추가!] 문자열 안에 꼬여있는 모든 형태의 \n을 브라우저용 줄바꿈(<br>)으로 바꿔줍니다.
        const cleanQuestion = scene.question.replace(/\n/g, '<br>').replace(/\\n/g, '<br>');

        quizDiv.innerHTML = `
            <div class="quiz-container-box">
                <div class="quiz-header-title">🔍 질문</div>
                <div class="quiz-question-text">${cleanQuestion}</div>
                <div class="quiz-next-tip">클릭하여 선택지 보기...</div>
            </div>
        `;
        screen.appendChild(quizDiv);
    }
    // 퀴즈 선택지 화면
    else if (scene.type === 'quiz_choices') {
        const quizDiv = document.createElement('div');
        quizDiv.className = 'quiz-choices-screen screen';
        
        const header = document.createElement('div');
        header.className = 'quiz-choices-header';
        header.innerHTML = `🔍 선택지`;
        quizDiv.appendChild(header);

        scene.choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'custom-choice-btn';
            btn.innerHTML = `
                <span class="custom-choice-prefix">${choice.id}</span> 
                <span class="custom-choice-text">${choice.text.replace(/\\n/g, '<br>')}</span>
            `;
            btn.onclick = (e) => {
                e.stopPropagation(); 
                handleChoice(choice.correct);
            };
            quizDiv.appendChild(btn);
        });
        screen.appendChild(quizDiv);
    }
    // 퀴즈 결과 및 해설 화면
    else if (scene.type === 'quiz_result' || scene.type === 'quiz_explanation') {
        const resDiv = document.createElement('div');
        resDiv.className = 'explanation-screen screen';
        resDiv.onclick = nextScene;
        const isResult = (scene.type === 'quiz_result');
        
        const safeText = scene.text ? scene.text.replace(/\\n/g, '<br>') : '';
        const safeTitle = scene.title ? scene.title : '결과 확인';

        resDiv.innerHTML = `
            <div class="explanation-box" style="border: 5px solid ${isResult ? '#ff69b4' : '#ffb6c1'};">
                <div class="explanation-title">${safeTitle}</div>
                <div class="explanation-text">${safeText}</div>
                <div style="text-align:center; margin-top:30px; font-weight:bold; color:#ff1493; font-size:28px; animation: bounce 1s infinite;">클릭하여 계속...</div>
            </div>
        `;
        screen.appendChild(resDiv);
    }
// 엔딩 화면 (가독성 확보를 위해 전용 핑크 패널 상자 주입)
    else if (scene.type === 'end') {
        const endDiv = document.createElement('div');
        endDiv.className = 'title-screen screen';
        endDiv.innerHTML = `
            <div class="end-game-box">
                <h1 class="end-title">The End</h1>
                <div class="end-thanks-text">플레이해주셔서 감사합니다!</div>
                <button class="end-restart-btn" onclick="location.reload()">다시 하기</button>
            </div>
        `;
        screen.appendChild(endDiv);
    }
}
function handleChoice(isCorrect) {
    if (isTransitioning) return;
    const currentQuizScene = scenes[currentSceneIndex];

    if (isCorrect) {
        playCorrect();
        
        // 3개 퀴즈 기준 다중 지표 균등 누적 계산법 가동!
        intimacyLevel = Math.min(100, intimacyLevel + 33.34); 
        inclusionLevel = Math.min(100, inclusionLevel + 33.34);
        stabilityLevel = Math.min(100, stabilityLevel + 33.34);
        
        explodeHearts(); 

        // 도전 과제 획득 여부 검사 및 데이터 적립
        const quizId = currentQuizScene.achievementId || 'q1';
        if (!unlockedAchievements.includes(quizId)) {
            unlockedAchievements.push(quizId);
        }
        
        const title = currentQuizScene.achievementTitle || "🎖️ 업적 달성: 문제 클리어!";
        const subtitle = currentQuizScene.achievementSubtitle || "칭호 획득: 한 걸음 더 👣";
        showAchievement(title, subtitle);

        isTransitioning = true;
        setTimeout(() => {
            const screen = document.getElementById('screen');
            if(screen) {
                screen.classList.add('fade-out');
                setTimeout(() => {
                    nextSceneInternal(); 
                    screen.classList.remove('fade-out');
                    isTransitioning = false;
                }, 300);
            }
        }, 2500); 
    } else {
        playWrong();
        intimacyLevel = Math.max(0, intimacyLevel - 10); // 틀렸을 때 패널티 적용
        inclusionLevel = Math.max(0, inclusionLevel - 10); // 틀렸을 때 패널티 적용
        stabilityLevel = Math.max(0, stabilityLevel - 10); // 틀렸을 때 패널티 적용
        renderScene(); // 깎인 수치 실시간 전광판 갱신
        alert('조금 아쉽네요! 특수교육학적 관점에서 초원이의 특성을 다시 한 번 생각해 볼까요?');
    }
}

// === 실시간 스팀 스타일 업적 팝업 알림 ===
function showAchievement(title, subtitle) {
    const container = document.getElementById('game-container');
    if (!container) return;

    const badge = document.createElement('div');
    badge.className = 'achievement-badge';
    badge.innerHTML = `
        <div class="achievement-icon">🏆</div>
        <div class="achievement-content">
            <div class="achievement-title">${title}</div>
            <div class="achievement-subtitle">${subtitle}</div>
        </div>
    `;
    container.appendChild(badge);

    setTimeout(() => {
        badge.classList.add('slide-up-out');
        setTimeout(() => badge.remove(), 500);
    }, 3000);
}

// === 도전 과제 모달 수집 도감 드로잉 ===
function openAchievementModal() {
    playClick();
    const modal = document.getElementById('achievement-modal');
    const container = document.getElementById('achievement-list-container');
    if(!modal || !container) return;

    container.innerHTML = ''; 

    allAchievements.forEach(ach => {
        const isUnlocked = unlockedAchievements.includes(ach.id);
        const achItem = document.createElement('div');
        achItem.style.cssText = `display:flex; align-items:center; padding:15px; border-radius:12px; margin-bottom:10px; background:${isUnlocked ? '#fff5f7' : '#f5f5f5'}; border: 2px solid ${isUnlocked ? '#ffb6c1' : '#e0e0e0'}; opacity:${isUnlocked ? '1' : '0.6'};`;
        
        achItem.innerHTML = `
            <div style="font-size:30px; margin-right:15px;">${isUnlocked ? '🏆' : '🔒'}</div>
            <div>
                <div style="font-size:18px; font-weight:bold; color:${isUnlocked ? '#ff1493' : '#777'};">${isUnlocked ? ach.title : '??? (미해금)'}</div>
                <div style="font-size:14px; color:#555; margin-top:3px;">${isUnlocked ? ach.subtitle : ach.desc}</div>
            </div>
        `;
        container.appendChild(achItem);
    });

    modal.style.display = 'block';
}

function closeAchievementModal() {
    const modal = document.getElementById('achievement-modal');
    if(modal) modal.style.display = 'none';
}

function nextScene() {
    if (isTransitioning) return;
    if (scenes[currentSceneIndex].type === 'quiz_choices') return;

    initAudio();
    
    if (isTyping) {
        clearInterval(typeInterval);
        if(textElem) textElem.innerHTML = fullText.replace(/\\n/g, '<br>');
        isTyping = false;
        return;
    }
    
    playClick();
    
    isTransitioning = true; 
    const overlay = document.getElementById('fade-overlay');
    
    if (overlay) {
        // 1. 검은색 암전 레이어를 부드럽게 왘 덮어서 화면을 가립니다.
        overlay.classList.add('active'); 
        
        // 2. 완전히 어두워진 순간(0.35초 뒤)에 뒷배경과 텍스트를 몰래 바꿉니다.
        setTimeout(() => {
            nextSceneInternal(); 
            
            // 3. 바뀐 뒤에 다시 검은색 레이어를 걷어내어 부드럽게 밝아집니다.
            overlay.classList.remove('active'); 
            
            setTimeout(() => {
                isTransitioning = false; 
            }, 100);
        }, 350); 
    } else {
        // 혹시 모를 예외 방어용
        nextSceneInternal();
        isTransitioning = false;
    }
}

function goBack(event) {
    if(event) event.stopPropagation();
    if (isTransitioning) return; 
    initAudio();
    playClick();
    
    if (isTyping) clearInterval(typeInterval);

    if (currentSceneIndex > 2) {
        isTransitioning = true;
        const overlay = document.getElementById('fade-overlay');
        
        if (overlay) {
            overlay.classList.add('active');
            
            setTimeout(() => {
                currentSceneIndex--;
                if (scenes[currentSceneIndex].type === 'quiz_choices') {
                    intimacyLevel = Math.max(0, intimacyLevel - 33.34);
                    inclusionLevel = Math.max(0, intimacyLevel - 33.34);
                    stabilityLevel = Math.max(50, stabilityLevel - 15);
                }
                renderScene();
                overlay.classList.remove('active');
                
                setTimeout(() => {
                    isTransitioning = false;
                }, 100);
            }, 350);
        } else {
            currentSceneIndex--;
            renderScene();
            isTransitioning = false;
        }
    }
}
function nextSceneInternal() {
    if (currentSceneIndex < scenes.length - 1) {
        currentSceneIndex++;
        renderScene();
    }
}
window.onload = renderScene;

// ==========================================================================
// [최종 패치] 번쩍임 원천 차단 - 키보드 연타 물리 방어막 시스템 (Debounce)
// ==========================================================================
let keyboardLock = false; // 키보드 전용 물리 락 변수

// ==========================================================================
// [최종 버그 컷] 키보드 종합 조작 시스템 (이름 입력 중 인게임 조작 완전 차단)
// ==========================================================================
window.addEventListener('keydown', (event) => {
    // [★진짜 원인 검거 및 완벽 방어막] 
    // 이름 입력 모달창이 화면에 보이고 있을 때는, 키보드 타이핑이 인게임 대사를 넘기지 못하도록 작동을 원천 차단합니다!
    const nameModal = document.getElementById('name-input-modal');
    if (nameModal && nameModal.style.display === 'block') return;

    // 업적 모달창이 열려있을 때도 조작 차단
    const modal = document.getElementById('achievement-modal');
    if (modal && modal.style.display === 'block') return;

    if (keyboardLock || isTransitioning) return;

    // 1. [정방향] 다음 대사로 넘기기 (스페이스, 엔터, 오른쪽 화살표, D키)
    if (event.code === 'Space' || event.code === 'Enter' || event.code === 'ArrowRight' || event.code === 'KeyD') {
        if (scenes[currentSceneIndex].type === 'quiz_choices') return;
        event.preventDefault(); 
        
        if (isTyping) {
            nextScene();
            return;
        }

        keyboardLock = true;
        nextScene();
        setTimeout(() => { keyboardLock = false; }, 500);
    }
    
    // 2. [역방향] 이전 대사로 돌아가기 (왼쪽 화살표, A키)
    else if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
        if (currentSceneIndex <= 2) return;
        if (scenes[currentSceneIndex].type === 'quiz_choices') return;
        event.preventDefault();
        
        keyboardLock = true;
        goBack(null);
        setTimeout(() => { keyboardLock = false; }, 500);
    }
});