# 유레카 프론트엔드 비대면 3조
![image](https://github.com/user-attachments/assets/cf5feed1-4add-4bf7-ba2e-3be73272d434)

## 잡생각(JobThoughts)
![image](https://github.com/user-attachments/assets/d3a348df-4d15-41e9-8d48-1a06af898fd5)

💡 **잡생각**은 사용자의 성향, 선호도, 선택 데이터를 기반으로 적합한 직업을 추천하고,

해당 직업과 관련된 **실시간 채용정보**까지 연결해주는 **진로 탐색/채용 연계 서비스**입니다.

[🔗팀노션](https://www.notion.so/03-Team-Project-1ecbbd280f318080b3f1e61be738fdd6?pvs=4)
[🎨피그마](https://www.figma.com/design/kzBz8vu4o70rNzyNu9p76g/3%EC%A1%B0-%EC%9E%A1%EC%83%9D%EA%B0%81---%EC%9C%A0%EB%A0%88%EC%B9%B4-%EB%AF%B8%EB%8B%88%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B82?node-id=0-1&t=ZjWI6LJL9gbCBXy0-1)
[🌐배포사이트](https://job-thoughts-client.vercel.app/)
[👨‍🏫발표자료](https://www.canva.com/design/DAGm6Gp7AEs/RV6anLgGtHmjVq6RjZv9dw/view?utm_content=DA[…]hare&utm_medium=link2&utm_source=uniquelinks&utlId=h4543e21b68)
  
## 🏃‍♂️ 주요기능

| 기능 | 설명 |
| --- | --- |
| 1. 성향 선택형 테스트 | 간단한 질문을 통해 사용자의 기호와 선호 활동을 파악 |
| 2. 직업 추천 | **커리어넷 API 기반으로 적합한 직업 추천** |
| 3. 실시간 채용 정보 조회 | 추천된 직업의 **채용 공고를 바로 조회 가능**( 현재 mock데이터 사용중 ) |
| 4. 직업 정보 열람 | 각 직업에 대한 설명, 필요 역량, 자격증, 학과 정보 등 제공 |

### 메인화면

https://github.com/user-attachments/assets/44784c55-993d-4678-9093-69e1be39b3ef

### 직업 가치관 검사 화면

https://github.com/user-attachments/assets/c95d8638-ab44-45e5-91fb-48fa7865f83f

### 직업 가치관 검사 결과 화면

https://github.com/user-attachments/assets/c711b204-6118-4e52-ab4d-8f52edaeee2b

### 채용 공고 화면

https://github.com/user-attachments/assets/d4a62e6e-ade1-43d7-a7b3-c5d73ce2e755

### 모바일 반응형 구현(모든 페이지)

https://github.com/user-attachments/assets/a7157564-5de4-49c7-be2f-50f985d959cf

https://github.com/user-attachments/assets/aafbd9c3-7293-4582-a34b-f1f0ac03026d


## 📚 Tech Stack

### 💻 FE Development

[![My Skills](https://skillicons.dev/icons?i=ts,html,css,react,styledcomponents,vite)](https://skillicons.dev)

### 💻 BE Development

[![My Skills](https://skillicons.dev/icons?i=nodejs,express&theme=light)](https://skillicons.dev)


### ⌛ Developed Period

#### 2025.5.07 ~ 2025.5.20 (14 days)

# 👩‍💻 팀원

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/hyonun321"><img src="https://avatars.githubusercontent.com/u/119800605?v=4" width="120px;" alt=""/><br /><b>김현훈</b></a><br /><p>개발</p></td>
      <td align="center"><a href="https://github.com/minnnnseo"><img src="https://avatars.githubusercontent.com/u/124893976?v=4" width="120px;" alt=""/><br /><b>김민서</b></a><br /><p>개발</p></td>
      <td align="center"><a href="https://github.com/sejinbaek"><img src="https://avatars.githubusercontent.com/u/117803382?v=4" width="120px;" alt=""/><br /><b>백세진</b></a><br /><p>개발</p></td>
      <td align="center"><a href="https://github.com/yeom-kenco"><img src="https://avatars.githubusercontent.com/u/75061562?v=4" width="120px;" alt=""/><br /><b>염승아</b></a><br /><p>개발</p></td>
      <td align="center"><a href="https://github.com/H-JuKyung"><img src="https://avatars.githubusercontent.com/u/148874281?v=4" width="120px;" alt=""/><br /><b>황주경</b></a><br /><p>개발</p></td>
    </tr>
  </tbody>
</table>

# 🎯 커밋 컨벤션

- `Feat`: Add a new feature
- `Fix`: Bug fix
- `Docs`: Documentation updates
- `Style`: Code formatting, missing semicolons, cases where no code change is involved
- `Refactor`: Code refactoring
- `Test`: Test code, adding refactoring tests
- `Build`: Build task updates, package manager updates


# 🔰 실행 방법
``` bash
# 1. pnpm 설치 (npm 사용자는 먼저 pnpm을 설치해야 합니다)
npm install -g pnpm

# 2. 의존성 설치 (루트 디렉토리에서 실행)
pnpm install

# 3. 빌드 (서버, 클라이언트 등 모든 패키지 빌드)
pnpm build

# 4. 개발 서버 실행 (서버와 클라이언트가 동시에 실행됨)
pnpm dev
```

```env
# /server 폴더 내에 .env파일로 위치
CAREER_API_KEY={커리어넷에서 받은 API키}
```

> 💡 해당 프로젝트는 모노레포 구조로 되어 있으며, pnpm 워크스페이스를 사용해 서버와 클라이언트를 함께 관리합니다. 
> pnpm dev 실행 시 서버와 클라이언트가 동시에 구동됩니다.

### 🙌 이 프로젝트는 2025 URECA 2기 프론트엔드 미니 프로젝트로 진행되었습니다.
- 원본 레포: [github.com/hyunon321/JobThoughts](https://github.com/hyunon321/JobThoughts)
