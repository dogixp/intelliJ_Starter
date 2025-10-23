
import { ShortcutCategory, SummaryItem } from './types';

export const SHORTCUT_CATEGORIES: ShortcutCategory[] = [
  {
    title: '만능 단축키',
    description: '가장 먼저 익혀야 할, 무엇이든 찾아주고 실행하는 핵심 단축키입니다.',
    shortcuts: [
      {
        description: 'Search Everywhere (무엇이든 검색)',
        mac: ['Shift', 'Shift'],
        win: ['Shift', 'Shift'],
      },
      {
        description: 'Find Action (기능 실행)',
        mac: ['⌘', '⇧', 'A'],
        win: ['Ctrl', 'Shift', 'A'],
      },
    ],
  },
  {
    title: '파일 및 코드 탐색',
    description: '원하는 클래스, 파일, 심볼로 빠르게 이동하고 최근 파일을 확인합니다.',
    shortcuts: [
      {
        description: '클래스로 이동',
        mac: ['⌘', 'O'],
        win: ['Ctrl', 'N'],
      },
      {
        description: '파일로 이동',
        mac: ['⌘', '⇧', 'O'],
        win: ['Ctrl', 'Shift', 'N'],
      },
      {
        description: '심볼로 이동',
        mac: ['⌥', '⌘', 'O'],
        win: ['Ctrl', 'Alt', 'Shift', 'N'],
      },
      {
        description: '최근 파일 목록',
        mac: ['⌘', 'E'],
        win: ['Ctrl', 'E'],
      },
    ],
  },
  {
    title: '코드 작성 및 품질 관리',
    description: '자동 완성, 퀵픽스, 코드 포맷팅으로 생산성과 코드 품질을 높입니다.',
    shortcuts: [
       {
        description: '자동 완성 (Live Templates)',
        mac: ['psvm', '+ Tab'],
        win: ['psvm', '+ Tab'],
      },
      {
        description: '인스펙션 및 퀵픽스 (Quick Fixes)',
        mac: ['Alt', 'Enter'],
        win: ['Alt', 'Enter'],
      },
      {
        description: '코드 포맷팅',
        mac: ['⌥', '⌘', 'L'],
        win: ['Ctrl', 'Alt', 'L'],
      },
    ],
  },
  {
    title: '리팩터링 (Refactoring)',
    description: '코드 구조를 안전하고 자동으로 개선하는 필수 기능입니다.',
    shortcuts: [
      {
        description: '이름 바꾸기',
        mac: ['⇧', 'F6'],
        win: ['Shift', 'F6'],
      },
      {
        description: '변수 추출',
        mac: ['⌥', '⌘', 'V'],
        win: ['Ctrl', 'Alt', 'V'],
      },
      {
        description: '메서드 추출',
        mac: ['⌥', '⌘', 'M'],
        win: ['Ctrl', 'Alt', 'M'],
      },
      {
        description: '임포트 최적화',
        mac: ['⌥', '⌘', 'O'],
        win: ['Ctrl', 'Alt', 'O'],
      },
    ],
  },
    {
    title: '실행 및 테스트',
    description: '에디터에서 바로 코드를 실행, 디버그하고 프로젝트를 빌드합니다.',
    shortcuts: [
      {
        description: '실행',
        mac: ['^', '⇧', 'R'],
        win: ['Shift', 'F10'],
      },
      {
        description: '디버그',
        mac: ['^', '⇧', 'D'],
        win: ['Shift', 'F9'],
      },
      {
        description: '빌드',
        mac: ['⌘', 'F9'],
        win: ['Ctrl', 'F9'],
      },
    ],
  },
  {
    title: '디버거 (Debugger)',
    description: '브레이크포인트를 설정하고 코드 실행 흐름을 제어하며 버그를 찾습니다.',
    shortcuts: [
      {
        description: '브레이크포인트 설정/해제',
        mac: ['Gutter Click'],
        win: ['Gutter Click'],
      },
      {
        description: '한 줄 건너뛰기 (Step Over)',
        mac: ['F8'],
        win: ['F8'],
      },
      {
        description: '메서드 내부로 진입 (Step Into)',
        mac: ['F7'],
        win: ['F7'],
      },
      {
        description: '계속 실행 (Resume)',
        mac: ['F9'],
        win: ['F9'],
      },
    ],
  },
    {
    title: 'Git 연동',
    description: 'IDE를 벗어나지 않고 Git 브랜치, 커밋, 푸시 등 버전 관리를 수행합니다.',
    shortcuts: [
      {
        description: '커밋 창 열기',
        mac: ['⌘', 'K'],
        win: ['Ctrl', 'K'],
      },
      {
        description: '푸시',
        mac: ['⌘', '⇧', 'K'],
        win: ['Ctrl', 'Shift', 'K'],
      },
    ],
  },
    {
    title: '검색 및 치환',
    description: '현재 파일 또는 프로젝트 전체에서 텍스트를 찾고 바꿉니다.',
    shortcuts: [
      {
        description: '현재 파일에서 찾기',
        mac: ['⌘', 'F'],
        win: ['Ctrl', 'F'],
      },
      {
        description: '프로젝트 전체에서 찾기',
        mac: ['⌘', '⇧', 'F'],
        win: ['Ctrl', 'Shift', 'F'],
      },
    ],
  },
];

export const SUMMARY_ITEMS: SummaryItem[] = [
    {
        description: 'Shift 두 번으로 뭐든 찾는다.',
        mac: ['Shift', 'Shift'],
        win: ['Shift', 'Shift'],
    },
    {
        description: 'Alt+Enter로 경고를 바로 고친다.',
        mac: ['Alt', 'Enter'],
        win: ['Alt', 'Enter'],
    },
    {
        description: '리팩터링한다.',
        mac: ['⇧F6', '⌥⌘V', '⌥⌘M'],
        win: ['Shift+F6', 'Ctrl+Alt+V', 'Ctrl+Alt+M'],
    },
    {
        description: '실행/디버그 흐름을 조절한다.',
        mac: ['^⇧R', '^⇧D', 'F8/F7/F9'],
        win: ['Shift+F10', 'Shift+F9', 'F8/F7/F9'],
    },
    {
        description: '커밋·푸시한다.',
        mac: ['⌘K', '⌘⇧K'],
        win: ['Ctrl+K', 'Ctrl+Shift+K'],
    },
];
