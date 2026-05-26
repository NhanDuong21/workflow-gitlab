import { useState } from 'react';

export default function GitLabWorkflowHub() {
  const [activeTab, setActiveTab] = useState('overview');
  const [copiedSection, setCopiedSection] = useState('');

  const copyToClipboard = (text, sectionId) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(''), 2000);
  };

  // 1. Data Members
  const team = [
    { name: 'Thành', role: 'Team Leader', desc: 'Phụ trách GitLab workflow, phân tách task, review code và merge Merge Request.' },
    { name: 'Nhân', role: 'Developer', desc: 'Phụ trách thiết lập GitLab issue template, MR template và viết tài liệu docs workflow.' },
    { name: 'Khang', role: 'Developer', desc: 'Phụ trách khởi tạo cấu trúc dự án React Vite và làm layout giao diện frontend.' },
    { name: 'Vinh', role: 'Developer', desc: 'Phụ trách thiết lập cấu trúc mã nguồn các dịch vụ Spring Boot (Backend).' },
    { name: 'Hoàng', role: 'Developer', desc: 'Phụ trách thiết kế sơ đồ thực thể ERD và viết bản thảo MySQL database schema.' },
  ];

  // 2. Data Tech Stack
  const techStack = [
    { component: 'Frontend Framework', detail: 'React + Vite' },
    { component: 'Primary Database', detail: 'MySQL' },
    { component: 'Cache Layer', detail: 'Redis' },
    { component: 'Message Queue', detail: 'Kafka' },
    { component: 'Backend Language', detail: 'Java Spring Boot' },
    { component: 'Auth Strategy', detail: 'JWT' },
    { component: 'Container Orchestration', detail: 'Docker' },
    { component: 'Real-time Comm.', detail: 'WebSocket (Socket.IO)' },
  ];

  // 3. Raw Text Content for Copying
  const issueFormatText = `[Module] Verb + Object`;
  
  const issueTemplateText = `## Objective
Mô tả ngắn gọn mục tiêu của task này.

---

## Scope of Work
- [ ] Công việc 1
- [ ] Công việc 2
- [ ] Công việc 3

---

## Acceptance Criteria
- [ ] Điều kiện 1 để task được xem là hoàn thành
- [ ] Điều kiện 2 để task được xem là hoàn thành

---

## Technical Notes
Ghi chú kỹ thuật nếu có.

---

## Branch Name
\`\`\`bash
feature/<short-task-name>
\`\`\`

## Metadata
- **Assignee:** [Tên member]
- **Milestone:** Sprint 0 - Project Setup & Planning
- **Labels:** type::... | module::... | priority::... | status::ready

---
## Definition of Done
- [ ] Code đã hoàn thành & tự test local
- [ ] Không push trực tiếp vào main/develop
- [ ] Đã tạo Merge Request vào develop và được review/merge
- [ ] Issue được chuyển sang status::done`;

  const mrTemplateText = `## Summary
Mô tả ngắn gọn thay đổi trong MR này.

---

## Related Issue
Closes #

---

## Changes
- [ ] Change 1
- [ ] Change 2

---

## How to Test
1. Pull branch này về local
2. Chạy project và kiểm tra chức năng liên quan

---

## Screenshots
Thêm ảnh nếu có thay đổi UI.

---

## Checklist
- [ ] Code chạy được ở local và không có conflict
- [ ] Không push trực tiếp vào main/develop (Branch được tạo từ develop)
- [ ] Đã self-review và update issue sang status::review`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-sky-500 selection:text-slate-950">
      {/* Top Navigation Bar */}
      <header className="border-b border-slate-800 bg-slate-900/40 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-sky-500 text-slate-950 px-2.5 py-1 rounded font-black text-xs tracking-wider uppercase">
              FSOFT OJT
            </div>
            <div>
              <h1 className="text-base font-bold text-white tracking-tight">HCM26_CPL_JAVA_05 / Group 3</h1>
              <p className="text-xs text-slate-400">Movie Ticket Booking System (6 Sprints & Agile)</p>
            </div>
          </div>
          
          <nav className="flex flex-wrap bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
            {[
              { id: 'overview', label: '1. Tổng Quan Dự Án' },
              { id: 'labels', label: '2. Hệ Thống Labels' },
              { id: 'workflow', label: '3. Quy Trình Thành Viên' },
              { id: 'templates', label: '4. Kho Templates' },
              { id: 'sprint0', label: '5. Kế Hoạch Sprint 0' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 rounded-md font-medium transition-all ${
                  activeTab === tab.id ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-12">
        
        {/* THE GOLDEN RULES - Fixed Header for Presentation */}
        <section className="bg-rose-950/20 border border-rose-900/40 rounded-xl p-5 flex gap-4 items-start">
          <div className="bg-rose-500/20 p-2 rounded-lg text-rose-400 shrink-0">
            ⚠️
          </div>
          <div className="space-y-1">
            <h3 className="text-rose-400 font-bold text-sm uppercase tracking-wider">5 Quy Tắc Bất Di Bất Dịch Khi Làm Việc Nhóm</h3>
            <ol className="list-decimal list-inside text-xs text-slate-300 space-y-1">
              <li><span className="text-white font-medium">Không push trực tiếp</span> vào hai nhánh chính: <code className="bg-slate-900 text-rose-300 px-1 py-0.5 rounded">main / master</code> và <code className="bg-slate-900 text-sky-300 px-1 py-0.5 rounded">develop</code>.</li>
              <li><span className="text-white font-medium">Mọi công việc / task</span> phát sinh đều bắt buộc phải có một GitLab Issue tương ứng.</li>
              <li><span className="text-white font-medium">Mỗi issue làm trên một branch riêng</span>, được checkout từ nhánh gốc là <code className="bg-slate-900 text-sky-300 px-1 py-0.5 rounded">develop</code>.</li>
              <li><span className="text-white font-medium">Code xong phải tạo Merge Request (MR)</span> vào nhánh <code className="bg-slate-900 text-sky-300 px-1 py-0.5 rounded">develop</code> để kiểm tra.</li>
              <li><span className="text-white font-medium">Issue chỉ được coi là DONE</span> khi MR đã được merge thành công hoặc có sự xác nhận của Leader.</li>
            </ol>
          </div>
        </section>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Project Architecture Rule */}
            <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">📂 Cấu trúc Repository Yêu Cầu</h3>
              <p className="text-xs text-slate-400">Mỗi service là một project Spring Boot riêng biệt, nằm chung bên trong một repository tổng lớn:</p>
              <pre className="bg-slate-950 p-4 rounded-lg font-mono text-xs text-emerald-400 border border-slate-850 leading-relaxed">
{`movie-ticket-system/
├── client/                 # Mã nguồn Frontend (React + Vite)
├── api-gateway/            # Cổng kết nối API Gateway của hệ thống
├── server/                 # Thư mục chứa các Microservices riêng biệt
│   ├── auth-service/       # Chức năng bảo mật, phân quyền định danh
│   ├── movie-service/      # Quản lý thông tin phim, rạp, suất chiếu
│   └── booking-service/    # Xử lý logic đặt vé xem phim trực tuyến
├── docs/                   # Thư mục lưu trữ tài liệu quy trình, ERD
├── docker-compose.yml      # File cấu hình khởi chạy môi trường Docker
└── README.md               # Hướng dẫn tổng quát của dự án`}
              </pre>
            </div>

            {/* Architecture Grid & Team */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">🛠️ Công Nghệ Sử Dụng (Tech Stack)</h3>
                <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/20 text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-900 border-b border-slate-800 text-slate-400 font-mono">
                        <th className="p-3">Hạng mục</th>
                        <th className="p-3">Công nghệ chỉ định</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-mono">
                      {techStack.map((tech, idx) => (
                        <tr key={idx} className="hover:bg-slate-900/30">
                          <td className="p-3 text-slate-400">{tech.component}</td>
                          <td className="p-3 text-sky-400 font-bold">{tech.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">👥 Phân Chia Vai Trò Thành Viên (Sprint 0)</h3>
                <div className="space-y-3">
                  {team.map((member, idx) => (
                    <div key={idx} className="p-3 bg-slate-900/30 border border-slate-800 rounded-lg flex justify-between items-start gap-4">
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-white flex items-center gap-2">
                          {member.name}
                          <span className={`text-[10px] font-mono font-normal px-1.5 py-0.5 rounded ${idx === 0 ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-800 text-slate-400'}`}>
                            {idx === 0 ? 'Leader' : 'Developer'}
                          </span>
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{member.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LABELS SYSTEM */}
        {activeTab === 'labels' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-5 bg-slate-900/30 border border-slate-800 rounded-xl space-y-2">
              <h3 className="text-base font-bold text-white">🏷️ Quy Tắc Cấu Hình 4 Nhóm Nhãn (Labels) Bắt Buộc</h3>
              <p className="text-xs text-slate-400">Mỗi issue được tạo ra trên hệ thống phải chứa ít nhất 4 nhãn phân loại thuộc các nhóm sau đây để đảm bảo việc phân lọc, quản lý Kanban board hiệu quả:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              {/* Module & Priority */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-mono font-bold text-slate-400 uppercase tracking-wider">1. Nhóm module:: (Phạm vi nghiệp vụ)</h4>
                  <div className="p-4 bg-slate-900/20 border border-slate-800 rounded-xl space-y-2">
                    <div className="flex justify-between items-center"><span className="font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded">module::backend</span><span className="text-slate-400 text-right">Công việc liên quan Spring Boot API</span></div>
                    <div className="flex justify-between items-center"><span className="font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 px-2 py-0.5 rounded">module::frontend</span><span className="text-slate-400 text-right">Task liên quan đến giao diện người dùng UI</span></div>
                    <div className="flex justify-between items-center"><span className="font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">module::database</span><span className="text-slate-400 text-right">Database, ERD, schema, migration</span></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-mono font-bold text-slate-400 uppercase tracking-wider">2. Nhóm priority:: (Độ khẩn cấp tiến độ)</h4>
                  <div className="p-4 bg-slate-900/20 border border-slate-800 rounded-xl space-y-2">
                    <div className="flex justify-between items-center"><span className="font-mono bg-rose-500/10 text-rose-400 border border-rose-500/20 px-2 py-0.5 rounded">priority::high</span><span className="text-slate-400 text-right">Việc quan trọng, ảnh hưởng trực tiếp tiến độ</span></div>
                    <div className="flex justify-between items-center"><span className="font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded">priority::medium</span><span className="text-slate-400 text-right">Cần làm trong sprint nhưng không khẩn cấp</span></div>
                    <div className="flex justify-between items-center"><span className="font-mono bg-slate-500/20 text-slate-300 border border-slate-600 px-2 py-0.5 rounded">priority::low</span><span className="text-slate-400 text-right">Việc phụ, có thể lùi lịch nếu thiếu thời gian</span></div>
                  </div>
                </div>
              </div>

              {/* Type & Status */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-mono font-bold text-slate-400 uppercase tracking-wider">3. Nhóm type:: (Bản chất công việc)</h4>
                  <div className="p-4 bg-slate-900/20 border border-slate-800 rounded-xl space-y-2">
                    <div className="flex justify-between items-center"><span className="font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">type::feature</span><span className="text-slate-400 text-right">Phát triển chức năng mới của hệ thống</span></div>
                    <div className="flex justify-between items-center"><span className="font-mono bg-rose-500/10 text-rose-400 border border-rose-500/20 px-2 py-0.5 rounded">type::bug</span><span className="text-slate-400 text-right">Lỗi hệ thống cần tiến hành sửa (Fix bug)</span></div>
                    <div className="flex justify-between items-center"><span className="font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 px-2 py-0.5 rounded">type::docs</span><span className="text-slate-400 text-right">Tài liệu, README, workflow, planning, guide</span></div>
                    <div className="flex justify-between items-center"><span className="font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded">type::setup</span><span className="text-slate-400 text-right">Setup repo, Git, branch, CI/CD, môi trường</span></div>
                    <div className="flex justify-between items-center"><span className="font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded">type::refactor</span><span className="text-slate-400 text-right">Cải thiện cấu trúc code, giữ nguyên chức năng</span></div>
                    <div className="flex justify-between items-center"><span className="font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded">type::test</span><span className="text-slate-400 text-right">Unit test, integration test, test cases</span></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-mono font-bold text-slate-400 uppercase tracking-wider">4. Nhóm status:: (Các cột trên Issue Board)</h4>
                  <div className="p-4 bg-slate-900/20 border border-slate-800 rounded-xl space-y-2">
                    <div className="flex items-center justify-between"><span className="font-mono bg-slate-800 text-slate-400 px-2 py-0.5 rounded">status::ready</span><span className="text-slate-400 text-right">Task rõ yêu cầu, nằm ở cột chờ nhận việc</span></div>
                    <div className="flex items-center justify-between"><span className="font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded">status::in-progress</span><span className="text-slate-400 text-right">Developer đang trực tiếp thực thi code</span></div>
                    <div className="flex items-center justify-between"><span className="font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded">status::review</span><span className="text-slate-400 text-right">Đã làm xong, đang chờ review / merge request</span></div>
                    <div className="flex items-center justify-between"><span className="font-mono bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-0.5 rounded">status::blocked</span><span className="text-slate-400 text-right">Task bị chặn do lỗi môi trường hoặc phụ thuộc task khác</span></div>
                    <div className="flex items-center justify-between"><span className="font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">status::done</span><span className="text-slate-400 text-right">Task hoàn thành, code đã merge thành công</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Board Simulation */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Luồng Di Chuyển Trạng Thái Của Task Trên Kanban Board</h4>
              <div className="grid grid-cols-5 gap-2 text-center text-xs font-mono">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-400">READY ➔</div>
                <div className="p-3 bg-blue-950/40 border border-blue-900/40 rounded-lg text-blue-400">IN-PROGRESS ➔</div>
                <div className="p-3 bg-amber-950/40 border border-amber-900/40 rounded-lg text-amber-400">REVIEW ➔</div>
                <div className="p-3 bg-red-950/40 border border-red-900/40 rounded-lg text-red-400">BLOCKED (Nếu bị kẹt)</div>
                <div className="p-3 bg-emerald-950/40 border border-emerald-900/40 rounded-lg text-emerald-400">DONE (Hoàn thành)</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: MEMBER WORKFLOW */}
        {activeTab === 'workflow' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Branch Map Section */}
            <div className="p-5 bg-slate-900/40 border border-slate-800 rounded-xl space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono">🗺️ Bản đồ quy hoạch nhánh rút gọn cho OJT</h3>
              <p className="text-xs text-slate-400">Tối giản quy trình bằng cách tạm thời loại bỏ hai loại nhánh phức tạp là <code className="bg-slate-950 text-rose-300 px-1 rounded">release/*</code> và <code className="bg-slate-950 text-rose-300 px-1 rounded">hotfix/*</code> để tập trung học tốt luồng cơ bản:</p>
              <pre className="bg-slate-950 p-4 rounded-lg font-mono text-[11px] text-sky-400 border border-slate-850 overflow-x-auto leading-relaxed">
{`main      ==================●==========================●========> (Bản deploy ổn định)
                             ↑                          ↑
develop   =======●===========●============●=============●========> (Nơi tích hợp code của team)
                  ↖         ↗              ↖           ↗
feature/* ●───●───● (Task 1)       ●───●───●──● (Task 2)`}
              </pre>
            </div>

            {/* Detailed Member Workflow Timeline */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">🔄 Quy Trình 7 Bước Làm Việc Của Thành Viên</h3>
              <div className="relative border-l-2 border-slate-800 ml-3 space-y-6 pl-6 text-xs">
                
                <div className="relative">
                  <div className="absolute -left-[31px] top-0.5 bg-slate-950 w-4 h-4 rounded-full border-2 border-slate-700 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-white text-sm">Bước 1: Nhận Issue và Chuyển Trạng Thái</h4>
                  <p className="text-slate-400 mt-1">Vào bảng Issue Board chung, nhận task được phân công. Tự kéo nhãn từ <code className="text-slate-300 bg-slate-800 px-1 rounded">status::ready</code> sang <code className="text-blue-300 bg-blue-950/50 px-1 rounded">status::in-progress</code>.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-0.5 bg-slate-950 w-4 h-4 rounded-full border-2 border-slate-700 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-white text-sm">Bước 2: Đồng Bộ Code Local & Tạo Nhánh Mới</h4>
                  <p className="text-slate-400 mt-1">Mở terminal tại máy local, đồng bộ thông tin nhánh develop và tạo nhánh tính năng mới từ develop:</p>
                  <pre className="bg-slate-950 p-2 rounded border border-slate-850 font-mono text-[11px] text-emerald-400 mt-1.5 w-fit">
{`git checkout develop
git pull origin develop
git checkout -b feature/login-page-ui`}
                  </pre>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-0.5 bg-slate-950 w-4 h-4 rounded-full border-2 border-slate-700 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-white text-sm">Bước 3: Viết Code & Commit Đúng Chuẩn (Conventional Commits)</h4>
                  <p className="text-slate-400 mt-1">Lập trình chức năng được giao. Tiến hành gom nhóm code và ghi commit theo đúng định dạng cấu trúc <code className="text-amber-400">type(scope): message</code>:</p>
                  <pre className="bg-slate-950 p-2 rounded border border-slate-850 font-mono text-[11px] text-emerald-400 mt-1.5 w-fit">
{`git add .
git commit -m "feat(frontend): create login page UI"`}
                  </pre>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-0.5 bg-slate-950 w-4 h-4 rounded-full border-2 border-slate-700 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-white text-sm">Bước 4: Đẩy Code Lên Hệ Thống GitLab</h4>
                  <p className="text-slate-400 mt-1">Push nhánh làm việc tính năng của bạn lên máy chủ từ xa (GitLab Server):</p>
                  <pre className="bg-slate-950 p-2 rounded border border-slate-850 font-mono text-[11px] text-emerald-400 mt-1.5 w-fit">
{`git push origin feature/login-page-ui`}
                  </pre>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-0.5 bg-slate-950 w-4 h-4 rounded-full border-2 border-slate-700 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-white text-sm">Bước 5: Tạo Merge Request Vào develop</h4>
                  <p className="text-slate-400 mt-1">Mở giao diện GitLab, tạo một yêu cầu Merge Request (MR). Chọn Source branch là nhánh của bạn và Target branch bắt buộc phải là <code className="text-sky-300">develop</code>. Đặt tiêu đề dạng: <code className="text-white">Resolve: [Frontend] Create Login Page UI</code>.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-0.5 bg-slate-950 w-4 h-4 rounded-full border-2 border-slate-700 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-white text-sm">Bước 6: Chuyển Trạng Thái Issue Chờ Khảo Sát</h4>
                  <p className="text-slate-400 mt-1">Sau khi tạo xong MR thành công, quay trở lại bảng quản lý công việc và di chuyển nhãn của issue từ trạng thái đang làm sang <code className="text-amber-300 bg-amber-950/50 px-1 rounded">status::review</code>.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-0.5 bg-slate-950 w-4 h-4 rounded-full border-2 border-slate-700 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-white text-sm">Bước 7: Leader Khảo Sát, Đánh Giá Và Đóng Task</h4>
                  <p className="text-slate-400 mt-1">Leader Thành sẽ trực tiếp vào đọc code, kiểm tra tính đúng đắn. Nếu không phát hiện xung đột hay lỗi, tiến hành phê duyệt duyệt merge vào develop. Hệ thống sẽ tự động đóng issue chuyển sang <code className="text-emerald-300 bg-emerald-950/50 px-1 rounded">status::done</code>.</p>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* TAB 4: TEMPLATES HUB */}
        {activeTab === 'templates' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-4 bg-slate-900/30 border border-slate-800 rounded-xl text-xs space-y-2">
              <h3 className="font-bold text-white text-sm">📋 Quy Tắc Đặt Tên Issue Tiêu Chuẩn</h3>
              <p className="text-slate-400">Áp dụng công thức nghiêm ngặt: <code className="bg-slate-950 text-amber-400 px-1 rounded font-mono">{issueFormatText}</code> để loại bỏ hoàn toàn các tên issue mơ hồ vô nghĩa.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Issue Template Display */}
              <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">1. Mẫu Nội Dung Issue Thống Nhất</h4>
                      <p className="text-[11px] text-slate-400">Dùng mẫu cấu trúc này để tạo chi tiết task trên GitLab</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(issueTemplateText, 'issue')}
                      className={`text-xs px-2.5 py-1 rounded font-semibold transition-all ${
                        copiedSection === 'issue' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                      }`}
                    >
                      {copiedSection === 'issue' ? '✓ Đã Copy!' : 'Copy Template'}
                    </button>
                  </div>
                  <pre className="bg-slate-950 p-3 rounded-lg border border-slate-850 text-[11px] text-slate-300 font-mono overflow-y-auto h-96 whitespace-pre-wrap leading-relaxed">
                    {issueTemplateText}
                  </pre>
                </div>
              </div>

              {/* MR Template Display */}
              <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">2. Mẫu Mô Tả Merge Request (MR)</h4>
                      <p className="text-[11px] text-slate-400">Lưu vào file: <code className="bg-slate-950 text-sky-400 px-1 rounded">.gitlab/merge_request_templates/default.md</code></p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(mrTemplateText, 'mr')}
                      className={`text-xs px-2.5 py-1 rounded font-semibold transition-all ${
                        copiedSection === 'mr' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                      }`}
                    >
                      {copiedSection === 'mr' ? '✓ Đã Copy!' : 'Copy Template'}
                    </button>
                  </div>
                  <pre className="bg-slate-950 p-3 rounded-lg border border-slate-850 text-[11px] text-slate-300 font-mono overflow-y-auto h-96 whitespace-pre-wrap leading-relaxed">
                    {mrTemplateText}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: SPRINT 0 PLANNING */}
        {activeTab === 'sprint0' && (
          <div className="space-y-6 animate-fadeIn text-xs">
            <div className="p-5 bg-slate-900/30 border border-slate-800 rounded-xl space-y-1">
              <h3 className="text-base font-bold text-white">📅 Kế Hoạch Sprint 0 - Project Setup & Planning</h3>
              <p className="text-slate-400">Mục tiêu cốt lõi của giai đoạn này là hoàn thành toàn bộ nền tảng, thiết lập thư mục cấu trúc và đồng bộ workflow làm việc cho cả 5 người trước khi bước vào code tính năng thương mại.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Task 1 */}
              <div className="p-4 bg-slate-900/20 border border-slate-800 rounded-lg space-y-2">
                <span className="bg-indigo-500/10 text-indigo-400 font-mono px-2 py-0.5 rounded border border-indigo-500/20">Issue 1 • Setup</span>
                <h4 className="text-sm font-bold text-white mt-1">[Setup] Configure GitLab Repository Workflow</h4>
                <p className="text-slate-400">Cấu hình các protected branch cho nhánh main, develop. Thiết lập chặn quyền push trực tiếp và yêu cầu bắt buộc phải qua review tối thiểu từ 1 người.</p>
                <div className="text-slate-500 font-mono text-[10px] pt-1">Assignee: Thành / Nhân | Priority: High</div>
              </div>

              {/* Task 2 */}
              <div className="p-4 bg-slate-900/20 border border-slate-800 rounded-lg space-y-2">
                <span className="bg-sky-500/10 text-sky-400 font-mono px-2 py-0.5 rounded border border-sky-500/20">Issue 2 • Docs</span>
                <h4 className="text-sm font-bold text-white mt-1">[Docs] Write GitLab Workflow Guideline</h4>
                <p className="text-slate-400">Viết chi tiết cẩm nang hướng dẫn cách đặt tên nhánh, viết commit message mẫu, quy định tạo issue và hướng dẫn quy trình review code.</p>
                <div className="text-slate-500 font-mono text-[10px] pt-1">Assignee: Nhân | Priority: High</div>
              </div>

              {/* Task 3 */}
              <div className="p-4 bg-slate-900/20 border border-slate-800 rounded-lg space-y-2">
                <span className="bg-indigo-500/10 text-indigo-400 font-mono px-2 py-0.5 rounded border border-indigo-500/20">Issue 3 • Setup</span>
                <h4 className="text-sm font-bold text-white mt-1">[Setup] Create Project Folder Structure</h4>
                <p className="text-slate-400">Xây dựng cây thư mục tổng bao gồm client, api-gateway và các folder rỗng cho server microservices. Viết file README tổng quan.</p>
                <div className="text-slate-500 font-mono text-[10px] pt-1">Assignee: Vinh / Khang | Priority: High</div>
              </div>

              {/* Task 4 */}
              <div className="p-4 bg-slate-900/20 border border-slate-800 rounded-lg space-y-2">
                <span className="bg-emerald-500/10 text-emerald-400 font-mono px-2 py-0.5 rounded border border-emerald-500/20">Issue 4 • Database</span>
                <h4 className="text-sm font-bold text-white mt-1">[Database] Design Initial ERD</h4>
                <p className="text-slate-400">Xác định các thực thể cốt lõi cho hệ thống đặt vé phim: users, movies, cinemas, showtimes, seats, bookings. Xuất ra file sơ đồ định dạng ảnh hoặc PDF.</p>
                <div className="text-slate-500 font-mono text-[10px] pt-1">Assignee: Hoàng | Priority: High</div>
              </div>

              {/* Task 5 */}
              <div className="p-4 bg-slate-900/20 border border-slate-800 rounded-lg space-y-2">
                <span className="bg-indigo-500/10 text-indigo-400 font-mono px-2 py-0.5 rounded border border-indigo-500/20">Issue 5 • Setup</span>
                <h4 className="text-sm font-bold text-white mt-1">[Frontend] Initialize React Vite Project</h4>
                <p className="text-slate-400">Khởi tạo mã nguồn dự án React Vite nằm gọn trong folder client. Cài đặt sẵn cấu trúc thư viện phụ trợ cơ bản: React Router Dom, Axios, Tailwind CSS.</p>
                <div className="text-slate-500 font-mono text-[10px] pt-1">Assignee: Khang | Priority: High</div>
              </div>

              {/* Task 6 */}
              <div className="p-4 bg-slate-900/20 border border-slate-800 rounded-lg space-y-2">
                <span className="bg-indigo-500/10 text-indigo-400 font-mono px-2 py-0.5 rounded border border-indigo-500/20">Issue 6 • Setup</span>
                <h4 className="text-sm font-bold text-white mt-1">[Backend] Initialize Spring Boot Services</h4>
                <p className="text-slate-400">Khởi tạo các module dịch vụ Spring Boot độc lập (auth-service, movie-service, booking-service, api-gateway). Đảm bảo từng cổng dịch vụ độc lập chạy thử local thành công.</p>
                <div className="text-slate-500 font-mono text-[10px] pt-1">Assignee: Vinh | Priority: High</div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer Branding */}
      <footer className="border-t border-slate-900 mt-20 bg-slate-950 py-6 text-center text-xs text-slate-500 font-mono tracking-wide">
        <p>© 2026 HCM26_CPL_JAVA_05_Group3 • FSOFT OJT Internal Presentation Tool.</p>
      </footer>
    </div>
  );
}