
import React from 'react';
import { SHORTCUT_CATEGORIES, SUMMARY_ITEMS } from './constants';
import { ShortcutCategory as ShortcutCategoryType } from './types';
import { ShortcutCard } from './components/ShortcutCard';
import { SummaryCard } from './components/SummaryCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans p-4 sm:p-8">
      <main className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            IntelliJ IDEA 빠른 시작 치트시트
          </h1>
          <p className="text-lg text-gray-400">
            초보자도 바로 따라 할 수 있는 인텔리제이 IDEA의 핵심 툴과 사용법을 빠르게 훑어보세요.
          </p>
        </header>

        <section className="mb-12">
           <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-lg">
            <p className="border-l-4 border-blue-400 pl-4 text-gray-300">
              <strong>프로젝트 생성 및 화면 구성:</strong> 'New Project'를 눌러 JDK만 지정하면 기본 자바 프로젝트를 만들 수 있습니다. 화면은 주로 왼쪽(프로젝트 파일 트리), 가운데(에디터), 아래(빌드/터미널 탭), 오른쪽 위(실행 버튼)으로 구성됩니다.
            </p>
          </div>
        </section>

        {SHORTCUT_CATEGORIES.map((category: ShortcutCategoryType) => (
          <ShortcutCard key={category.title} category={category} />
        ))}
        
        <SummaryCard title="마지막으로, 꼭 기억할 5줄 요약" items={SUMMARY_ITEMS} />

        <footer className="text-center mt-12 text-gray-500">
          <p>이 정도만 익히면 인텔리제이의 80%는 이미 손에 들어온 겁니다.</p>
           <p className="mt-2 text-sm">다음 단계에서는 디버그 워치, Evaluate Expression, 코드 템플릿 커스터마이징으로 생산성을 한 단계 더 끌어올려 보세요.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
