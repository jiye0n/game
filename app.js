/**
 * "초원이의 달리기: 백만불짜리 다리" - Core Game Engine (app.js)
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. 상태 변수 정의
  let gameState = {
    currentScene: "prologue",
    stats: {
      rapport: 10,
      inclusion: 20,
      stability: 80
    },
    unlockedBadges: []
  };

  // 타이핑 효과용 제어 변수
  let typingTimer = null;
  let isTyping = false;
  let currentSceneText = "";

  // 2. DOM 요소 선택
  const elSceneTitle = document.getElementById("scene-title");
  const elStoryText = document.getElementById("story-text");
  const elChoicesContainer = document.getElementById("choices-container");
  const elSceneImage = document.getElementById("scene-image");
  const elSvgFallback = document.getElementById("svg-fallback-container");
  const elPolaroidCard = document.getElementById("polaroid-card");

  // HUD 요소
  const elValRapport = document.getElementById("val-rapport");
  const elValInclusion = document.getElementById("val-inclusion");
  const elValStability = document.getElementById("val-stability");
  
  const elFillRapport = document.querySelector(".fill-rapport");
  const elFillInclusion = document.querySelector(".fill-inclusion");
  const elFillStability = document.querySelector(".fill-stability");

  const elBtnRestart = document.getElementById("btn-restart");
  const elBtnAchievementsToggle = document.getElementById("btn-achievements-toggle");

  // 모달 요소
  const elModalExplanation = document.getElementById("modal-explanation");
  const elExplanationTitle = document.getElementById("explanation-title");
  const elExplanationContent = document.getElementById("explanation-content");
  const elBtnCloseExplanation = document.getElementById("btn-close-explanation");

  const elModalAchievements = document.getElementById("modal-achievements");
  const elBtnCloseAchievements = document.getElementById("btn-close-achievements");

  // 3. Web Audio API 기반 효과음 생성기 (외부 파일 없이 작동하는 오디오 신디사이저)
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  function playSound(type) {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'click') {
      // 틱! 조작감 향상음
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(100, now + 0.1);
      gainNode.gain.setValueAtTime(0.08, now);
      gainNode.gain.linearRampToValueAtTime(0.01, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
    } else if (type === 'correct') {
      // 띵똥~ 맑은 정답음
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.12); // E5
      gainNode.gain.setValueAtTime(0.12, now);
      gainNode.gain.linearRampToValueAtTime(0.01, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.4);
    } else if (type === 'wrong') {
      // 띠익- 오답 경고음
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(120, now + 0.25);
      gainNode.gain.setValueAtTime(0.1, now);
      gainNode.gain.linearRampToValueAtTime(0.01, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'achievement') {
      // 따라라란~ 업적 해제 팡파르
      osc.type = 'sine';
      const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
      notes.forEach((freq, idx) => {
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      });
      gainNode.gain.setValueAtTime(0.1, now);
      gainNode.gain.linearRampToValueAtTime(0.01, now + 0.6);
      osc.start(now);
      osc.stop(now + 0.6);
    }
  }

  // 4. 감성 SVG 일러스트 목록 (이미지가 로드 안 되었을 때 노출될 벡터 그래픽)
  const SVG_LIBRARY = {
    "school-bell": `
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4">
        <path d="M50 15 A25 25 0 0 1 75 40 L75 65 A5 5 0 0 0 80 70 L20 70 A5 5 0 0 0 25 65 L25 40 A25 25 0 0 1 50 15 Z" fill="hsla(45, 100%, 75%, 0.2)"/>
        <path d="M42 70 A8 8 0 0 0 58 70" fill="currentColor"/>
        <circle cx="50" cy="12" r="4" fill="currentColor"/>
        <path d="M50 70 L50 85" stroke-dasharray="2 2"/>
      </svg>`,
    "zebra-doll": `
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4">
        <!-- 머리 및 주둥이 -->
        <rect x="25" y="30" width="30" height="40" rx="10" fill="white" stroke="currentColor"/>
        <rect x="20" y="55" width="20" height="15" rx="5" fill="hsl(200, 20%, 30%)"/>
        <!-- 귀 -->
        <path d="M28 30 L22 15 L35 25" fill="white"/>
        <path d="M48 30 L54 15 L45 25" fill="white"/>
        <!-- 얼룩말 줄무늬 -->
        <path d="M25 40 H38" stroke="currentColor" stroke-width="3"/>
        <path d="M25 48 H42" stroke="currentColor" stroke-width="3"/>
        <path d="M25 56 H35" stroke="currentColor" stroke-width="3"/>
        <circle cx="42" cy="40" r="3" fill="currentColor"/>
      </svg>`,
    "zebra-hug": `
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4">
        <circle cx="50" cy="40" r="20" fill="hsla(350, 80%, 80%, 0.2)" stroke="currentColor"/>
        <path d="M30 75 C30 55, 70 55, 70 75" fill="none" stroke="currentColor"/>
        <!-- 품안의 하트 -->
        <path d="M50 48 C50 48, 43 40, 50 35 C57 40, 50 48, 50 48 Z" fill="hsl(350, 80%, 65%)" stroke="hsl(350, 80%, 65%)"/>
      </svg>`,
    "board-game": `
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4">
        <rect x="20" y="20" width="60" height="60" rx="6" fill="hsla(190, 80%, 70%, 0.1)"/>
        <!-- 그리드 라인 -->
        <path d="M40 20 V80 M60 20 V80 M20 40 H80 M20 60 H80" stroke-dasharray="4 4"/>
        <!-- 말들 -->
        <circle cx="30" cy="30" r="5" fill="hsl(350, 80%, 65%)"/>
        <circle cx="70" cy="50" r="5" fill="hsl(190, 80%, 45%)"/>
        <polygon points="50,65 45,75 55,75" fill="hsl(50, 100%, 60%)" stroke="currentColor" stroke-width="2"/>
      </svg>`,
    "hand-in-hand": `
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4">
        <path d="M20 50 Q35 30 50 50 T80 50" stroke-dasharray="1 1"/>
        <!-- 맞잡은 두 손 인터랙션 -->
        <circle cx="40" cy="50" r="10" fill="hsla(120, 50%, 60%, 0.2)"/>
        <circle cx="60" cy="50" r="10" fill="hsla(190, 80%, 50%, 0.2)"/>
        <path d="M35 50 H65 M40 45 L45 55 M55 45 L60 55"/>
      </svg>`,
    "headphones": `
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4">
        <!-- 헤드셋 밴드 -->
        <path d="M25 50 A25 25 0 0 1 75 50" stroke="currentColor"/>
        <!-- 이어패드 -->
        <rect x="18" y="42" width="12" height="24" rx="4" fill="hsl(215, 20%, 30%)"/>
        <rect x="70" y="42" width="12" height="24" rx="4" fill="hsl(215, 20%, 30%)"/>
        <!-- 음파 차단 표시 -->
        <path d="M10 45 Q5 50 10 55 M85 45 Q90 50 85 55" stroke-dasharray="2 2"/>
      </svg>`,
    "calm-bench": `
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4">
        <!-- 구름과 해 -->
        <circle cx="75" cy="25" r="8" fill="hsla(50, 100%, 70%, 0.3)" stroke="hsl(50, 100%, 60%)"/>
        <path d="M20 25 Q30 20 40 25 T60 25" stroke="white" stroke-width="2"/>
        <!-- 나무 그늘 벤치 -->
        <path d="M25 65 H75 M30 55 H70 M35 55 V75 M65 55 V75" stroke="currentColor"/>
        <path d="M20 75 H80" stroke="currentColor" stroke-width="2"/>
      </svg>`,
    "marathon-finish": `
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4">
        <!-- 월계수/금메달 배경 -->
        <circle cx="50" cy="45" r="22" fill="hsla(50, 100%, 75%, 0.15)" stroke="hsl(50, 100%, 60%)" stroke-dasharray="4 2"/>
        <!-- 러너 형상화 -->
        <circle cx="50" cy="25" r="5" fill="currentColor"/>
        <path d="M50 30 L50 48 L40 65 M50 48 L60 65 M50 35 L35 45 M50 35 L65 40" stroke="currentColor" stroke-linecap="round"/>
        <!-- 결승선 테이프 -->
        <path d="M15 52 H85" stroke="hsl(350, 80%, 60%)" stroke-width="3"/>
      </svg>`,
    "alert-icon": `
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4">
        <polygon points="50,15 85,80 15,80" fill="hsla(350, 80%, 60%, 0.1)" stroke="hsl(350, 80%, 55%)"/>
        <line x1="50" y1="40" x2="50" y2="60" stroke="hsl(350, 80%, 55%)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="50" cy="70" r="3" fill="hsl(350, 80%, 55%)"/>
      </svg>`
  };

  // 5. 게임 데이터 로드 및 로컬 세이브 연동
  function loadGame() {
    const savedState = localStorage.getItem("chowon_game_save");
    const savedBadges = localStorage.getItem("chowon_game_badges");
    
    if (savedState) {
      gameState = JSON.parse(savedState);
    }
    if (savedBadges) {
      gameState.unlockedBadges = JSON.parse(savedBadges);
    }
    updateHudUi();
    updateBadgeBoard();
  }

  function saveGame() {
    localStorage.setItem("chowon_game_save", JSON.stringify(gameState));
    localStorage.setItem("chowon_game_badges", JSON.stringify(gameState.unlockedBadges));
  }

  // 6. HUD UI 업데이트 및 부드러운 스탯 바운스(맥박) 연출
  function updateHudUi() {
    // 0~100 범위 보정
    gameState.stats.rapport = Math.max(0, Math.min(100, gameState.stats.rapport));
    gameState.stats.inclusion = Math.max(0, Math.min(100, gameState.stats.inclusion));
    gameState.stats.stability = Math.max(0, Math.min(100, gameState.stats.stability));

    // 숫자 반영
    animateValue(elValRapport, parseInt(elValRapport.textContent), gameState.stats.rapport);
    animateValue(elValInclusion, parseInt(elValInclusion.textContent), gameState.stats.inclusion);
    animateValue(elValStability, parseInt(elValStability.textContent), gameState.stats.stability);

    // 게이지 반영
    updateGaugeFill(elFillRapport, gameState.stats.rapport);
    updateGaugeFill(elFillInclusion, gameState.stats.inclusion);
    updateGaugeFill(elFillStability, gameState.stats.stability);
  }

  // 게이지 바 채움과 동시에 맥박 클래스 적용
  function updateGaugeFill(el, targetVal) {
    el.style.width = `${targetVal}%`;
    el.classList.add("pulse-active");
    setTimeout(() => {
      el.classList.remove("pulse-active");
    }, 800);
  }

  // 숫자가 드르륵 움직이며 변하는 카운터 애니메이션
  function animateValue(obj, start, end) {
    if (start === end) return;
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(400 / range));
    stepTime = Math.max(5, Math.min(stepTime, 50)); // 시간 보정
    
    let timer = setInterval(function() {
      current += increment;
      obj.textContent = `${current}%`;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  // 7. 업적 잠금 해제 시스템
  function unlockBadge(badgeId) {
    if (!gameState.unlockedBadges.includes(badgeId)) {
      gameState.unlockedBadges.push(badgeId);
      playSound("achievement");
      saveGame();
      updateBadgeBoard();

      // 우측 하단 소형 알림 연출
      showToastAlert(badgeId);
    }
  }

  function updateBadgeBoard() {
    const badges = {
      "badge-first-step": "first-step",
      "badge-inclusion": "inclusion",
      "badge-shield": "shield",
      "badge-marathoner": "marathoner"
    };

    Object.keys(badges).forEach(elId => {
      const el = document.getElementById(elId);
      if (el) {
        if (gameState.unlockedBadges.includes(badges[elId])) {
          el.classList.remove("locked");
          el.classList.add("unlocked");
        } else {
          el.classList.remove("unlocked");
          el.classList.add("locked");
        }
      }
    });
  }

  function showToastAlert(badgeName) {
    const titles = {
      "first-step": "👣 [첫 걸음마] 업적 달성!",
      "inclusion": "🤝 [더불어 사는 교실] 업적 달성!",
      "shield": "🎧 [감각의 페이스메이커] 업적 달성!",
      "marathoner": "🏅 [백만불짜리 완주] 최종 달성!"
    };
    
    const toast = document.createElement("div");
    toast.className = "toast-notification";
    toast.innerHTML = `
      <div style="font-weight: bold; margin-bottom: 4px; color: var(--chalk-yellow);">${titles[badgeName]}</div>
      <div style="font-size: 0.8rem; color: white;">도전 과제 뱃지를 획득했습니다.</div>
    `;
    
    // 스타일 동적 삽입
    Object.assign(toast.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      background: "rgba(10, 25, 15, 0.95)",
      borderLeft: "5px solid hsl(120, 50%, 55%)",
      padding: "16px 20px",
      borderRadius: "8px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
      zIndex: "1000",
      transform: "translateY(100px)",
      opacity: "0",
      transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    });

    document.body.appendChild(toast);
    
    // 페이드인
    setTimeout(() => {
      toast.style.transform = "translateY(0)";
      toast.style.opacity = "1";
    }, 100);

    // 페이드아웃 후 삭제
    setTimeout(() => {
      toast.style.transform = "translateY(100px)";
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 600);
    }, 4500);
  }

  // 8. 텍스트 타이핑 효과 및 스킵 로직
  function typeWriterEffect(text) {
    // 기존 타이머 정지
    if (typingTimer) clearInterval(typingTimer);
    
    isTyping = true;
    currentSceneText = text;
    elStoryText.innerHTML = "";
    
    let index = 0;
    // 글자 간 타이핑 시간 (ms)
    const typingSpeed = 25; 

    typingTimer = setInterval(() => {
      // 줄바꿈 대응 처리
      if (text[index] === "\n") {
        elStoryText.innerHTML += "<br>";
      } else {
        elStoryText.innerHTML += text[index];
      }
      index++;

      if (index >= text.length) {
        clearInterval(typingTimer);
        isTyping = false;
      }
    }, typingSpeed);
  }

  // 타이핑 스킵 기능 (글상자 클릭 시 한 번에 표시)
  elStoryText.parentNode.addEventListener("click", () => {
    if (isTyping) {
      clearInterval(typingTimer);
      isTyping = false;
      // 줄바꿈 대응 전체 텍스트 주입
      elStoryText.innerHTML = currentSceneText.replace(/\n/g, "<br>");
    }
  });

  // 9. 핵심 게임 루프 - 씬 렌더링 엔진
  function renderScene(sceneId) {
    const scene = window.storyData[sceneId];
    if (!scene) {
      console.error(`씬 데이터를 찾을 수 없습니다: ${sceneId}`);
      return;
    }

    gameState.currentScene = sceneId;
    saveGame();

    // 9-1. 제목 및 본문 렌더링
    elSceneTitle.textContent = scene.title;
    typeWriterEffect(scene.text);

    // 9-2. 이미지 로드 및 폴라로이드 틸트 연출
    elSceneImage.src = scene.image;
    elSceneImage.style.display = "block";
    elSvgFallback.style.display = "none";
    
    // SVG Fallback 바인딩
    if (scene.svgFallback && SVG_LIBRARY[scene.svgFallback]) {
      elSvgFallback.innerHTML = SVG_LIBRARY[scene.svgFallback];
    } else {
      elSvgFallback.innerHTML = SVG_LIBRARY["alert-icon"];
    }

    // 폴라로이드 액자 약간의 랜덤 틸트 부여 (생동감 향상)
    const randomTilt = (Math.random() * 4 - 2).toFixed(1);
    elPolaroidCard.style.transform = `rotate(${randomTilt}deg)`;

    // 9-3. 선택지 버튼 바인딩
    elChoicesContainer.innerHTML = "";
    scene.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = choice.text;
      
      // 마우스 호버 효과
      btn.addEventListener("mouseenter", () => playSound("click"));
      
      // 클릭 시나리오 전개
      btn.addEventListener("click", () => {
        handleChoiceClick(choice);
      });

      elChoicesContainer.appendChild(btn);
    });
  }

  // 10. 선택지 클릭 핸들러
  function handleChoiceClick(choice) {
    // 10-1. 효과음 출력
    if (choice.isCorrect === true) {
      playSound("correct");
    } else if (choice.isCorrect === false) {
      playSound("wrong");
    } else {
      playSound("click");
    }

    // 10-2. 스탯 연산 처리
    if (choice.effects) {
      if (choice.effects.isReset) {
        // 게임 완전 초기화
        gameState.stats = { rapport: 10, inclusion: 20, stability: 80 };
        gameState.currentScene = "prologue";
        saveGame();
        updateHudUi();
        renderScene("prologue");
        return;
      }

      // 스탯 덧셈
      Object.keys(choice.effects).forEach(key => {
        if (gameState.stats[key] !== undefined) {
          gameState.stats[key] += choice.effects[key];
        }
      });
      updateHudUi();
    }

    // 10-3. 업적 체크 및 락 해제 트리거
    if (choice.nextId === "episode2") {
      unlockBadge("first-step");
    } else if (choice.nextId === "episode3") {
      unlockBadge("inclusion");
    } else if (choice.nextId === "ending") {
      unlockBadge("shield");
    } else if (gameState.currentScene === "ending") {
      unlockBadge("marathoner");
    }

    // 10-4. 정답 해설 모달 출력 분기
    const nextScene = window.storyData[choice.nextId];
    if (nextScene && nextScene.explanation) {
      // 길라잡이 모달을 연 뒤, 닫을 때 다음 씬으로 전환
      showExplanationModal(nextScene.explanation, choice.nextId);
    } else {
      renderScene(choice.nextId);
    }
  }

  // 11. 특수교육 길라잡이 해설창 노출
  let nextScenePending = null;
  function showExplanationModal(explanation, nextId) {
    elExplanationTitle.textContent = explanation.title;
    elExplanationContent.innerHTML = explanation.content.replace(/\n/g, "<br>");
    nextScenePending = nextId;

    elModalExplanation.classList.add("active");
  }

  elBtnCloseExplanation.addEventListener("click", () => {
    playSound("click");
    elModalExplanation.classList.remove("active");
    if (nextScenePending) {
      renderScene(nextScenePending);
      nextScenePending = null;
    }
  });

  // 12. 도전 과제 모달 토글
  elBtnAchievementsToggle.addEventListener("click", () => {
    playSound("click");
    updateBadgeBoard();
    elModalAchievements.classList.add("active");
  });

  elBtnCloseAchievements.addEventListener("click", () => {
    playSound("click");
    elModalAchievements.classList.remove("active");
  });

  // 모달 뒷배경 클릭 시 닫기
  window.addEventListener("click", (e) => {
    if (e.target === elModalAchievements) {
      elModalAchievements.classList.remove("active");
    }
  });

  // 13. 게임 리셋 기능
  elBtnRestart.addEventListener("click", () => {
    if (confirm("정말 처음부터 다시 시작하시겠습니까? 현재 스탯과 진행도가 초기화됩니다. (뱃지 획득 내역은 유지됩니다)")) {
      playSound("wrong");
      gameState.stats = {
        rapport: 10,
        inclusion: 20,
        stability: 80
      };
      gameState.currentScene = "prologue";
      saveGame();
      updateHudUi();
      renderScene("prologue");
    }
  });

  // 14. 게임 시동
  loadGame();
  renderScene(gameState.currentScene);
});
